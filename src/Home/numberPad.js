import React, { Component } from "react";
import { View, AppRegistry, StyleSheet } from "react-native";

import Number from "./number";

const style = StyleSheet.create({
  numRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end"
  }
});

export class NumberPad extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={style.numRow}>
          <Number value="1" key="1" addToTotals={this.props.onTotals} />
          <Number value="2" key="2" addToTotals={this.props.onTotals} />
          <Number value="3" key="3" addToTotals={this.props.onTotals} />
        </View>
        <View style={style.numRow}>
          <Number value="4" key="4" addToTotals={this.props.onTotals} />
          <Number value="5" key="5" addToTotals={this.props.onTotals} />
          <Number value="6" key="6" addToTotals={this.props.onTotals} />
        </View>
        <View style={style.numRow}>
          <Number value="7" key="7" addToTotals={this.props.onTotals} />
          <Number value="8" key="8" addToTotals={this.props.onTotals} />
          <Number value="9" key="9" addToTotals={this.props.onTotals} />
        </View>
        <View style={style.numRow}>
          <Number value="." key="precision" addToTotals={this.props.onTotals} />
          <Number value="0" key="0" addToTotals={this.props.onTotals} />
          <Number value="x" key="del" addToTotals={this.props.onTotals} />
        </View>
      </View>
    );
  }
}

export default NumberPad;
