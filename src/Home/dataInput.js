import React, { Component, Props } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import * as Animatable from "react-native-animatable";

export class DataInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: 40
    };
  }

  handleButtonPressIn() {
    if (!(this.props.data.total > 0)) {
      this.setState({ fontSize: 10 });
    }
  }
  handleButtonPressOut() {
    if (!(this.props.data.total > 0)) {
      this.props.onViewChange();
      this.setState({ fontSize: 40 });
    }
  }
  getTouchableOpacityButton(displayText) {
    return (
      <TouchableOpacity onPressIn={() => this.handleButtonPressIn()} onPressOut={() => this.handleButtonPressOut()}>
        <Animatable.Text transition="fontSize" style={{ fontSize: this.state.fontSize, color: "white" }}>
          {displayText}
        </Animatable.Text>
      </TouchableOpacity>
    );
  }
  getUserInputPanel() {
    return (
      <View>
        <Text style={{ fontSize: this.state.fontSize, color: "white" }}>{this.props.data.total}</Text>
      </View>
    );
  }
  render() {
    if (this.props.data.total === "" || this.props.data.total === 0) {
      if (this.props.data.isIncome) return this.getTouchableOpacityButton("Income");
      else return this.getTouchableOpacityButton("Expense");
    }
    return this.getUserInputPanel();
  }
}

export default DataInput;
