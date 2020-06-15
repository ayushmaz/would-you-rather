import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';
import { Route, Redirect } from 'react-router-dom';


class LoginPage extends Component {
    state = {
        authUser: '',
        toDashboard: false
    }

    onSelectHandle = (e) => {
        //console.log(e.target.value)
        this.setState({
            authUser: e.target.value
        })
    }
    onSubmitHandle = (e) => {
        e.preventDefault()
        const { authUser } = this.state
        const { dispatch } = this.props
        dispatch(setAuthedUser(authUser));
        //console.log(this.state.authUser)

        this.setState(() => ({
            toDashboard: authUser ==='' ? true : false,
        }))
    }
    render() {
        const { users } = this.props
        const { toDashboard } = this.state
        if (toDashboard === true) {
            return <Redirect to='/dashboard'></Redirect>
        }
        return (
            <div className='container' style={{ marginTop: '10%' }}>
                <h1 style={{ marginLeft: '40%', color: 'green' }}>SIGN IN</h1><br />
                <form onSubmit={(e) => this.onSubmitHandle(e)}>
                    <select className="form-control" defaultValue={this.state.authUser} onChange={(e) => this.onSelectHandle(e)}>
                        <option value="" disabled>Select User</option>
        `               {Object.keys(users).map((user) => <option key={users[user].id} value={users[user].id}>{users[user].name}</option>)}
                    </select>
                    <br />
                    <div className="form-group">
                        <input disabled={this.state.authUser === ''} type="submit" className="form-control btn btn-success" />
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}



export default connect(mapStateToProps)(LoginPage);