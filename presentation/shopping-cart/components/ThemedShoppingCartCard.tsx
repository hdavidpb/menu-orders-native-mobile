import { ThemedText } from "@/components/themed-text";
import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import CustomCountButton from "@/presentation/theme/CustomCountButton";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Cart } from "../interfaces/shopping-cart.interface";
import { useShoppingCartStore } from "../store/useShoppingCartStore";

interface Props {
  item: Cart;
}

const ThemedShoppingCartCard = ({ item }: Props) => {
  const primaryColor = useThemeColor({}, "primary");
  const iconColor = useThemeColor({}, "icon");
  const backgroundColor = useThemeColor({}, "background");

  const [count, setCount] = useState(1);

  const { removeFromCart, increaseCountInCart, decreaseCountInCart } =
    useShoppingCartStore();

  return (
    <View style={[styles.container, globalStyles.shadow, { backgroundColor }]}>
      <Image
        style={styles.image}
        source={{ uri: item.image }}
        width={96}
        height={96}
        resizeMode="cover"
      />
      <View style={styles.descriptionContainer}>
        <ThemedText style={{ fontSize: 18, fontWeight: "600" }}>
          {item.name}
        </ThemedText>
        {item.comments && (
          <ThemedText style={{ marginBottom: 8 }}>{item.comments}</ThemedText>
        )}

        <ThemedText
          style={{ fontWeight: "500", color: primaryColor, marginBottom: 8 }}
        >
          {Number(item.price).toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          })}
        </ThemedText>
        <View style={styles.CountContainer}>
          <CustomCountButton
            disabled={item.quantity === 1}
            onPress={() => decreaseCountInCart(item.id)}
            iconName="remove-outline"
            iconColor={iconColor}
            style={{ borderColor: iconColor, backgroundColor: "white" }}
          />

          <ThemedText style={{ fontSize: 18, fontWeight: "900" }}>
            {item.quantity}
          </ThemedText>
          <CustomCountButton
            onPress={() => increaseCountInCart(item.id)}
            iconName="add-outline"
            iconColor={"white"}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => removeFromCart(item.id)}
        activeOpacity={0.7}
        style={styles.removeItemContainer}
      >
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
    alignItems: "flex-start",
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
    alignSelf: "flex-end",
  },
});
