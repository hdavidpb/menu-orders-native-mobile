import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import ThemedButton from "@/presentation/theme/ThemedButton";
import ThemedSwitch from "@/presentation/theme/ThemedSwitch";
import ThemedTagsField from "@/presentation/theme/ThemedTagsField";
import ThemedTextInput from "@/presentation/theme/ThemedTextInput";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import { Product } from "@/presentation/menu/interfaces/menu.interface";
import { useQueryProductConfig } from "@/presentation/products-config/hooks/useQueryProductConfig";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams } from "expo-router";
import { Alert } from "react-native";

const MenuSettingByIdScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { queryProduct } = useQueryProductConfig(id);

  const iconColor = useThemeColor({}, "icon");
  const primaryColor = useThemeColor({}, "primary");

  const [form, setForm] = useState<Partial<Product>>({
    name: "",
    description: "",
    price: "",
    ingredients: [],
    isAvailable: true,
    image: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    description: false,
    price: false,
  });

  const handleChange = (key: keyof typeof form, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));

    setErrors((prev) => ({ ...prev, [key]: false }));
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Se necesitan permisos",
        "Se necesitan permisos para acceder a la galería",
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.canceled) {
      setForm((prev) => ({ ...prev, image: result.assets[0].uri }));
    }
  };

  const onSubmit = async () => {
    console.log("FORM: ", form);
    // await uploadImageToCloudinary(form.image);
  };

  const onBlurCheckEmptyField = (key: keyof typeof form) => {
    if (form[key]!.toString().length === 0) {
      setErrors((prev) => ({ ...prev, [key]: true }));
    } else {
      setErrors((prev) => ({ ...prev, [key]: false }));
    }
  };

  useEffect(() => {
    if (queryProduct.data) {
      setForm(queryProduct.data);
    }
  }, [queryProduct.data]);

  return (
    <KeyboardAvoidingView>
      <ScrollView style={{ padding: 14 }}>
        <ThemedText style={{ fontSize: 27, fontWeight: "600" }}>
          Nuevo producto
        </ThemedText>
        {form.image && (
          <View style={{ height: 193, marginTop: 16 }}>
            <Pressable
              onPress={() => setForm((prev) => ({ ...prev, image: "" }))}
              style={[styles.clearImageButton]}
            >
              <Ionicons name="close-outline" size={25} />
            </Pressable>
            <Image
              source={{ uri: form.image }}
              style={[styles.image]}
              resizeMode="cover"
            />
          </View>
        )}
        {!form.image && (
          <Pressable
            onPress={pickImage}
            style={({ pressed }) => [
              styles.uploadBoxContainer,
              { borderColor: pressed ? primaryColor : "#727171c0" },
            ]}
          >
            <View style={{ alignItems: "center", gap: 4 }}>
              <Ionicons
                name="cloud-upload-outline"
                size={35}
                color={iconColor}
              />
              <ThemedText style={{ fontSize: 17 }}>
                Toca para subir una foto
              </ThemedText>
            </View>
          </Pressable>
        )}

        <View style={{ gap: 16, marginTop: 20 }}>
          <ThemedTextInput
            label="Nombre *"
            value={form.name}
            placeholder="Ej: Classic"
            onChangeText={(text) => handleChange("name", text)}
            onBlur={() => onBlurCheckEmptyField("name")}
            error={errors.name}
            errorMessage="Campo obligatorio."
          />
          <ThemedTextInput
            label="Description *"
            value={form.description}
            placeholder="Describe el producto"
            multiline
            numberOfLines={4}
            onChangeText={(text) => handleChange("description", text)}
            onBlur={() => onBlurCheckEmptyField("description")}
            error={errors.description}
            errorMessage="Campo obligatorio."
          />
          <ThemedTextInput
            label="Precio *"
            value={form.price}
            placeholder="Ej: 30000"
            multiline
            numberOfLines={4}
            keyboardType="numeric"
            onChangeText={(text) => handleChange("price", text)}
            onBlur={() => onBlurCheckEmptyField("price")}
            error={errors.price}
            errorMessage="Campo obligatorio."
          />

          <ThemedTagsField
            label="Ingredientes"
            values={form.ingredients!}
            onChange={(tags) => handleChange("ingredients", tags)}
            placeholder="Ej. carne 150gr"
          />
          <ThemedSwitch
            value={form.isAvailable!}
            onChange={(value) => handleChange("isAvailable", value)}
            label="Disponible para la venta"
          />

          <View style={{ marginTop: 20, gap: 12 }}>
            <ThemedButton onPress={onSubmit}>Guardar Producto</ThemedButton>
            <ThemedButton variant="outline">Cancelar</ThemedButton>
          </View>
        </View>
        <View style={{ height: 80 }}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MenuSettingByIdScreen;

const styles = StyleSheet.create({
  uploadBoxContainer: {
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 36,
    borderStyle: "dashed",
    height: 192,
    justifyContent: "center",
    alignItems: "center",
  },
  clearImageButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 35,
    backgroundColor: "#ffffff54",
    position: "absolute",
    right: 8,
    top: 8,
    zIndex: 55,
    borderRadius: 100,
  },
  image: {
    height: 193,
    width: "100%",
    borderRadius: 16,
  },
});
