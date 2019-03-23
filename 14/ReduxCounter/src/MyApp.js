import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class MyApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => this.props.incCounter()}>
            <Text>INCREASE</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 30 }}>{this.props.myCounter}</Text>
          <TouchableOpacity onPress={() => this.props.decCounter()}>
            <Text>DECREASE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    myCounter: state.myCounter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incCounter: () =>
      dispatch({
        type: "INC_COUNTER"
      }),
    decCounter: () =>
      dispatch({
        type: "DEC_COUNTER"
      })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
