import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import React, { Component, Fragment } from 'react';
import LoginPage from './LoginPage';
import CreateNewQuestion from './CreateNewQuestion';
import Question from './Question';
import LeaderBoard from './LeaderBoard';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { notLoggedIn } = this.props;
    return (
      <Router>
        <Fragment>
          <div className="main-container">
            <NavBar />
            <Routes notLoggedIn={notLoggedIn} />
          </div>
        </Fragment>
      </Router>
      // <div>
      //   <NavBar/>
      //   {/*this.props.loading === false ? <LoginPage/>: <Dashboard/> */}
      // </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    notLoggedIn: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
