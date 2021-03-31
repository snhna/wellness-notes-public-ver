// Home Section
import React from "react";
import Button from '@material-ui/core/Button';
import './Home.css'
import { Container, Link } from "./HomeElements"

const HomePage = () => {
    return(
        <Container>
            <h1 className="welcome__topText">Welcome back!</h1>
            <div className="select__buttons">
                <Link to="/mood">
                <Button variant="contained" color="secondary"
                 className="entry__button">
                New Entry
                </Button>
                </Link>
                <br />
                <Link to='/past_songs'>
                <Button variant="contained" color="secondary" 
                 className="entry__button">
                    Past Songs
                </Button>
                </Link>
                <br />
                <Link to='/user_info'>
                <Button variant="contained" color="secondary" 
                 className="entry__button">
                    Edit User Info
                </Button>
                </Link>      
                <br />
                <Link to='/'>
                <Button variant="contained" color="secondary" 
                 className="edit__userButton">
                    Logout
                </Button> 
                </Link>
            </div> 
        </Container>
    )
}


export default HomePage;