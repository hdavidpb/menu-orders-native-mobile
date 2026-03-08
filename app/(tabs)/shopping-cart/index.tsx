import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import OrderResume from "@/presentation/shopping-cart/components/OrderResume";
import ThemedShoppingCartCard from "@/presentation/shopping-cart/components/ThemedShoppingCartCard";
import { useShoppingCartStore } from "@/presentation/shopping-cart/store/useShoppingCartStore";
import ThemedButton from "@/presentation/theme/ThemedButton";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Image, View } from "react-native";

const ShoppingCartScreen = () => {
  const { cart } = useShoppingCartStore();

  const primary = useThemeColor({}, "primary");

  if (cart.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <Image
          source={require("../../../assets/images/empty-cart.png")}
          style={{ width: 300, height: 300 }}
          resizeMode="cover"
        />
        <ThemedText style={{ fontSize: 20, marginTop: 20 }}>
          Aún no tienes nada en tu carrito
        </ThemedText>
        <Link
          style={{
            textDecorationLine: "underline",
            textDecorationColor: primary,
            color: primary,
            fontSize: 18,
            fontWeight: "500",
          }}
          href={"/(tabs)/menu"}
        >
          Ir al menú
        </Link>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 8, paddingBottom: 70, marginTop: 20 }}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ThemedShoppingCartCard item={item} />}
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
