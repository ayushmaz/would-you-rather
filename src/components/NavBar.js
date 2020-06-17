import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAuthedUser } from '../actions/authedUser';

class NavBar extends Component {

    onLogoutClicked = () =>{
        this.props.dispatch(logoutAuthedUser())
    }

    render() {
        const {authedUser , users} = this.props
        const username = users[authedUser]
        return (
            username ?
            <ul className="nav justify-content-center" style={{ fontSize: '1.45rem' }}>
                <li className="nav-item">
                    <Link to="/dashboard"><p className="nav-link">Home</p></Link>
                </li>
                <li className="nav-item">
                    <Link to="/add"><p className="nav-link">Create New Question</p></Link>
                </li>
                <li className="nav-item">
                    <Link to="/leaderboard"><p className="nav-link"> Leader Board</p></Link>
                </li>
                <li className="nav-item">
                {(username) && <p className="nav-link" style={{color:"green"}}>Hello! {username.name}</p>}
                </li>
                <li className="nav-item">
                {(username) && <Link to="/"><button onClick={this.onLogoutClicked} className="nav-link btn btn-outline-warning">Logout</button></Link>}
                </li>
            </ul> : <div></div>
        );
    }
}

function mapStateToProps({ authedUser,users }) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(NavBar);