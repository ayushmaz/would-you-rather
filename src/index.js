import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middlewares'
import * as firebase from 'firebase'

const store = createStore(reducer, middleware)

var firebaseConfig = {
    apiKey: "AIzaSyCpKiOpcm3TAuRM5Jt6kJUO8EFZeVt6Fvo",
    authDomain: "would-you-rather-644f4.firebaseapp.com",
    databaseURL: "https://would-you-rather-644f4.firebaseio.com",
    projectId: "would-you-rather-644f4",
    storageBucket: "would-you-rather-644f4.appspot.com",
    messagingSenderId: "834255968761",
    appId: "1:834255968761:web:f20173cc204e37b424c528",
    measurementId: "G-L5CXJ8CL1Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, 
    document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
