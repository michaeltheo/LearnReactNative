import { Text, View, TextInput, StyleSheet } from "react-native";
import React, { Component, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/style";
export function Search({ setTerm }) {
  const [input, setInput] = useState("");
  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput("");
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        value={input}
        style={styles.input}
        onChangeText={(text) => {
          setInput(text);
        }}
        placeholder="Restaurant, food..."
        onEndEditing={handleEndEditing}
      />
    </View>
  );
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
