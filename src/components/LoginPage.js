import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import { Redirect, Link } from 'react-router-dom';
import { Container, FormControl, InputLabel, Button, OutlinedInput, Grid } from '@material-ui/core';
import * as firebase from 'firebase'


class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        verified: false
    }

    onInputChangeHandler = e => {
        if (e.target.id === "email") {
            this.setState({
                email: e.target.value
            })
        }
        if (e.target.id === "password") {
            this.setState({
                password: e.target.value
            })
        }
    }
    onSubmitHandle = async (e) => {
        e.preventDefault()
        const { users, dispatch } = this.props
        var data = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(err => console.log("err", err))
        var database = firebase.firestore()
        if (data) {
            dispatch(setAuthedUser(data.user.uid))
            this.setState({ verified: true })
        } else {
            alert("Invalid email or password")
            this.setState({
                email: '',
                password: '',
            })
        }


    }
    render() {
        const { users } = this.props
        const { verified } = this.state
        if (verified === true) {
            return <Redirect to='/dashboard'></Redirect>
        }
        return (
            <Container style={{ marginTop: "20%" }}>
                <Grid
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"

                >
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="Email">Email</InputLabel>
                        <OutlinedInput type="email" value={this.state.email} onChange={this.onInputChangeHandler} id="email" label="Email" />
                    </FormControl>
                    <FormControl variant="outlined" style={{ margin: 20 }}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput value={this.state.password} onChange={this.onInputChangeHandler} id="password" type="password" label="Password" />
                    </FormControl>

                    <Button
                        disabled={this.state.email.trim() === "" || this.state.password.trim() == ""}
                        type="submit"
                        onClick={this.onSubmitHandle}
                        variant="contained"
                        color="primary">
                        Submit
                        </Button>
                    <p style={{ marginTop: 10 }}>New User? <Link to='/register'><span>Register Here</span></Link> </p>
                </Grid>
            </Container>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}



export default connect(mapStateToProps)(LoginPage);