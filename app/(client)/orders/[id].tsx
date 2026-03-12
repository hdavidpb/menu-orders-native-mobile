import { ThemedText } from "@/components/themed-text";
import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const OrderByIdScreen = () => {
  const backgroundColor = useThemeColor({}, "background");
  const primaryColor = useThemeColor({}, "primary");

  const { top } = useSafeAreaInsets();

  return (
    <ScrollView style={{ padding: 12, paddingTop: top, marginTop: 30 }}>
      <ThemedText
        style={{
          fontSize: 30,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Orden #BH-1042
      </ThemedText>

      <View
        style={[
          globalStyles.shadow,
          styles.checkBoxContainer,
          { backgroundColor, marginTop: 24 },
        ]}
      >
        <View style={[styles.checkStatusContainer]}>
          <View style={[styles.horizontalLine]}></View>
          <View style={{ alignItems: "center", gap: 6 }}>
            <View style={[styles.checkCircleContainer]}>
              <Ionicons name="checkmark-outline" color={"#fff"} size={20} />
            </View>
            <ThemedText>Pendiente</ThemedText>
          </View>
          <View style={{ alignItems: "center", gap: 6 }}>
            <View style={[styles.checkCircleContainer]}>
              <Ionicons name="checkmark-outline" color={"#fff"} size={20} />
            </View>
            <ThemedText>Pendiente</ThemedText>
          </View>
          <View style={{ alignItems: "center", gap: 6 }}>
            <View style={[styles.checkCircleContainer]}>
              <Ionicons name="checkmark-outline" color={"#fff"} size={20} />
            </View>
            <ThemedText>Pendiente</ThemedText>
          </View>
          <View style={{ alignItems: "center", gap: 6 }}>
            <View style={[styles.checkCircleContainer]}>
              <Ionicons name="checkmark-outline" color={"#fff"} size={20} />
            </View>
            <ThemedText>Pendiente</ThemedText>
          </View>
        </View>
      </View>
      <View
        style={[
          { borderRadius: 16, backgroundColor, marginTop: 24 },
          globalStyles.shadow,
        ]}
      >
        <View
          style={{
            height: 200,
            backgroundColor: "#0000003a",
            marginBottom: 4,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
          }}
        ></View>
        <View style={{ padding: 24 }}>
          <ThemedText>Dirección de entrega</ThemedText>
          <ThemedText
            numberOfLines={1}
            adjustsFontSizeToFit
            style={{ fontWeight: "600", fontSize: 21, marginTop: 6 }}
          >
            Calle 72 #10-34, Apto 501, Torre A
          </ThemedText>
        </View>
      </View>
      <View
        style={[
          {
            borderRadius: 16,
            padding: 24,
            backgroundColor,
            marginTop: 24,
            gap: 20,
          },
          globalStyles.shadow,
        ]}
      >
        <ThemedText style={{ fontWeight: "600", fontSize: 18 }}>
          Resumen del pedido
        </ThemedText>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <ThemedText>2x Classic Burger</ThemedText>
          <ThemedText style={{ fontWeight: "600" }}>$25.98</ThemedText>
        </View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <ThemedText>1x Chicken Deluxe</ThemedText>
          <ThemedText style={{ fontWeight: "600" }}>$13.99</ThemedText>
        </View>
        <View
          style={{
            width: "100%",
            borderWidth: 0.3,
            backgroundColor: "#7d7d7d59",
          }}
        ></View>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <ThemedText style={{ fontWeight: "600" }}>Total</ThemedText>
          <ThemedText style={{ fontWeight: "600", color: primaryColor }}>
            $46.16
          </ThemedText>
        </View>
      </View>
      <TouchableOpacity
        style={[
          {
            marginVertical: 24,
            paddingHorizontal: 24,
            paddingVertical: 16,
            borderWidth: 1,
            borderColor: "#7d7d7d59",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            borderRadius: 16,
            backgroundColor,
          },
          globalStyles.shadow,
        ]}
      >
        <Ionicons name="call-outline" size={22} />
        <ThemedText>Chat</ThemedText>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OrderByIdScreen;

const styles = StyleSheet.create({
  checkBoxContainer: {
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  checkStatusContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    padding: 24,
  },
  horizontalLine: {
    position: "absolute",
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
    width: "100%",
    top: 43,
  },
  checkCircleContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 100,
  },
});
