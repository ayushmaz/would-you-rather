import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import  LoadingBar  from 'react-redux-loading';
import Register from './Register';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { notLoggedIn } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          
            <Register/>
            {(this.props.loading === true) ? null :<div className="main-container">
            <Routes notLoggedIn={notLoggedIn} />
          </div>}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser , loadingBar }) {
  return {
    notLoggedIn: authedUser === null,
    loading : loadingBar === 1
  }
}

export default connect(mapStateToProps)(App);
