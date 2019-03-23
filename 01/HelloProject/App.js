import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import NameText from "./src/components/NameText";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NameText string="Hitesh" />
        <Image source={require("./src/images/email.png")} />
        <Image
          source={{
            uri:
              "https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }}
          style={{ width: 300, height: 100 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  }
});
