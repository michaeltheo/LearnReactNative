import { StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";
import React from "react";

export default function Restaurants() {
  const searchRestaurants = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 15,
        term: "Dessert",
        location: "Toronto",
      },
    });
    console.log(
      "🚀 ~ file: Restaurants.js:9 ~ searchRestaurants ~ response",
      response
    );
  };

  searchRestaurants();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Total Restaurants</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    height: 100,
  },
});
