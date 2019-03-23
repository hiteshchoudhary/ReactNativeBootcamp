import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";
import * as firebase from "firebase";

//import all screens
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";

var config = {
  apiKey: "AIzaSyAWKvw8txrPf73jwUFaiKR0Ss1bn96sEQU",
  authDomain: "reactbootcamp-c4089.firebaseapp.com",
  databaseURL: "https://reactbootcamp-c4089.firebaseio.com",
  projectId: "reactbootcamp-c4089",
  storageBucket: "reactbootcamp-c4089.appspot.com",
  messagingSenderId: "59907070741"
};

firebase.initializeApp(config);

const MainNavigator = createStackNavigator(
  {
    Loading: { screen: LoadingScreen },
    SignIn: { screen: SigninScreen },
    SignUp: { screen: SignupScreen },
    Home: { screen: HomeScreen }
  },
  {
    //launcher screen
    initialRouteName: "Loading"
  }
);

//create app container
const App = createAppContainer(MainNavigator);
export default App;
