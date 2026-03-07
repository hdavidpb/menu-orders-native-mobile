import React from "react";
import { FlatList, Text, View } from "react-native";
const filters = ["Todas", "Clásicas", "Premium", "Especiales", "Vegetarianas"];
const FilterList = () => {
  return (
    <FlatList
      style={{ marginTop: 20 }}
      keyExtractor={(item) => item}
      data={filters}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 12,
            borderRadius: 100,
            backgroundColor: "red",
            marginRight: 12,
            height: 45,
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>{item}</Text>
        </View>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FilterList;
