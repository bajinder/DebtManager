import React, { Component, Props } from "react";
import { View, AppRegistry } from "react-native";
import { EntryPage } from "./src/Home/entryPage";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <EntryPage />
      </View>
    );
  }
}

AppRegistry.registerComponent("DebtManager", () => App);
