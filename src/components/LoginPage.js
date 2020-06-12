import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';


class LoginPage extends Component {
    state = {
        authUser : 'tylermccgnis'
    }

    onSelectHandle = (e) => {
        //console.log(e.target.value)
        this.setState({
            authUser : e.target.value
        })
    }
    onSubmitHandle= (e) =>{
        e.preventDefault()
        const {authUser} = this.state
        const {dispatch} = this.props
        dispatch(setAuthedUser(authUser))

        //console.log(this.state.authUser)
    }
    render() {
        return (
            <div className='container' style= {{marginTop: '10%'}}>
                <h1 style = {{marginLeft : '40%', color: 'green'}}>SIGN IN</h1><br/>
                <form onSubmit = {(e) => this.onSubmitHandle(e)}>
                        <select className="form-control" defaultValue = {this.state.authUser}  onChange={(e) => this.onSelectHandle(e)}>
                            <option value="select" disabled>Select User</option>
                            <option value="tylermccgnis">tylermccgnis</option>
                            <option value="sarahdoe">sarahdoe</option>
                            <option value="johndoe">johndoe</option>
                        </select>
                        <br/>
                        <div className="form-group">
                            <input type="submit" className="form-control btn btn-success" />
                        </div>
                    

                </form>
            </div>
        );
    }
}


  

export default connect()(LoginPage);