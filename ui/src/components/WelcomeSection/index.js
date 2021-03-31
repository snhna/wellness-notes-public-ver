// Journal Section: Textbox entry
// import React, { useState, useEffect } from "react";
import { WelcomeContainer, WelcomeContent, WelcomeH1, 
         WelcomeText, ButtonContainer } from "./WelcomeElements"
import { ReactComponent as Login } from "../../images/LoginButton.svg";
// import { Link } from 'react-router-dom';

// const WelcomePage = (props) => {
function WelcomePage() {
    // const {
    //     REACT_APP_CLIENT_ID,
    //     REACT_APP_AUTHORIZE_URL,
    //     // REACT_APP_REDIRECT_URL
    // } = process.env;

    // const handleLogin = () => {
    //     window.location = `${REACT_APP_AUTHORIZE_URL}?
    //     client_id=${REACT_APP_CLIENT_ID}&
    //     redirect_uri=${REACT_APP_REDIRECT_URL}&
    //     response_type=token&show_dialog=true`;
    // };

    // const [initState, setInitState] = useState({});
    // useEffect(()=> {
    //     fetch('/').then(
    //         res => res.json()).then(data => setInitState(data))  
    // }, []);
    
    return(
        <WelcomeContainer>
            <WelcomeContent>
                <WelcomeH1>Welcome to Wellness Notes!</WelcomeH1>
                <WelcomeText>
                    A music-recommending journal app with a goal to promote mental health awareness.
                </WelcomeText>
                <br />
                <ButtonContainer>
                    {/* <Button type="submit" onClick={handleLogin}>
                        <Login className="login" />
                    </Button> */}
                    <a id="login" href="http://127.0.0.1:5000/" alt="log in">
                        <Login className="login" />
                    </a>
                    {/* <Button action="/home" method="post">
                        <Login className="login" />
                    </Button> */}
                </ButtonContainer>
            </WelcomeContent>
        </WelcomeContainer>
    );
};

export default WelcomePage;