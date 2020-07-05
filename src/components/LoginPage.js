import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import { Redirect, Link } from 'react-router-dom';
import { Container, FormControl, InputLabel, Button, OutlinedInput, Grid } from '@material-ui/core';


class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        toDashboard: false
    }

    onInputChangeHandler = e => {
        if (e.target.id === "username") {
            this.setState({
                username: e.target.value
            })
        }
        if (e.target.id === "password") {
            this.setState({
                password: e.target.value
            })
        }
    }
    onSubmitHandle = (e) => {
        e.preventDefault()
        const { users ,dispatch } = this.props
        const verify = Object.keys(users).some((user) => this.state.username === user)

        if(verify === true){
            dispatch(setAuthedUser(this.state.username));
            this.setState(() => ({
                toDashboard: this.state.username !== '' ? true : false,
            }))
        }else{
            alert("No such user")
            this.setState({
                username : '',
                password : ''
            })
        }
        

        
    }
    render() {
        const { users } = this.props
        const { toDashboard } = this.state
        if (toDashboard === true) {
            return <Redirect to='/dashboard'></Redirect>
        }
        return (
            <Container style = {{marginTop : "20%"}}>
                <Grid
                    xs={12}
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                    sm={12}
                >
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="Username">Username</InputLabel>
                        <OutlinedInput value={this.state.username} onChange={this.onInputChangeHandler} id="username" label="Username" />
                    </FormControl>
                    <FormControl variant="outlined" style={{ margin: 20 }}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput value={this.state.password} onChange={this.onInputChangeHandler} id="password" type="password" label="Password" />
                    </FormControl>

                    <Button
                        disabled={this.state.username.trim() === ""}
                        type="submit"
                        onClick={this.onSubmitHandle}
                        variant="contained"
                        color="primary">
                        Submit
                        </Button>
                        <p style ={{marginTop:10}}>New User? <Link to='/register'><span>Register Here</span></Link> </p>
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