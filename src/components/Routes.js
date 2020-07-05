import React, { Component, Fragment } from 'react';
import CreateNewQuestion from './CreateNewQuestion';
import LeaderBoard from './LeaderBoard';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import Question from './Question';
import Page404 from './Page404';
import NavBar from './NavBar';
import Register from './Register';

class Routes extends Component {
    render() {
        const { notLoggedIn } = this.props
        return (
            <div className="container">
                <Switch>
                    {(notLoggedIn) ? <Fragment>
                        <Route exact path='/' component={LoginPage} />
                        <Route exact path = '/register' component = {Register} />
                    </Fragment> :
                        <Fragment>
                            <NavBar />
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/add' exact component={CreateNewQuestion} />
                            <Route path='/leaderboard' exact component={LeaderBoard} />
                            <Route path="/questions/:id" component={Question} />
                        </Fragment>}
                        <Route component = {Page404}/>
                </Switch>

            </div>
        );
    }
}






export default Routes;