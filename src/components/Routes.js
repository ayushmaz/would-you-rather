import React, { Component, Fragment } from 'react';
import CreateNewQuestion from './CreateNewQuestion';
import LeaderBoard from './LeaderBoard';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import Question from './Question';
import Page404 from './Page404';
import PrivateRoute from './PrivateRoute';

class Routes extends Component {
    render() {

        return (
            <div className="container">

                <Fragment>
                    <Route path="/" exact component={LoginPage} />
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/add' component={CreateNewQuestion} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <PrivateRoute path="/questions/:id" component={Question} />
                </Fragment>

            </div>
        );
    }
}






export default Routes;