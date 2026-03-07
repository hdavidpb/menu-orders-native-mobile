import { ThemedText } from "@/components/themed-text";
import React from "react";
import { Image, View } from "react-native";

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
      <Image
        source={require("../../../assets/images/logo.png")}
        resizeMode="cover"
        style={{ width: 54, height: 54 }}
      />
      <View>
        <ThemedText style={{ fontSize: 24, fontWeight: "900", color: "white" }}>
          La Hamburguesa
        </ThemedText>
      </View>
    </View>
  );
};

export default MenuHeaderLeft;
