import React, { Component } from "react";
import { View, AppRegistry, StyleSheet } from "react-native";

import Number from "./number";

const style = StyleSheet.create({
  numRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

export class NumberPad extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={style.numRow}>
          <Number value="1" key="1" />
          <Number value="2" key="2" />
          <Number value="3" key="3" />
        </View>
        <View style={style.numRow}>
          <Number value="4" key="4" />
          <Number value="5" key="5" />
          <Number value="6" key="6" />
        </View>
        <View style={style.numRow}>
          <Number value="7" key="7" />
          <Number value="8" key="8" />
          <Number value="9" key="9" />
        </View>
        <View style={style.numRow}>
          <Number value="." key="precision" />
          <Number value="0" key="0" />
          <Number value="x" key="del" />
        </View>
      </View>
    );
  }
}

export default NumberPad;
//AppRegistry.registerComponent("AwesomeProject", () => NumberPad);
