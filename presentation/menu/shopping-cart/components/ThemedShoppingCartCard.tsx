import { ThemedText } from "@/components/themed-text";
import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

const ThemedShoppingCartCard = () => {
  const primaryColor = useThemeColor({}, "primary");
  const iconColor = useThemeColor({}, "icon");
  const backgroundColor = useThemeColor({}, "background");

  const [count, setCount] = useState(1);

  const handleCount = (isDecrease?: boolean) => {
    if (isDecrease) {
      if (count === 1) return;
      setCount((prev) => Math.max(prev - 1, 0));
      return;
    }
    setCount((prev) => prev + 1);
  };

  return (
    <View style={[styles.container, globalStyles.shadow, { backgroundColor }]}>
      <Image
        style={styles.image}
        source={require("../../../../assets/images/burger.jpeg")}
        width={96}
        height={96}
        resizeMode="cover"
      />
      <View style={styles.descriptionContainer}>
        <ThemedText
          style={{ fontSize: 18, fontWeight: "600", marginBottom: 8 }}
        >
          Classic Burger
        </ThemedText>
        <ThemedText
          style={{ fontWeight: "500", color: primaryColor, marginBottom: 8 }}
        >
          $ 12.99
        </ThemedText>
        <View style={styles.CountContainer}>
          <TouchableOpacity
            disabled={count === 1}
            onPress={() => handleCount(true)}
            activeOpacity={0.7}
            style={[styles.CountButton, { borderColor: iconColor }]}
          >
            <Ionicons name="remove-outline" color={iconColor} size={20} />
          </TouchableOpacity>
          <ThemedText style={{ fontSize: 18, fontWeight: "900" }}>
            {count}
          </ThemedText>
          <TouchableOpacity
            onPress={() => handleCount()}
            activeOpacity={0.7}
            style={[
              styles.CountButton,
              { borderColor: primaryColor, backgroundColor: primaryColor },
            ]}
          >
            <Ionicons name="add-outline" color={"white"} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.removeItemContainer}>
        <Ionicons color={primaryColor} size={26} name="trash-outline" />
      </TouchableOpacity>
    </View>
  );
};

export default ThemedShoppingCartCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 16,
    marginBottom: 16,
    marginHorizontal: 8,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 16,
    objectFit: "cover",
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  CountContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
  },
  CountButton: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  removeItemContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
