// Intention Section
import React from "react";
import './Intention.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Container, Link, ButtonContainer, 
        OptionContainer, RadioButtonContainer } from "./IntentionElements";

class IntentionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "100",
        };
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    handleFormSubmit = formSubmitEvent => {
        console.log("You have submitted:", this.state.selectedOption);
        formSubmitEvent.preventDefault();
    };

    render() {
        return (
            <Container>
                <h2>I want to feel:</h2><br/><br/>
                <form onSubmit={this.handleFormSubmit}>
                <OptionContainer>
                    <RadioButtonContainer>
                    {/* <label>
                    <input type="radio" value="150" name="intention" id="energized"
                        checked={this.state.selectedOption === "150"}
                        onChange={this.handleOptionChange}/>
                        Energized:<br /><pre class="tab">   Boost your mood!</pre>
                    </label> */}
                    <label for="energized"><span class="feelYesNo">
                        <input type="radio" value="150" name="intention" id="energized"
                            checked={this.state.selectedOption === "150"}
                            onChange={this.handleOptionChange}/>
                            Energized:<br /><pre class="tab">      Boost your mood!</pre>
                    </span></label>
                    </RadioButtonContainer>
                    <br /><br />
                    <RadioButtonContainer>
                    <label for="reflective"><span class="feelYesNo">
                    <input type="radio" value="100" name="intention" id="reflective"
                        checked={this.state.selectedOption === "100"} 
                        onChange={this.handleOptionChange}/> 
                        Reflective:<br /><pre class="tab">      Maintain your mood!</pre>
                    </span></label>
                    </RadioButtonContainer>
                </OptionContainer>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <ButtonContainer>
                    <Link to="/journal" className="back_icon__Link"> <ArrowBackIcon /> </Link>
                    {/* <Link to="/song" className="next_icon__Link"><ArrowForwardIcon /></Link> */}
                    <a id="sendIntention" href={"http://127.0.0.1:5000/getTracks/" + this.state.selectedOption} alt="Send Intention" className="next_icon__Link">
                        <ArrowForwardIcon />
                    </a>
                </ButtonContainer>
                </form>
            </Container>
        )
    }
}


export default IntentionPage;
