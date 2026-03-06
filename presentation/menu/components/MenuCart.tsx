import { ThemedText } from "@/components/themed-text";
import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MenuCart = () => {
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor({}, "background");

  return (
    <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.7}>
      <View
        style={[styles.container, globalStyles.shadow, { backgroundColor }]}
      >
        <Image
          source={require("../../../assets/images/burger.jpeg")}
          style={[styles.image]}
          resizeMode="cover"
        />
        <View style={[styles.descriptionContainer]}>
          <ThemedText style={{ fontSize: 19, fontWeight: "900" }}>
            Classic Burger
          </ThemedText>
          <View style={[styles.actionPriceContainer]}>
            <Text
              style={{ fontSize: 18, color: primaryColor, fontWeight: "900" }}
            >
              $ 12.99
            </Text>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add-outline" size={18} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 14,
  },
  image: {
    height: 200,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  descriptionContainer: {
    padding: 12,
  },
  actionPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addButton: {
    width: 26,
    height: 26,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
