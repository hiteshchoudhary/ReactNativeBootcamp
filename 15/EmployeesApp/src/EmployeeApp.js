import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Card, Icon } from "native-base";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    data: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goodPerformance: id =>
      dispatch({
        type: "GOOD_PERFORMANCE",
        id: id
      }),
    badPerformance: id =>
      dispatch({
        type: "BAD_PERFORMANCE",
        id: id
      })
  };
}

class EmployeeApp extends React.Component {
  render() {
    return (
      <View>
        <Text>Test</Text>
        <FlatList
          data={Object.values(this.props.data)}
          renderItem={({ item }) => (
            <Card style={styles.container}>
              <View style={styles.idContainer}>
                <Text style={styles.idText}>{item.empid}</Text>
              </View>
              <View style={styles.nameAndSalaryContainer}>
                <Text style={styles.nameText}>Name: {item.empName}</Text>
                <Text style={styles.salaryText}>
                  Salary: {item.empSalary.toFixed(2)}
                </Text>
              </View>
              <View style={styles.performanceIconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.badPerformance(item.empid);
                  }}
                >
                  <Icon
                    ios="ios-thumbs-down"
                    android="md-thumbs-down"
                    style={styles.badPerformance}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.props.goodPerformance(item.empid);
                  }}
                >
                  <Icon
                    ios="ios-thumbs-up"
                    android="md-thumbs-up"
                    style={styles.goodPerformance}
                  />
                </TouchableOpacity>
              </View>
            </Card>
          )}
          keyExtractor={item => item.empid.toString()}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeApp);

const styles = StyleSheet.create({
  //list card view container
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  // no. of employee container
  idContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  // no. of employee text
  idText: {
    fontSize: 18,
    color: "#000"
  },
  // name and salary text container
  nameAndSalaryContainer: {
    flex: 4,
    padding: 20
  },
  // employee name text
  nameText: {
    fontSize: 16,
    color: "#000"
  },
  // employee salary text
  salaryText: {
    fontSize: 16,
    color: "#000"
  },
  // like dislike icon container
  performanceIconContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  //like icon
  goodPerformance: {
    color: "green"
  },
  // dislike icon
  badPerformance: {
    color: "red"
  }
});
