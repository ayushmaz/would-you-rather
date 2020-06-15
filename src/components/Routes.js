import React, { Component, Fragment } from 'react';
import CreateNewQuestion from './CreateNewQuestion';
import LeaderBoard from './LeaderBoard';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';

class Routes extends Component {
    render() {
        const {notLoggedIn} = this.props
        console.log(notLoggedIn)
        return (
            <div className="container">
                {(notLoggedIn) ? <Route path='/' exact component={LoginPage}/> :
                <Fragment>
                    <Route  path='/' exact component={Dashboard} />
                    <Route  path='/add' exact component={CreateNewQuestion} />
                    <Route exact path='/leaderboard'  component={LeaderBoard} />
                </Fragment>}
            </div>
        );
    }
}



export default Routes;