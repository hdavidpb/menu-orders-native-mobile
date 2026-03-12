import { ThemedText } from "@/components/themed-text";
import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useMenuStore } from "@/presentation/menu/store/useMenuStore";
import { useShoppingCartStore } from "@/presentation/shopping-cart/store/useShoppingCartStore";
import CustomCountButton from "@/presentation/theme/CustomCountButton";
import ThemedTextInput from "@/presentation/theme/ThemedTextInput";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const PreOrderMenuScreen = () => {
  const [comments, setComments] = useState("");

  const { addToCart, cart, removeFromCart } = useShoppingCartStore();
  const { selectedMenu, increaseMenu, decreaseMenu, addDefaultCount } =
    useMenuStore();

  const { height } = useWindowDimensions();

  const backgroundColor = useThemeColor({}, "background");
  const primaryColor = useThemeColor({}, "primary");

  const backgroundColorDesc = useThemeColor(
    { light: "#F9F9FA", dark: "#000" },
    "tabIconDefault",
  );

  const iconColor = useThemeColor({}, "icon");

  const handleSendToCart = () => {
    if (!selectedMenu) return;

    const isInCart = cart.find((item) => item.id === selectedMenu.id);

    if (isInCart) {
      removeFromCart(selectedMenu.id);
      addToCart({ ...selectedMenu, comments });
    } else {
      addToCart({ ...selectedMenu, comments });
    }

    setComments("");

    router.push("/(client)/shopping-cart");
  };

  if (!selectedMenu) {
    return <Redirect href={"/(client)/menu"} />;
  }
  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView style={{ backgroundColor: "indigo" }}>
        <Image
          style={{ width: "100%", height: 280 }}
          source={{ uri: selectedMenu?.image }}
          resizeMode="cover"
        />
        <View
          style={[
            styles.descriptionContainer,
            globalStyles.shadow,
            {
              height: height - 330,
              backgroundColor,
            },
          ]}
        >
          <ThemedText
            style={{ fontWeight: "600", fontSize: 28, marginBottom: 12 }}
          >
            {selectedMenu?.name}
          </ThemedText>
          <ThemedText>{selectedMenu?.description}</ThemedText>
          <View
            style={[
              { borderRadius: 16, padding: 12 },

              { marginTop: 12, backgroundColor: backgroundColorDesc },
            ]}
          >
            <ThemedText
              style={{ fontWeight: "600", fontSize: 24, marginBottom: 12 }}
            >
              Ingredientes
            </ThemedText>
            <View style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
              {selectedMenu?.ingredients.map((ingredient) => (
                <View
                  key={ingredient}
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    borderRadius: 100,
                    backgroundColor,
                  }}
                >
                  <ThemedText>{ingredient}</ThemedText>
                </View>
              ))}
            </View>
          </View>
          <View style={{ marginTop: 16 }}>
            <ThemedTextInput
              multiline
              placeholder="¿Quieres comentar algo adicional?, ej: sin cebolla"
              numberOfLines={4}
              value={comments}
              onChangeText={(text) => setComments(text)}
            />
          </View>
          <View style={[styles.counterContainer]}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
              }}
            >
              <CustomCountButton
                disabled={selectedMenu!.quantity <= 1}
                onPress={() => decreaseMenu()}
                iconName="remove-outline"
                iconColor={iconColor}
                style={{
                  borderColor: iconColor,
                  backgroundColor: "white",
                }}
              />
              <ThemedText style={{ fontSize: 24, fontWeight: "600" }}>
                {selectedMenu.quantity}
              </ThemedText>
              <CustomCountButton
                onPress={() => increaseMenu()}
                iconName="add-outline"
                iconColor={"white"}
              />
            </View>
            <TouchableOpacity
              onPress={handleSendToCart}
              activeOpacity={0.7}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 100,
                backgroundColor: primaryColor,
                gap: 6,
              }}
            >
              <ThemedText
                style={{ fontSize: 16, fontWeight: "500", color: "white" }}
              >
                Agregar al carrito
              </ThemedText>
              <Ionicons name="cart-outline" size={23} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PreOrderMenuScreen;

const styles = StyleSheet.create({
  descriptionContainer: {
    padding: 24,
  },
  counterContainer: {
    position: "absolute",
    bottom: 0,
    height: 100,
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
