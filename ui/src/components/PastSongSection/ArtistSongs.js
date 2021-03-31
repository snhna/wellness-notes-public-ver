import React, { Component } from "react";
import './ArtistSongs.css';
export default class ArtistSongs extends Component {
  render() {
    return (
        <div className="artistSongs">
            <div className="artist_pic"></div>
            <div className="song_artist">
                <p className="songs_name">Song</p>
                <p className="artist_name">Artist</p>
            </div>
        </div>
    );
  }
}
