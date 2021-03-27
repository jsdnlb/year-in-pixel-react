import React, { Component } from "react";
import "./App.css";
import firebase from 'firebase/app';
import 'firebase/auth';
import { StyledFirebaseAuth } from "react-firebaseui/StyledFirebaseAuth";

var firebaseConfig = {
  apiKey: "AIzaSyCyu1LlM-Dv-kLyWFbIWPZeOR6w33tP218",
  authDomain: "pixel-in-year.firebaseapp.com",
  projectId: "pixel-in-year",
  storageBucket: "pixel-in-year.appspot.com",
  messagingSenderId: "624026918790",
  appId: "1:624026918790:web:c9d41f751a0e1d733c1607",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.FacebookAuthProvider.PROVIDER_ID],
    callback: {
      signSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  };

  render() {
    return <div className="App">{this.state.isSignedIn ? <div>Signed in</div> : <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth}></StyledFirebaseAuth>}</div>;
  }
}

export default App;
