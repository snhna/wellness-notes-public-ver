import pymongo
from pymongo import MongoClient
from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from spotipy.oauth2 import SpotifyOAuth
from flask import Flask, url_for, session, request, redirect, render_template, jsonify
import json
import time
from datetime import datetime
import os
from flask_cors import CORS, cross_origin
import random
import string
from urllib.parse import urlencode
import re


cluster = MongoClient("mongodb+srv://kamille:Ellimak32@wellness-notes.jy5wo.mongodb.net/cs125?retryWrites=true&w=majority")

db = cluster["cs125"]

collection = db["users"]
mood = db["mood"]
entries = db["entries"]

app = Flask(__name__)
CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}})

a_key = "75b6d6c3aa3d40a2b78ee583225266cd"
a_endpoint = "https://wellness-notes.cognitiveservices.azure.com/"
app.secret_key = 'cs125-ks'

# Client info
SPOTIPY_CLIENT_ID = "286e890d6e734c7f92460f9ac0e28bcc"
REDIRECT_URI = "http://127.0.0.1:5000/"
SPOTIPY_CLIENT_SECRET = "7298bd36435e4bd7a042d70fd251df7f"

# TOKEN_INFO = "token_info"
app.config['SESSION_COOKIE_NAME'] = 'spotify-login-session'

mood_score = 0

@app.route('/')
def login():
    sp_oauth = create_spotify_oauth()
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)

@app.route('/authorize')
def authorize():
    sp_oauth = create_spotify_oauth()
    session.clear()
    code = request.args.get('code')
    token_info = sp_oauth.get_access_token(code)
    session["token_info"] = token_info
    return redirect('http://localhost:3000/home', code=302)

@app.route('/logout')
def logout():
    for key in list(session.keys()):
        session.pop(key)
    return redirect('/')


@app.route('/getUsername')
def get_uname():
    session['token_info'], authorized = get_token()
    session.modified = True
    if not authorized:
        print("NOT AUTHORIZED")
        return redirect('/')
    sp = spotipy.Spotify(auth=session.get('token_info').get('access_token'))
    return {'id':sp.current_user()['id']}

@app.route('/getMood/<score>')
def get_mood(score):
    # session['token_info'], authorized = get_token()
    # session.modified = True
    # if not authorized:
    #     return redirect('/')
    # sp = spotipy.Spotify(auth=session.get('token_info').get('access_token'))

    session['token_info'], authorized = get_token()
    session.modified = True
    if not authorized:
        return redirect('/')
    sp = spotipy.Spotify(auth=session.get('token_info').get('access_token'))
    mood.insert_one({"user":sp.current_user()['id'], "mood":score})
    return redirect('http://localhost:3000/journal', code=302)

@app.route('/getJournal', methods = ['POST', 'GET'])
def get_journal():
    journal_entry = None
    if request.method == 'GET':
        journal_entry = request.args.get('entry', None)
    # print("Journal Entry:", journal_entry)
    entries.insert_one({"entry":journal_entry})
    return redirect('http://localhost:3000/intention', code=302)

def pos_quote():
    pos = ["'May your coffee be strong and your Mondays be short.'",
    "'Start each day with a grateful heart.'",
    "'The difference between who you are and who you want to be is what you do.'"]

    return random.choice(pos)

def neg_quote():
    neg = ["'Always find time for the things that make you feel happy to be alive.'", 
    "'Hang in there. It is astonishing how short a time it can take for very wonderful things to happen.'",
    "'There are far better things ahead than any we leave behind.'"]

    return random.choice(neg)

@app.route('/getTracks/<intention>')
def get_all_tracks(intention): 
    # feed user input from journal entry here, as well as mood score
    # 40% journal entry, 30% songs, 30% mood
    # equation: mood = .4*journal + .3*songs + .3*mood
    session['token_info'], authorized = get_token()
    session.modified = True
    if not authorized:
        return redirect('/')
    sp = spotipy.Spotify(auth=session.get('token_info').get('access_token'))
    print(sp.current_user()['id'])
    ids = []

    songs = sp.current_user_recently_played(limit=5)
    items = songs['items']
    for i in range(len(items)):
        ids.append(items[i]['track']['id'])
    
    total=0
    for i in ids:
        total += sp.audio_features(i)[0]['valence']

    tv = (total/5)
    journal = entries.find()[entries.count() - 1]["entry"]
    # feel = float(mood.find({"user":sp.current_user()['id']})[mood.count() - 1]["mood"])/100
    feel = float(mood.find()[mood.count() - 1]["mood"])/100

    client = authenticate_client()
    journal_score = sentiment_analysis(client, journal)
    print("Journal Score: ", journal_score)


    score = .4*journal_score + .3*tv + .3*feel
    # getting 150 or 100
    intent = float(intention)/100

    score *= intent

    # also need to account for 1.5x thing; may exceed 1
    if score > 1: # not acceptable valence. too high. 
        score = 1 # set it to 1
    
    print(score)

    recced_songs = sp.recommendations(seed_tracks=ids, limit = 10, target_valence=score)
    cleaned = []
    for i in recced_songs['tracks']:
        cleaned.append(i['id'])

    
    now = datetime.now()
    date_string = str(now)
    date_and_time = date_string.split(".")[0]
    dateOnly = date_and_time.split(" ")[0]

    ### quotes for description !!
    if tv <= 0.5: qt = neg_quote()
    else: qt = pos_quote()

    total_count = collection.count_documents({"user":sp.current_user()['id']}) 
    titl = "Wellness Notes Vol. " + str(total_count+1) + ": " + dateOnly
    newPlaylist = sp.user_playlist_create(sp.current_user()['id'], titl,public=False, description=qt)
    newPlaylist_id = newPlaylist["id"]
    sp.user_playlist_add_tracks(sp.current_user()['id'], newPlaylist_id, cleaned)
    

    usr = sp.current_user()['id']
    collection.insert_one({"user" : usr, "playlist":newPlaylist_id, "datetime":date_and_time, "mood":score})

    # HERE: we discard their journal entry in "entries"
    entries.delete_many({})

    prev_playlists = []
    prev_sessions = []
    for entry in collection.find({"user":sp.current_user()['id']}):
        prev_playlists.append(entry["playlist"])
        prev_sessions.append(entry["datetime"])
        
    return redirect('http://localhost:3000/song', code=302)

@app.route('/getPlaylist', methods=["GET"])
def get_playlist():
    play_uri = collection.find()[collection.count() - 1]["playlist"]
    final_uri = "spotify:playlist:" + play_uri
    response = jsonify(uri=final_uri)
    response.headers.add("Access-Control-Allow-Origin", "*")
    print(response)
    return response

@app.route('/deleteUser')
def delete_info():
    try:
        token_info = get_token()
    except:
        print("User not logged in.")
        redirect(url_for("login",_external=False))
    sp = spotipy.Spotify(auth=session.get('token_info').get('access_token'))
    myquery = {"user":sp.current_user()['id']}
    x = collection.delete_many(myquery)
    # add other ones if we add more collections
    return str(str(x.deleted_count) + " documents deleted.")


# https://github.com/JasonLeviGoodison/SpotifyToYoutubeMP3/blob/master/app.py
# Checks to see if token is valid and gets a new token if not
def get_token():
    token_valid = False
    token_info = session.get("token_info", {})

    # Checking if the session already has a token stored
    if not (session.get('token_info', False)):
        token_valid = False
        return token_info, token_valid

    # Checking if token has expired
    now = int(time.time())
    is_token_expired = session.get('token_info').get('expires_at') - now < 60

    # Refreshing token if it has expired
    if (is_token_expired):
        sp_oauth = create_spotify_oauth()
        token_info = sp_oauth.refresh_access_token(session.get('token_info').get('refresh_token'))

    token_valid = True
    return token_info, token_valid


def create_spotify_oauth():
    return SpotifyOAuth(
            client_id=SPOTIPY_CLIENT_ID,
            client_secret=SPOTIPY_CLIENT_SECRET,
            redirect_uri=url_for('authorize', _external=True),
            show_dialog=True,
            scope="user-read-private user-read-recently-played playlist-modify-private")

def authenticate_client():
    ta_credential = AzureKeyCredential(a_key)
    text_analytics_client = TextAnalyticsClient(
            endpoint=a_endpoint, 
            credential=ta_credential)
    return text_analytics_client




def sentiment_analysis(client, pgraph):
# clean up input
    re.sub('[()]', '', pgraph)
    documents = [pgraph]
    response = client.analyze_sentiment(documents = documents)[0]
    return response.confidence_scores.positive

if __name__ == "__main__":
    app.run()