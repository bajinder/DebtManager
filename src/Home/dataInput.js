import React, { Component, Props } from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { NumberPad } from "./numberPad";
import * as Animatable from "react-native-animatable";

export class DataInput extends Component {
  constructor() {
    super();
    this.state = {
      isIncome: true,
      total: "",
      buttonPressedIn: false,
      fontSize: 30
    };
  }
  getInput() {
    if (this.state.total === "") {
      if (this.state.isIncome) return <Text style={styles.income}>Income</Text>;
      else return <Text style={styles.expense}>Expense</Text>;
    }
    if (this.state.isIncome) return <Text style={styles.income}>{this.state.total}</Text>;
    return <Text style={styles.expense}>{this.state.total}</Text>;
  }
  handleButtonPressIn() {
    this.setState({ fontSize: 10 });
  }
  handleButtonPressOut() {
    this.setState({ fontSize: 40 });
  }
  render() {
    return (
      <View>
        {/* <TouchableHighlight onPressIn={this.handleButtonPressIn()}>
          <Text style={{ color: "red" }}>{this.getInput()}</Text>

          <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
        </TouchableHighlight> */}
        <TouchableOpacity onPressIn={() => this.setState({ fontSize: 15 })} onPressOut={() => this.setState({ fontSize: 30 })}>
          <Animatable.Text transition="fontSize" style={{ fontSize: this.state.fontSize }}>
            {this.getInput()}
          </Animatable.Text>
        </TouchableOpacity>
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
