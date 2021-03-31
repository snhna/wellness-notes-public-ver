import React from 'react';
import './Song.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Container, Link, ButtonContainer, SongH2 } from "./SongElements"
import SpotifyPlayer from 'react-spotify-player'

class SongPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uri: "",
            size: { width: '100%', height: '325' },
            view: 'list', // or 'coverart'
            theme: 'white' // or 'black'
        };
        this.fetchPlaylist();
    }
    
    fetchPlaylist = () => {
        let playlist_uri = "";
        fetch("http://127.0.0.1:5000/getPlaylist")
            .then(response => response.json())
            .then(result => {
                playlist_uri = result.uri
                console.log("RESULT FROM getPlaylist endpoint uri: " + result.uri)
                this.setState({uri: result.uri})
            })
            .catch(e => {
                console.log(e);
            });
        return playlist_uri
    };

    render() {
        return (
            <Container>
                <SongH2>Based on your journal and recent listen history, we've made you a new Spotify playlist!</SongH2>
                <SpotifyPlayer
                    uri={this.state.uri}
                    size={this.state.size}
                    view={this.state.view}
                    theme={this.state.theme}
                />
                <br /><br />
                <ButtonContainer>
                    <Link to="/home" className="next_icon__Link"><ArrowForwardIcon /></Link>
                </ButtonContainer>
            </Container>
        );
    }
}
export default SongPage;
