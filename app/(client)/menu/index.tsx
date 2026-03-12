import { menuData } from "@/constants/fakeData";
import MenuCart from "@/presentation/menu/components/MenuCart";
import { Product } from "@/presentation/menu/interfaces/menu.interface";
import ThemedTextInput from "@/presentation/theme/ThemedTextInput";
import React, { useRef, useState } from "react";
import { FlatList, TextInput, View } from "react-native";

const MenuScreen = () => {
  const [menu, setMenu] = useState<Product[]>(menuData);

  const showIcon = useRef<boolean>(false);

  const inputRef = useRef<TextInput>(null);

  const onFilterByName = (text: string) => {
    if (!showIcon.current) {
      showIcon.current = true;
    }
    const filteredMenu = menuData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setMenu(filteredMenu);
  };

  const handleClearInput = () => {
    inputRef.current?.clear();
    setMenu(menuData);
    showIcon.current = false;
  };

  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <ThemedTextInput
            ref={inputRef}
            iconName="search"
            placeholder="Buscar hamburguesas..."
            onChangeText={(text) => onFilterByName(text)}
            iconRightName={showIcon.current ? "close-circle" : undefined}
            onIconRightPress={handleClearInput}
          />
          {/* <FilterList /> */}
        </>
      )}
      data={menu}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MenuCart menu={item} />}
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
