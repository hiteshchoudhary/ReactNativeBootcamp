import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Follow from "./screens/Follow";
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Follow: { screen: Follow }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#BA2F16"
      },
      headerTitleStyle: {
        color: "#FFF"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;
