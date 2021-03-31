import React from 'react'
import './EditUser.css';
// import {TextField} from '@material-ui/core';
import { Container, ButtonContainer, Link, DLink } from "./UserInfoElements"

function EditUser() {
    return (
        <Container>
            <h1 className="edit__topText">Edit User <br/>Information</h1>
            {/* <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="First Name" />
                <br/><br/><br/>
                <h3 className="delete_account">
                    Don't like Wellness Notes?
                </h3>
                <DLink to="/">Delete My Account</DLink>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <ButtonContainer>
                    <Link to ="/home" className="cancel__link"> Cancel </Link>
                    <Link to ="/home" className="save__link">Save</Link>
                </ButtonContainer>
            </form> */}
            <br/>
            <h3 className="delete_account">
                Don't like Wellness Notes?
            </h3>
            <DLink to="/">Delete My Account</DLink>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <ButtonContainer>
                <Link to ="/home" className="cancel__link"> Cancel </Link>
                <Link to ="/home" className="save__link">Save</Link>
            </ButtonContainer>
        </Container>
    )
}

export default EditUser