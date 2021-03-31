import React, { Component } from 'react';
import './App.css';

// All Pages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import WelcomePage from './components/WelcomeSection';
import HomePage from './components/HomeSection';
import MoodPage from './components/MoodSection';
import JournalPage from './components/JournalSection';
import IntentionPage from './components/IntentionSection';
import SongPage from './components/SongSection';
import PastSongs from './components/PastSongSection';
import EditUser from './components/UserInfoSection';


class App extends Component{
  render(){
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' component={WelcomePage} exact />
          <Route path='/home' component={HomePage} exact />
          <Route path='/mood' component={MoodPage} exact />
          <Route path='/journal' component={JournalPage} exact />
          <Route path='/intention' component={IntentionPage} exact />
          <Route path='/song' component={SongPage} exact />
          <Route path='/past_songs' component={PastSongs} exact />
          <Route path='/user_info' component={EditUser} exact />
        </Switch>
      </Router>
    );
  }
}
export default App;