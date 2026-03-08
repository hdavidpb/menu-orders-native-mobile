import { ThemedText } from "@/components/themed-text";
import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useShoppingCartStore } from "../store/useShoppingCartStore";

const DELIVER_COST = 2;

const OrderResume = () => {
  const { cart } = useShoppingCartStore();

  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor({}, "background");

  const subtotal = cart.reduce(
    (acc, item) => (acc += item.price * item.quantity),
    0,
  );

  const TOTAL = DELIVER_COST + subtotal;

  return (
    <View style={[styles.container, globalStyles.shadow, { backgroundColor }]}>
      <ThemedText style={[styles.titleText, { marginBottom: 16 }]}>
        Resumen del pedido
      </ThemedText>
      <View style={styles.textContainer}>
        <ThemedText style={styles.subtitleText}>Subtotal</ThemedText>
        <ThemedText style={styles.subtitleText}>
          ${subtotal.toFixed(2)}
        </ThemedText>
      </View>
      <View style={styles.textContainer}>
        <ThemedText style={styles.subtitleText}>Envío</ThemedText>
        <ThemedText style={styles.subtitleText}>
          ${DELIVER_COST.toFixed(2)}
        </ThemedText>
      </View>

      <View
        style={{
          borderWidth: 0.1,
          backgroundColor: "#00000028",
          width: "100%",
          marginBottom: 16,
          marginTop: 8,
        }}
      ></View>
      <View style={[styles.textContainer, { marginBottom: 16 }]}>
        <ThemedText style={styles.titleText}>Total</ThemedText>
        <ThemedText style={[styles.titleText, { color: primaryColor }]}>
          ${TOTAL.toFixed(2)}
        </ThemedText>
      </View>
    </View>
  );
};

export default OrderResume;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginHorizontal: 10,
    marginTop: 16,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    width: "100%",
  },
  titleText: { fontSize: 22, fontWeight: "600" },
  subtitleText: { fontSize: 16, fontWeight: "400" },
});
