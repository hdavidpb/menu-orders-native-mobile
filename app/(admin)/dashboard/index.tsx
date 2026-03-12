import ThemedButton from "@/presentation/theme/ThemedButton";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

const DashboardScreen = () => {
  return (
    <View style={{ padding: 18 }}>
      <ThemedButton onPress={() => router.push("/menu-settings")}>
        Ir a config
      </ThemedButton>
    </View>
  );
};

export default DashboardScreen;
