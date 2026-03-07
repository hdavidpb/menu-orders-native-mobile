import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps {
  iconName?: keyof typeof Ionicons.glyphMap;
}

export default function ThemedTextInput({ iconName, ...props }: Props) {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const iconColor = useThemeColor({}, "icon");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {iconName && <Ionicons name="search" color={iconColor} size={23} />}
      <TextInput
        {...props}
        style={{ color: textColor, flex: 1 }}
        placeholderTextColor={"gray"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 14,
    borderColor: "#687076a9",
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
});
