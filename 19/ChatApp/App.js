import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

//screen imports
import Home from "./components/Home";
import Chat from "./components/Chat";

const MainNavigator = createStackNavigator({
  Home: Home,
  Chat: Chat
});

class Navigator extends React.Component {
  render() {
    return <MainNavigator />;
  }
}

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
