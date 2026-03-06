import OrderResume from "@/presentation/shopping-cart/components/OrderResume";
import ThemedShoppingCartCard from "@/presentation/shopping-cart/components/ThemedShoppingCartCard";
import ThemedButton from "@/presentation/theme/ThemedButton";
import React from "react";
import { FlatList, View } from "react-native";

const ShoppingCartScreen = () => {
  return (
    <View style={{ flex: 1, padding: 8, paddingBottom: 70, marginTop: 20 }}>
      <FlatList
        data={[1, 2]}
        keyExtractor={(item) => item.toString()}
        renderItem={() => <ThemedShoppingCartCard />}
        ListFooterComponent={() => <OrderResume />}
        showsVerticalScrollIndicator={false}
      />

      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 70,
          zIndex: 99,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 16,
        }}
      >
        <ThemedButton style={{ flex: 1, height: 48 }} textSize={17}>
          Ir a pagar
        </ThemedButton>
      </View>
    </View>
  );
};

export default ShoppingCartScreen;
