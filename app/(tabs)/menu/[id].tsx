import { ThemedText } from "@/components/themed-text";
import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import CustomCountButton from "@/presentation/theme/CustomCountButton";
import ThemedTextInput from "@/presentation/theme/ThemedTextInput";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PreOrderMenuScreen = () => {
  const { top } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  const backgroundColor = useThemeColor({}, "background");
  const primaryColor = useThemeColor({}, "primary");

  const backgroundColorDesc = useThemeColor(
    { light: "#F9F9FA", dark: "#000" },
    "tabIconDefault",
  );

  const iconColor = useThemeColor({}, "icon");

  return (
    <View style={{ paddingTop: top, flex: 1, alignItems: "center" }}>
      <Image
        style={{ width: "100%", height: 350 }}
        source={require("../../../assets/images/burger.jpeg")}
        resizeMode="cover"
      />
      <View
        style={[
          styles.descriptionContainer,
          globalStyles.shadow,
          {
            width: width * 0.9,
            height: height - 355,
            backgroundColor,
          },
        ]}
      >
        <ThemedText
          style={{ fontWeight: "600", fontSize: 28, marginBottom: 12 }}
        >
          Classic Burger
        </ThemedText>
        <ThemedText>
          Hamburguesa clásica con queso cheddar, lechuga, tomate y nuestra salsa
          especial
        </ThemedText>
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
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 100,
                backgroundColor,
              }}
            >
              <ThemedText>Carne 150gr 100% Angus</ThemedText>
            </View>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 100,
                backgroundColor,
              }}
            >
              <ThemedText>Queso chedar</ThemedText>
            </View>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 100,
                backgroundColor,
              }}
            >
              <ThemedText>Tomate</ThemedText>
            </View>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 100,
                backgroundColor,
              }}
            >
              <ThemedText>Cebolla</ThemedText>
            </View>
            <View
              style={{
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 100,
                backgroundColor,
              }}
            >
              <ThemedText>Salsa de la casa</ThemedText>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 16 }}>
          <ThemedTextInput
            multiline
            placeholder="¿Quieres comentar algo adicional?, ej: sin cebolla"
            numberOfLines={4}
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
              iconName="remove-outline"
              iconColor={iconColor}
              style={{
                borderColor: iconColor,
                backgroundColor: "white",
              }}
            />
            <ThemedText style={{ fontSize: 24, fontWeight: "600" }}>
              1
            </ThemedText>
            <CustomCountButton iconName="add-outline" iconColor={"white"} />
          </View>
          <TouchableOpacity
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
    </View>
  );
};

export default PreOrderMenuScreen;

const styles = StyleSheet.create({
  descriptionContainer: {
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 16,
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
