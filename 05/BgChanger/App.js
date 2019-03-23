import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomColor: null
    };
  }

  getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

  myButtonPressed = () => {
    this.setState({ randomColor: this.getRandomColor() });
  };

  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.state.randomColor }]}
      >
        <TouchableOpacity onPress={this.myButtonPressed}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF"
  }
});
