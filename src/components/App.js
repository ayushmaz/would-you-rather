import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import  LoadingBar  from 'react-redux-loading';


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
          
            
            {(this.props.loading === true) ? null :<div className="main-container">
              <NavBar />
              <Routes />
          </div>}
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({  loadingBar }) {
  return {
    loading : loadingBar === 1
  }
}

export default connect(mapStateToProps)(App);
