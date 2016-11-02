import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDls_Bacpf-vCHDB_mEgxoh8Pg9iy-2td8',
      authDomain: 'authdemo-b6368.firebaseapp.com',
      databaseURL: 'https://authdemo-b6368.firebaseio.com',
      storageBucket: 'authdemo-b6368.appspot.com',
      messagingSenderId: '709773030684'
    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    }

    renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return (
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          );
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large" />;
      }
    }

    render() {
      return (
        <View>
          <Header headerText="Authentication" />
          {this.renderContent()}
        </View>
      );
    }
  }

  export default App;
