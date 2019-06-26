import React, { Component, Props } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NumberPad } from "./numberPad";
import DataInput from "./dataInput";

export class EntryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "green",
      data: {
        isIncome: true,
        total: ""
      }
    };
  }

  handleViewChange() {
    let data = {
      isIncome: this.state.data.isIncome,
      total: this.state.data.total
    };
    if (data.isIncome) {
      // now isIncome will be false hence we need to change the color to red for the change
      data.isIncome = !data.isIncome;
      this.setState({ backgroundColor: "#ff4f4f", data });
    } else {
      data.isIncome = !data.isIncome;
      this.setState({ backgroundColor: "green", data });
    }
  }

  handleTotals = number => {
    let data = this.state.data;
    if (number === "x") {
      if (data.total.length > 1) data.total = data.total.substr(0, data.total.length - 1);
      else if (data.total.length === 1) data.total = "";
      this.setState({ data });
    } else if (number === "." && data.total.includes(".")) {
      // Do noting if alreay contains decimal point
    } else {
      data.total += number;
      this.setState({ data });
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.container, { flex: 2, backgroundColor: this.state.backgroundColor }]}>
          <DataInput data={this.state.data} onViewChange={() => this.handleViewChange()} />
        </View>
        <View style={{ flex: 3, backgroundColor: "white" }}>
          <NumberPad onTotals={this.handleTotals} />
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <TouchableOpacity style={[styles.okButton, styles.button, this.props.total > 0 ? {} : { display: "none" }]}>
              <Text style={{ color: "white" }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff4f4f"
  },
  button: { padding: 15, width: 100, borderRadius: 10, justifyContent: "center", alignItems: "center" },
  cancelButton: {
    backgroundColor: "#ff4f4f"
    // fontFamily: "JosefinSans-Light"
  },
  okButton: {
    backgroundColor: "green"
    // fontFamily: "JosefinSans-Light"
  },
  buttonContainer: { flex: 1, flexDirection: "row", justifyContent: "space-evenly", paddingTop: 20 }
});

export default EntryPage;
