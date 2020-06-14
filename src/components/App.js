import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import React, { Component } from 'react';
import LoginPage from './LoginPage';
import CreateNewQuestion from './CreateNewQuestion';
import Question from './Question';
import LeaderBoard from './LeaderBoard';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Dashboard/>
      </div>
    );
  }
}



export default connect()(App);
