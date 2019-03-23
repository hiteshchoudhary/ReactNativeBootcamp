import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Follow extends React.Component {
  render() {
    const followReq = this.props.navigation.getParam("followRequest", "0");
    const doFollow = this.props.navigation.getParam("doFollow", "");
    return (
      <View style={styles.container}>
        <Text>You can follow these friends</Text>

        {followReq.map((frn, index) => (
          <Button
            key={frn}
            title={`Follow ${frn}`}
            onPress={() => doFollow(index)}
          />
        ))}

        <Button
          title="Go to Home"
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
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
  }
});
