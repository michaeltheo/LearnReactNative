import { Text, View, TextInput, StyleSheet } from "react-native";
import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/style";
export class Search extends Component {
  render() {
    return (
      <View style={[styles.container, styles.elevation]}>
        <FontAwesome name="search" size={25} />
        <TextInput style={styles.input} placeholder="Restaurant, food..." />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 50,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Search;
