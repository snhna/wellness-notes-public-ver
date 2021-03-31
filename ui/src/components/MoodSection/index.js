// Journal Section: Textbox entry
import React from "react";
// import React, { useState } from "react";
import { MoodContainer, MoodContent, MoodH1, MoodH2, 
         MoodText, MoodButtonContainer, MButtonContainer,
         Button, ButtonContainer } from "./MoodElements"
import { ReactComponent as Awful } from '../../images/Awful.svg';
import { ReactComponent as Bad } from '../../images/Bad.svg';
import { ReactComponent as Good } from '../../images/Good.svg';
import { ReactComponent as Great } from '../../images/Great.svg';
import { ReactComponent as Neutral } from '../../images/Neutral.svg';
import { ReactComponent as Next } from "../../images/NextArrow.svg";
import { ReactComponent as Back } from "../../images/BackArrow.svg";
import { Link } from 'react-router-dom';

class MoodPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "50",
            // redirectToJournal: false
        };
    }

    handleOptionChange = changeEvent => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        // this.setState({
        //     redirectToJournal: true
        // })
        console.log("You have submitted:", this.state.selectedOption);
      };

    render() {
        // const redirectToJournal = this.state.redirectToJournal;
        // if (redirectToJournal) {
        //     return <Redirect to="/journal" />
        // }
        return(
        <MoodContainer>
            <MoodContent>
                <MoodText>
                    <MoodH1>Hello!</MoodH1>
                    Remember that this is a safe space
                    - we won’t be saving anything you say here. 
                </MoodText>
                <br />
                <MoodH2>How are you feeling?</MoodH2>
                <form onSubmit={this.handleFormSubmit}>
                <MoodButtonContainer>
                    <MButtonContainer>
                        <label for="great">
                            <Great className="moodGreat" />
                        </label>
                        <input type="radio" value="100" name="mood" id="great" 
                            checked={this.state.selectedOption === "100"} onChange={this.handleOptionChange}/>
                    </MButtonContainer>
                    <MButtonContainer>
                        <label for="good">
                            <Good className="moodGood" />
                        </label>
                        <input type="radio" value="70" name="mood" id="good" 
                            checked={this.state.selectedOption === "70"} onChange={this.handleOptionChange}/>
                    </MButtonContainer>
                    <MButtonContainer>
                        <label for="neutral">
                            <Neutral className="moodNeutral" />
                        </label>
                        <input type="radio" value="50" name="mood" id="neutral" 
                            checked={this.state.selectedOption === "50"} onChange={this.handleOptionChange}/>
                    </MButtonContainer>
                    <MButtonContainer>
                        <label for="bad">
                            <Bad className="moodBad" />
                        </label>
                        <input type="radio" value="30" name="mood" id="bad" 
                            checked={this.state.selectedOption === "30"} onChange={this.handleOptionChange}/>
                    </MButtonContainer>
                    <MButtonContainer>
                    <label for="awful">
                        <Awful className="moodAwful" />
                    </label>
                    <input type="radio" value="10" name="mood" id="awful" 
                        checked={this.state.selectedOption === "10"} onChange={this.handleOptionChange}/>
                    </MButtonContainer>
                </MoodButtonContainer>
                <br /><br /><br /><br /><br />
                <ButtonContainer>
                    <Link to="/home" padding="0px 0px">
                    <Button>
                        <Back className="backButton" />
                    </Button>
                    </Link>
                    <a id="sendMood" href={"http://127.0.0.1:5000/getMood/" + this.state.selectedOption} alt="Send Mood">
                        <Next className="nextButton"/>
                    </a>
                    {/* <Link to="/journal" padding="0px 0px">
                    <Button type="submit">
                        <Next className="nextButton" />
                    </Button>
                    </Link> */}
                </ButtonContainer>
                </form>
            </MoodContent>
        </MoodContainer>
        );
    }
};


export default MoodPage;