// install react-navigation

//TODO: import four screens
import HomeScreen from "./screens/HomeScreen";
import AddNewContact from "./screens/AddNewContact";
import ViewContact from "./screens/ViewContact";
import EditContact from "./screens/EditContact";

//TODO: import firebase
import * as firebase from "firebase";

// set up react navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContact },
    View: { screen: ViewContact },
    Edit: { screen: EditContact }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#B83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

//TODO: Initialize Firebase
var config = {
  apiKey: "AIzaSyAWKvw8txrPf73jwUFaiKR0Ss1bn96sEQU",
  authDomain: "reactbootcamp-c4089.firebaseapp.com",
  databaseURL: "https://reactbootcamp-c4089.firebaseio.com",
  projectId: "reactbootcamp-c4089",
  storageBucket: "reactbootcamp-c4089.appspot.com",
  messagingSenderId: "59907070741"
};
firebase.initializeApp(config);

//FirebaseTODO create firebase real-time database with rules

// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
export default App;
