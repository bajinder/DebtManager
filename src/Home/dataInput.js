import React, { Component, Props } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { NumberPad } from "./numberPad";

export class DataInput extends Component {
  constructor() {
    super();
    this.state = {
      isIncome: true,
      total: "",
      buttonPressedIn: false
    };
  }
  getInput() {
    if (this.state.total === "") {
      if (this.state.isIncome) return <Text style={[styles.income, { fontSize: this.state.buttonPressedIn === true ? 10 : 40 }]}>Income</Text>;
      else return <Text style={styles.expense}>Expense</Text>;
    }
    if (this.state.isIncome) return <Text style={styles.income}>{this.state.total}</Text>;
    return <Text style={styles.expense}>{this.state.total}</Text>;
  }
  handleButtonPressIn() {
    let pressedIn = this.state.buttonPressedIn;
    pressedIn = true;
    // this.setState({ buttonPressedIn: pressedIn });
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPressIn={this.handleButtonPressIn()}>
          <Text style={{ color: "red" }}>{this.getInput()}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  income: {
    color: "green"
    // fontFamily: "JosefinSans-Light"
  },
  expense: {
    color: "green"
    // fontFamily: "JosefinSans-Light"
  }
});

export default DataInput;
