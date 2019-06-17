import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBjUATRBbFAbmvYlsZj4Lh1AFUu6Wep3JU',
      authDomain: 'manager-b8a3f.firebaseapp.com',
      databaseURL: 'https://manager-b8a3f.firebaseio.com',
      projectId: 'manager-b8a3f',
      storageBucket: 'manager-b8a3f.appspot.com',
      messagingSenderId: '575715757414',
      appId: '1:575715757414:web:1a29acc5cccfd961'
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
