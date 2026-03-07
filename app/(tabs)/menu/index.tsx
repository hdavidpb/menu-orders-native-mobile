import FilterList from "@/presentation/menu/components/FilterList";
import MenuCart from "@/presentation/menu/components/MenuCart";
import ThemedTextInput from "@/presentation/theme/ThemedTextInput";
import React from "react";
import { FlatList, View } from "react-native";

const MenuScreen = () => {
  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <ThemedTextInput
            iconName="search"
            placeholder="Buscar hamburguesas..."
          />
          <FilterList />
        </>
      )}
      data={["1", "2", "3", "4", "5"]}
      keyExtractor={(item) => item}
      renderItem={() => <MenuCart />}
      numColumns={2}
      columnWrapperStyle={{
        gap: 12,
        paddingHorizontal: 0,
        paddingTop: 20,
        borderRadius: 30,
      }}
      style={{ marginTop: 20, padding: 8 }}
      ListFooterComponent={() => <View style={{ marginTop: 40 }}></View>}
    />
  );
};

export default MenuScreen;
