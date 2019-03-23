import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
          marginTop: 50
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: "#2475B0" }} />
        <View style={{ height: 50, backgroundColor: "#10A881" }} />
        <View style={{ height: 100, backgroundColor: "#E74292" }} />
      </View>
    );
  }
}
