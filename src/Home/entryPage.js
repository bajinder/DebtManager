import React, { Component, Props } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NumberPad } from "./numberPad";
import DataInput from "./dataInput";

export class EntryPage extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.container, { flex: 2, backgroundColor: "skyblue" }]}>
          <DataInput />
        </View>
        <View style={{ flex: 3, backgroundColor: "white" }}>
          <NumberPad />
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <TouchableOpacity style={[styles.cancelButton, styles.button]}>
              <Text style={{ color: "white" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={[styles.okButton, styles.button]}>
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
  income: { color: "green", fontSize: 40, fontFamily: "JosefinSans-Light" },
  expense: { color: "green", fontSize: 40, fontFamily: "JosefinSans-Light" },
  button: { padding: 15, width: 100, borderRadius: 50, justifyContent: "center", alignItems: "center" },
  cancelButton: { backgroundColor: "#ff4f4f", fontFamily: "JosefinSans-Light" },
  okButton: { backgroundColor: "green", fontFamily: "JosefinSans-Light" },
  buttonContainer: { flex: 1, backgroundColor: "skyblue", flexDirection: "row", justifyContent: "space-evenly", paddingTop: 20 }
});

export default EntryPage;
