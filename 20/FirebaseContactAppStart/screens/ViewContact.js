import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
  Platform,
  ActivityIndicator,
  Image,
  Dimensions
} from "react-native";
import { Card, CardItem } from "native-base";
import { Entypo } from "@expo/vector-icons";

//TODO: add firebase
import * as firebase from "firebase";

export default class ViewContact extends Component {
  static navigationOptions = {
    title: "View Contact"
  };

  constructor(props) {
    super(props);
    // set state
    this.state = {
      fname: null,
      lname: null,
      phone: null,
      email: null,
      address: null,
      imageUrl: null,
      key: null,
      isLoading: true
    };
  }
  // lifecycle method
  componentDidMount() {
    let key = this.props.navigation.getParam("key", "");
    this.getContact(key);
  }

  //TODO: get contact from firebase
  getContact = async key => {
    let self = this;
    let contactRef = firebase
      .database()
      .ref()
      .child(key);

    await contactRef.on("value", dataSnapshot => {
      //fix: va -> val
      if (dataSnapshot.val()) {
        contactValue = dataSnapshot.val();
        self.setState({
          fname: contactValue.fname,
          lname: contactValue.lname,
          phone: contactValue.phone,
          email: contactValue.email,
          address: contactValue.address,
          imageUrl: contactValue.imageUrl,
          key: key,
          isLoading: false
        });
      }
    });
  };

  //This was already explained in AsyncStorage section
  callAction = phone => {
    let phoneNumber = phone;
    if (Platform.OS !== "android") {
      // its not android save this url
      phoneNumber = `telprompt:${phone}`;
    } else {
      //else  save this url
      phoneNumber = `tel:${phone}`;
    }
    // check can open url
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        //if it not a supported format url
        if (!supported) {
          // show  a alert
          Alert.alert("Phone number is not available");
        } else {
          // else open url
          return Linking.openURL(phoneNumber);
        }
      }) //log error if any
      .catch(err => console.log(err));
  };
  //This was already explained in AsyncStorage section
  // sms action
  smsAction = phone => {
    // paas phone number
    let phoneNumber = phone;
    // save this url
    //there is same url for android and iOS for sms
    phoneNumber = `sms:${phone}`;
    // check can open url
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        // //if it not a supported format url
        if (!supported) {
          // show a alert
          Alert.alert("Phone number is not available");
        } else {
          // else open url
          return Linking.openURL(phoneNumber);
        }
      }) // log error if any
      .catch(err => console.log(err));
  };

  //TODO:  deleteContact method
  deleteContact = key => {
    Alert.alert(
      "Delete Contact",
      `${this.state.fname} ${this.state.lname}`,
      [
        { text: "Cancel", onPress: () => console.log("Cancel pressed") },
        {
          text: "OK",
          onPress: async () => {
            let contactRef = firebase
              .database()
              .ref()
              .child(key);
            await contactRef.remove(error => {
              if (!error) {
                this.props.navigation.goBack();
              }
            });
          }
        }
      ],
      { cancelable: false }
    );
  };

  // editContact function
  editContact = key => {
    //navigate to edit screen with passing key
    this.props.navigation.navigate("Edit", {
      key: key
    });
  };

  // render method
  render() {
    // if loading show ActivityIndicator
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <ActivityIndicator size="large" color="#B83227" />
          <Text style={{ textAlign: "center" }}>
            Contact loading please wait..
          </Text>
        </View>
      );
    }
    // else show contact details
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contactIconContainer}>
          <Image
            style={styles.contactIcon}
            source={
              this.state.imageUrl === "empty"
                ? require("../assets/person.png")
                : {
                    uri: this.state.imageUrl
                  }
            }
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {this.state.fname} {this.state.lname}
            </Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Card>
            <CardItem bordered>
              <Text style={styles.infoText}>Phone</Text>
            </CardItem>
            <CardItem bordered>
              <Text style={styles.infoText}>{this.state.phone}</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Text style={styles.infoText}>Email</Text>
            </CardItem>
            <CardItem bordered>
              <Text style={styles.infoText}>{this.state.email}</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem bordered>
              <Text style={styles.infoText}>Address</Text>
            </CardItem>
            <CardItem bordered>
              <Text style={styles.infoText}>{this.state.address}</Text>
            </CardItem>
          </Card>
        </View>
        <Card style={styles.actionContainer}>
          <CardItem style={styles.actionButton} bordered>
            <TouchableOpacity
              onPress={() => {
                this.smsAction(this.state.phone);
              }}
            >
              <Entypo name="message" size={50} color="#B83227" />
            </TouchableOpacity>
          </CardItem>
          <CardItem style={styles.actionButton} bordered>
            <TouchableOpacity
              onPress={() => {
                this.callAction(this.state.phone);
              }}
            >
              <Entypo name="phone" size={50} color="#B83227" />
            </TouchableOpacity>
          </CardItem>
        </Card>

        <Card style={styles.actionContainer}>
          <CardItem style={styles.actionButton} bordered>
            <TouchableOpacity
              onPress={() => {
                this.editContact(this.state.key);
              }}
            >
              <Entypo name="edit" size={30} color="#B83227" />
              <Text style={styles.actionText}>Edit</Text>
            </TouchableOpacity>
          </CardItem>
          <CardItem style={styles.actionButton} bordered>
            <TouchableOpacity
              onPress={() => {
                this.deleteContact(this.state.key);
              }}
            >
              <Entypo name="trash" size={30} color="#B83227" />
              <Text style={styles.actionText}>Delete</Text>
            </TouchableOpacity>
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}
// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contactIconContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  contactIcon: {
    // to create a square box both height and width should be same
    height: Dimensions.get("window").width,
    width: Dimensions.get("window").width
  },
  nameContainer: {
    width: "100%",
    height: 70,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    position: "absolute",
    bottom: 0
  },
  name: {
    fontSize: 24,
    color: "#000",
    fontWeight: "900"
  },
  infoText: {
    fontSize: 18,
    fontWeight: "300"
  },
  actionContainer: {
    flexDirection: "row"
  },
  actionButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  actionText: {
    color: "#B83227",
    fontWeight: "900"
  }
});
