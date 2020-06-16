import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
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
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    notLoggedIn: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
