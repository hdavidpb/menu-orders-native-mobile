import { ThemedText } from "@/components/themed-text";
import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useShoppingCartStore } from "@/presentation/shopping-cart/store/useShoppingCartStore";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../interfaces/menu.interface";
import { useMenuStore } from "../store/useMenuStore";

interface Props {
  menu: Product;
}

const MenuCart = ({ menu }: Props) => {
  const { setSelectedMenu } = useMenuStore();
  const { cart } = useShoppingCartStore();

  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor({}, "background");

  const isInCart = cart.find((item) => item.id === menu.id);

  const onPress = () => {
    const isInCart = cart.find((item) => item.id === menu.id);
    if (isInCart) {
      setSelectedMenu({ ...menu, quantity: isInCart.quantity });
    } else {
      setSelectedMenu(menu);
    }
    router.push(`/(client)/menu/${menu.id.toString()}`);
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flex: 1, borderRadius: 16 }}
      activeOpacity={0.7}
    >
      <View
        style={[styles.container, globalStyles.shadow, { backgroundColor }]}
      >
        <Image
          source={{ uri: menu.image }}
          style={[styles.image]}
          resizeMode="cover"
        />
        <View style={[styles.descriptionContainer, { backgroundColor }]}>
          <ThemedText style={{ fontSize: 19, fontWeight: "900" }}>
            {menu.name}
          </ThemedText>
          <View style={[styles.actionPriceContainer]}>
            <Text
              style={{ fontSize: 18, color: primaryColor, fontWeight: "900" }}
            >
              $ {Number(menu.price).toFixed(2)}
            </Text>
            <TouchableOpacity onPress={onPress} style={styles.addButton}>
              {isInCart ? (
                <Text style={{ fontSize: 18, color: "white" }}>
                  {isInCart.quantity}
                </Text>
              ) : (
                <Ionicons name="add-outline" size={18} color={"white"} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 14,
  },
  image: {
    height: 200,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  descriptionContainer: {
    padding: 12,
    borderRadius: 14,
  },
  actionPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addButton: {
    width: 30,
    height: 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
