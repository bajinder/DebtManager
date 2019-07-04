import React, { Component, Props } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

const style = StyleSheet.create({
  numpadChar: {
    fontSize: 35,
    fontWeight: "200"
    // fontFamily: "JosefinSans-Light"
  }
});
export default class Number extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <View>
      <TouchableOpacity style={styles.numButton} onLongPress={() => this.props.addToTotals(this.props.value)} onPress={() => this.props.addToTotals(this.props.value)}>
        <Text style={style.numpadChar}>{this.props.value}</Text>
      </TouchableOpacity>
      // </View>
    );
  }
}

let styles = StyleSheet.create({ numButton: { height: 100, width: 100, flex: 1, justifyContent: "center", alignItems: "center" } });
