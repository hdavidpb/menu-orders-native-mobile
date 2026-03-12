import { useQueryProducts } from "@/presentation/menu/hooks/useQueryProducts";
import { Product } from "@/presentation/menu/interfaces/menu.interface";
import ProductCard from "@/presentation/products-config/components/ProductCard";
import ThemedTextInput from "@/presentation/theme/ThemedTextInput";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, TextInput, View } from "react-native";

const MenuSettingsScreen = () => {
  const { queryProducts } = useQueryProducts();

  const [menu, setMenu] = useState<Product[]>([]);

  const showIcon = useRef<boolean>(false);

  const inputRef = useRef<TextInput>(null);

  const onFilterByName = (text: string) => {
    if (!showIcon.current) {
      showIcon.current = true;
    }
    const filteredMenu = queryProducts.data?.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setMenu(filteredMenu ?? []);
  };

  const handleClearInput = () => {
    inputRef.current?.clear();
    setMenu(queryProducts.data ?? []);
    showIcon.current = false;
  };

  useEffect(() => {
    if (queryProducts.data) {
      setMenu(queryProducts.data);
    }
  }, [queryProducts.data]);

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
      renderItem={({ item }) => <ProductCard product={item} />}
      style={{ marginTop: 20, padding: 8 }}
      ListFooterComponent={() => <View style={{ marginTop: 40 }}></View>}
    />
  );
};

export default MenuSettingsScreen;
