import React, { Component, Props } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NumberPad } from "./numberPad";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import DataInput from "./dataInput";
//const Realm = require("realm");

export class EntryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        isIncome: false,
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
      this.setState({ data });
    } else {
      data.isIncome = !data.isIncome;
      this.setState({ data });
    }
  }

  handleTotals = number => {
    let data = this.state.data;
    if ((number === "." && data.total.includes(".")) || (number === "0" && data.total === "0")) {
      return; // Nothing to do here
    }
    if (number === "x") {
      if (data.total.length > 1) data.total = data.total.substr(0, data.total.length - 1);
      else if (data.total.length === 1) data.total = "";
      this.setState({ data });
    } else {
      data.total += number;
      this.setState({ data });
    }
  };
  getDataInputBgColor() {
    if (this.state.data.isIncome) return { backgroundColor: "green" };
    else return { backgroundColor: "#ff4f4f" };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.container, { flex: 2 }, this.getDataInputBgColor()]}>
          <DataInput data={this.state.data} onViewChange={() => this.handleViewChange()} />
        </View>
        <View style={{ flex: 3, backgroundColor: "white" }}>
          <NumberPad onTotals={this.handleTotals} />
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <Button icon={<Icon name="ios-person" size={15} color="white" />} title="Button with icon component" />
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
  },
  okButton: {
    backgroundColor: "green"
  },
  buttonContainer: { flex: 1, flexDirection: "row", justifyContent: "space-evenly", paddingTop: 20 }
});

export default EntryPage;
