import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import React, { Component } from 'react';
import LoginPage from './LoginPage';
import CreateNewQuestion from './CreateNewQuestion';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <CreateNewQuestion/>
      </div>
    );
  }
}



export default connect()(App);
