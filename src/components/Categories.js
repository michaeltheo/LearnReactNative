import { View, Text, FlatList } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";

export default function Categories({ categories, setTerm, term }) {
  return (
    <View style={{ marginLeft: 20 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem
              name={item.name}
              imageUrl={item.imageUrl}
              index={index}
              active={item.name === term}
              handlePress={() => {
                setTerm(item.name);
              }}
            />
          );
        }}
      />
    </View>
  );
}
