import { ThemedText } from "@/components/themed-text";
import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Product } from "@/presentation/menu/interfaces/menu.interface";
import ThemedSwitch from "@/presentation/theme/ThemedSwitch";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, TouchableOpacity, View } from "react-native";
import { useQueryProductConfig } from "../hooks/useQueryProductConfig";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor({}, "background");

  const iconColor = useThemeColor({}, "icon");

  const { updateStatusMutation } = useQueryProductConfig(product.id);

  const [isAvailableOptimistic, setIsAvailableOptimistic] = useState(
    product.isAvailable,
  );

  const handleUpdateProductStatus = async (status: boolean) => {
    setIsAvailableOptimistic(status);

    const updatedProduct = await updateStatusMutation.mutateAsync({
      productId: product.id,
      status,
    });

    if (!updatedProduct) {
      setIsAvailableOptimistic(!isAvailableOptimistic);
    }
  };

  const handleGoToEdit = () => {
    router.push(`/menu-settings/${product.id}`);
  };

  return (
    <TouchableOpacity
      onPress={handleGoToEdit}
      activeOpacity={0.7}
      style={[
        globalStyles.shadow,
        {
          padding: 16,
          borderRadius: 16,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 12,
          backgroundColor,
          marginVertical: 12,
        },
      ]}
    >
      <Pressable style={{ position: "absolute", top: 10, right: 10 }}>
        <Ionicons name="pencil-outline" size={20} color={iconColor} />
      </Pressable>
      <Image
        source={
          product.image
            ? { uri: product.image }
            : require("../../../assets/images/no-image.jpg")
        }
        style={{ width: 80, height: 80, borderRadius: 16 }}
        resizeMode="cover"
      />
      <View style={{ alignItems: "flex-start", flex: 1, gap: 10 }}>
        <ThemedText
          numberOfLines={2}
          style={{ fontSize: 19, fontWeight: "600" }}
        >
          {product.name}
        </ThemedText>
        <ThemedText style={{ color: primaryColor, fontWeight: "500" }}>
          {Number(product.price).toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          })}
        </ThemedText>
      </View>
      <View style={{ alignSelf: "flex-end" }}>
        <ThemedSwitch
          value={isAvailableOptimistic}
          label={isAvailableOptimistic ? "Disponible" : "No disponible"}
          onChangeValue={(value) => handleUpdateProductStatus(value)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
