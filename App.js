import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

export default function App() {
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/img/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/img/pizza.png"),
    },
    {
      name: "Cake",
      imageUrl: require("./src/assets/img/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("./src/assets/img/pasta.png"),
    },
    {
      name: "Smoothies",
      imageUrl: require("./src/assets/img/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/img/steak.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Search></Search>
      <View style={{ marginLeft: 20 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category) => category.name}
          data={commonCategories}
          renderItem={({ item, index }) => {
            return (
              <CategoryItem
                name={item.name}
                imageUrl={item.imageUrl}
                index={index}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
