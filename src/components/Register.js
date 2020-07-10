import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import avatar1 from '../avatars/avatar1.png'
import avatar2 from '../avatars/avatar2.png'
import avatar3 from '../avatars/avatar3.png'
import avatar4 from '../avatars/avatar4.png'
import avatar5 from '../avatars/avatar5.png'
import avatar6 from '../avatars/avatar6.png'
import avatar7 from '../avatars/avatar7.png'
import avatar8 from '../avatars/avatar8.png'
import avatar9 from '../avatars/avatar9.png'
import { FormControl, InputLabel, OutlinedInput, Input, FormHelperText, Grid, Button, Avatar, Badge } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import { formatUser } from '../utils/_DATA'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../actions/users';
import { addUserToDB } from '../utils/api';
import * as firebase from 'firebase'


const AvatarView = props => {
    return (
        <div onClick={() => props.onAvatarClick(props.avatar)} style={{ margin: 10 }}>
            <Badge overlap="circle" badgeContent={props.selected ? <DoneIcon fontSize="small" /> : 0} color="secondary">
                <Avatar alt="Remy Sharp" src={props.avatar} style={{ height: 80, width: 80 }} />
            </Badge>
        </div>
    );
}

class Register extends Component {
    state = {
        submitted: false,
        email: "",
        selected: "",
        name: "",
        username: "",
        password: "",
        tokenID: ""
    }

    onAvatarClick = avatar => {
        if (this.state.selected === avatar) {
            this.setState({
                selected: ""
            })
        } else {
            this.setState({
                selected: avatar
            })
        }
    }

    onInputChangeHandler = e => {
        if (e.target.id === "name") {
            this.setState({
                name: e.target.value
            })
        }

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

        if (e.target.id === "email") {
            this.setState({
                email: e.target.value
            })
        }
    }

    onSubmitHandler = async e => {
        e.preventDefault()
        const { dispatch } = this.props
        const { selected, name, username, email, password, tokenID } = this.state

        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(doc => {
                const formattedUser = formatUser({ avatar: selected, name, username, tokenID : doc.user.uid })
                console.log(formattedUser[doc.user.uid])
                dispatch(addUser(formattedUser[doc.user.uid]))
                addUserToDB(formattedUser[doc.user.uid])
                this.setState({
                    submitted: true
                })
            })

            var user = await firebase.auth().currentUser;
            //console.log("user" , user)

    }
    render() {
        if (this.state.submitted === true) {
            return <Redirect to="/"></Redirect>
        }
        const { selected, password, username, name, email } = this.state
        return (

            <Container>
                <Grid style={{ marginTop: 30 }} container spacing={3}>
                    <Grid
                        xs={12}
                        item
                        container
                        direction="column"
                        justify="space-evenly"
                        alignItems="center"
                        sm={8}
                    >
                        <FormControl variant="outlined" style={{ margin: 20 }}>
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <OutlinedInput onChange={this.onInputChangeHandler} id="name" label="Name" />
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="Username">Username</InputLabel>
                            <OutlinedInput onChange={this.onInputChangeHandler} id="username" label="Username" />
                            {false && <FormHelperText id="component-error-text">Error</FormHelperText>}
                        </FormControl>
                        <FormControl variant="outlined" style={{ margin: 20 }}>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <OutlinedInput onChange={this.onInputChangeHandler} id="email" type="email" label="Email" />
                        </FormControl>
                        <FormControl variant="outlined" style={{ margin: 20 }}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput onChange={this.onInputChangeHandler} id="password" type="password" label="Password" />
                        </FormControl>

                        <Button
                            disabled={name.trim() === "" || username.trim() === "" || password.trim() === "" || selected === "" || email.trim() === ""}
                            type="submit"
                            onClick={this.onSubmitHandler}
                            variant="contained"
                            color="primary">
                            Submit
                        </Button>
                        <p>Already Registered? <Link to='/'><span>Login</span></Link> </p>

                    </Grid>
                    <Grid container xs={12} item sm={4} spacing={2}>

                        <div>
                            Choose avatar
                        </div>
                        <Grid container spacing={2}>
                            <Grid container item xs={12} spacing={3}>
                                <AvatarView selected={selected === avatar1} avatar={avatar1} message={"avatar1"} onAvatarClick={this.onAvatarClick} />
                                <AvatarView selected={selected === avatar2} avatar={avatar2} message={"avatar2"} onAvatarClick={this.onAvatarClick} />
                                <AvatarView selected={selected === avatar3} avatar={avatar3} message={"avatar3"} onAvatarClick={this.onAvatarClick} />
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <AvatarView selected={selected === avatar4} avatar={avatar4} message={"avatar4"} onAvatarClick={this.onAvatarClick} />
                                <AvatarView selected={selected === avatar5} avatar={avatar5} message={"avatar5"} onAvatarClick={this.onAvatarClick} />
                                <AvatarView selected={selected === avatar6} avatar={avatar6} message={"avatar6"} onAvatarClick={this.onAvatarClick} />
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <AvatarView selected={selected === avatar7} avatar={avatar7} message={"avatar7"} onAvatarClick={this.onAvatarClick} />
                                <AvatarView selected={selected === avatar8} avatar={avatar8} message={"avatar8"} onAvatarClick={this.onAvatarClick} />
                                <AvatarView selected={selected === avatar9} avatar={avatar9} message={"avatar9"} onAvatarClick={this.onAvatarClick} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default connect()(Register);