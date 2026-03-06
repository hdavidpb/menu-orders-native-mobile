import { ThemedText } from "@/components/themed-text";
import React from "react";
import { View } from "react-native";

const MenuHeaderLeft = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        marginLeft: 10,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 8,
          backgroundColor: "red",
        }}
      ></View>
      <View>
        <ThemedText style={{ fontSize: 20, fontWeight: "900" }}>
          La Hamburguesa
        </ThemedText>
      </View>
    </View>
  );
};

export default MenuHeaderLeft;
