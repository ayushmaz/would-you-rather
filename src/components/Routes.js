import React, { Component, Fragment } from 'react';
import CreateNewQuestion from './CreateNewQuestion';
import LeaderBoard from './LeaderBoard';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import Question from './Question';

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
                    <Route path='/leaderboard' exact  component={LeaderBoard} />
                    <Route path="/questions/:id" component={Question} />
                </Fragment>}
            </div>
        );
    }
}



export default Routes;