import React, { Component, Props } from "react";
import { View, AppRegistry } from "react-native";
import { EntryPage } from "./src/Home/entryPage";
import * as Font from "expo-font";

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      Ionicons: require("./node_modules/react-native-vector-icons/Fonts/Ionicons.ttf")
      // "JosefinSans-Light": require("./assets/fonts/Josefin_Sans/JosefinSans-Light.ttf")
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <EntryPage />
      </View>
    );
  }
}

AppRegistry.registerComponent("DebtManager", () => App);
