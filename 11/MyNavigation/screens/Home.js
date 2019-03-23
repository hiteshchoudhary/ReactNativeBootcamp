import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followRequest: ["John", "Jane", "Ram", "Janice"],
      following: ["Hitesh"]
    };
  }

  doFollow = index => {
    const { followRequest, following } = this.state;

    const followNew = followRequest.splice(index, 1);
    following.push(followNew);

    this.setState({
      followRequest,
      following
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>You are following {this.state.following.length} friend</Text>
        <Button
          title="Go to Follow page"
          onPress={() => {
            this.props.navigation.navigate("Follow", {
              followRequest: this.state.followRequest,
              following: this.state.following,
              doFollow: this.doFollow
            });
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
