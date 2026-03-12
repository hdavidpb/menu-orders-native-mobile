import ThemedButton from "@/presentation/theme/ThemedButton";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

const DashboardScreen = () => {
  return (
    <View style={{ padding: 8 }}>
      <ThemedButton onPress={() => router.push("/menu-settings/[id]")}>
        Ir a producto
      </ThemedButton>
    </View>
  );
};

export default DashboardScreen;
