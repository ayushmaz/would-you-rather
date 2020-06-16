import React, { Component, Fragment } from 'react';
import CreateNewQuestion from './CreateNewQuestion';
import LeaderBoard from './LeaderBoard';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import Question from './Question';

class Routes extends Component {
    render() {
        const { notLoggedIn } = this.props
        return (
            <div className="container">
                <Switch>
                    {(notLoggedIn) ? <Route path='/' exact component={LoginPage} /> :
                        <Fragment>
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/add' exact component={CreateNewQuestion} />
                            <Route path='/leaderboard' exact component={LeaderBoard} />
                            <Route path="/questions/:id" component={Question} />
                        </Fragment>}

                        <Route render={() =>{
                            return <div className="container text-center">
                                <h1 style={{color : 'orange',marginTop:'30%' ,marginBottom : '20px'}}>Oops! Page Not Found</h1>
                                <Link to="/"><button className="btn btn-info">Login</button></Link>
                            </div>
                        }}/>
                </Switch>

            </div>
        );
    }
}



export default Routes;