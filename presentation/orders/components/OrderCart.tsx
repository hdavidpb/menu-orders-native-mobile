import { ThemedText } from "@/components/themed-text";
import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const OrderCart = () => {
  const iconColor = useThemeColor({ dark: "#fff" }, "icon");
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor({}, "background");

  return (
    <TouchableOpacity
      onPress={() => router.push("/(client)/orders/[id]")}
      activeOpacity={0.7}
      style={[styles.container, globalStyles.shadow, { backgroundColor }]}
    >
      <View style={[styles.headerContainer, { marginBottom: 4 }]}>
        <ThemedText style={{ fontSize: 20, fontWeight: "600" }}>
          Orden #BH-1042
        </ThemedText>
        <View style={[styles.tagContainer, styles.onWayStyleContainer]}>
          <Text style={[{ fontSize: 12 }, styles.onWayStyleColor]}>
            En camino
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 4,
          marginBottom: 12,
        }}
      >
        <Ionicons name="time-outline" size={16} color={iconColor} />
        <ThemedText style={{ fontSize: 14 }}>4 Mar 2026, 14:30</ThemedText>
      </View>
      <View style={[styles.headerContainer, { marginBottom: 12 }]}>
        <ThemedText style={{ fontSize: 14 }}>3 productos</ThemedText>
        <Text style={{ color: primaryColor, fontWeight: "600" }}>$42.50</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCart;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "flex-start",
    marginHorizontal: 10,
    marginBottom: 16,
    borderRadius: 16,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tagContainer: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 100,
  },
  onWayStyleContainer: {
    backgroundColor: "#FEF5E6",
  },
  onWayStyleColor: {
    color: "#F59E0B",
  },

  deliveredStyleContainer: {
    backgroundColor: "#E7F8F2",
  },
  deliveredStyleColor: {
    color: "#10B981",
  },
});
