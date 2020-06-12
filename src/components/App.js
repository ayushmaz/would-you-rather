import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import React, { Component } from 'react';
import LoginPage from './LoginPage';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoginPage/>
      </div>
    );
  }
}



export default connect()(App);
