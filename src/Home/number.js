import React, { Component, Props } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";

const style = StyleSheet.create({
  numpadChar: {
    fontSize: 35
    // fontFamily: "JosefinSans-Light"
  }
});
export default class Number extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text style={style.numpadChar}>{this.props.value}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
