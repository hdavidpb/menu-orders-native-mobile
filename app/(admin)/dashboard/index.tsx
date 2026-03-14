import { ThemedText } from "@/components/themed-text";
import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, View } from "react-native";

const DashboardScreen = () => {
  const backgroundColor = useThemeColor({ dark: "#000" }, "background");

  return (
    <ScrollView style={{ padding: 14 }}>
      <ThemedText style={{ fontSize: 27, fontWeight: "600" }}>
        Estado de Órdenes
      </ThemedText>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <View
          style={[
            globalStyles.shadow,
            {
              flex: 1,
              borderRadius: 16,
              height: 160,
              padding: 20,
              justifyContent: "space-between",
              backgroundColor,
            },
          ]}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 48,
              height: 48,
              backgroundColor: "#60f050",
              borderRadius: 16,
            }}
          >
            <Ionicons name="time-outline" size={25} />
          </View>
          <ThemedText style={{ fontSize: 30, fontWeight: "600" }}>5</ThemedText>
          <ThemedText style={{ fontSize: 15 }}>Pendientes</ThemedText>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
