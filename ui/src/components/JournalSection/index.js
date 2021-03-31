// Journal Section: Textbox entry
import React from "react";
// import React, { useState } from "react";
import { JournalContainer, JournalContent, JournalH1, JournalTextEntry, ButtonContainer, Button } from "./JournalElements"
import { ReactComponent as Next } from "../../images/NextArrow.svg";
import { ReactComponent as Back } from "../../images/BackArrow.svg";
import { Link } from 'react-router-dom';

class JournalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            journalEntry: ''
        };
    }
    
    onChange(e) {
        console.log("Correctly Edited");
        console.log(this.state.journalEntry);
        this.setState({journalEntry: e.target.value});
    }
    
    // handleJournal = e => {
    //     e.preventDefault();
    //     fetch('http://127.0.0.1:5000/getJournal', {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/json'
    //           },
    //           body: JSON.stringify({
    //             journalEntry: this.state.journalEntry,
    //           })
    //     });
    //     this.setState({
    //         redirectToIntention: true,
    //     })
    // }
    // handleFormSubmit = formSubmitEvent => {
    //     console.log("You have submitted:", this.state.journalEntry);
    //     this.setState({
    //         // redirectToIntention: true,
    //         headers: {
    //             'Content-Type': 'application/json'
    //           }
    //     })
        // formSubmitEvent.preventDefault();

        // --------------------------------

        // console.log("making request")
        // fetch('http://127.0.0.1:5000/getJournal', {
        //     method:"POST",
        // })
        // .then(response => {
        //     console.log(response)
        //     return response.json()
        // })
        // .then(json => {
        // console.log=(json)
        // })

        // ---------------------------------
    // };

    // added after work session:
    // handleFormSubmit = e => {
    //     e.preventDefault();
    //     // const data = {name: value};
    //     console.log('submit');
    //     // console.log(value);
    //     fetch('http://127.0.0.1:5000/getJournal', {
    //         method:"POST",
    //         headers: {
    //             'Content-type':'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //         },
    //         body: JSON.stringify({entry: this.state.journalEntry}),
    //     })
    //         .then(res=>res.json())
    //         .then(res=>console.log(res));
    // }

    // handleValue(e) {
    //     setValue(e.target.value);
    // }
    
    render() {
        return(
            <JournalContainer>
                <JournalContent>
                    {/* //from inside form tag: onSubmit={this.handleFormSubmit} */}
                    <form action="http://127.0.0.1:5000/getJournal" method="GET" width="90%">
                    <JournalH1>Feel free to express anything and everything on your mind right now.</JournalH1>
                    <JournalTextEntry placeholder="Start your journal entry here" name = "entry" value={this.state.journalEntry} onChange={this.onChange.bind(this)}></JournalTextEntry>
                    <ButtonContainer>
                        <Link to="/mood" padding="0px 0px">
                        <Button>
                            <Back className="backButton" />
                        </Button>
                        </Link>
                        <Button type="submit">
                            <Next className="nextButton" />
                        </Button>
                        {/* <button onClick = {this.handleJournal}>Click me (Journal Entry)</button> */}
                    </ButtonContainer>
                    </form>
                </JournalContent>
            </JournalContainer>
        )
    }
}


export default JournalPage;