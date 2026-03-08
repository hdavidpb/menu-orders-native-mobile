import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface Props extends TextInputProps {
  ref?: React.Ref<TextInput> | undefined;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconRightName?: keyof typeof Ionicons.glyphMap;
  onIconRightPress?: VoidFunction;
  label?: string;
}

export default function ThemedTextInput({
  iconName,
  iconRightName,
  onIconRightPress,
  label,
  ...props
}: Props) {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const iconColor = useThemeColor({}, "icon");

  return (
    <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
      {label && (
        <ThemedText style={{ fontWeight: "500", marginLeft: 6, fontSize: 15 }}>
          {label}
        </ThemedText>
      )}

      <View style={[styles.container, { backgroundColor }]}>
        {iconName && <Ionicons name={iconName} color={iconColor} size={23} />}
        <TextInput
          style={{ color: textColor, flex: 1 }}
          placeholderTextColor={"gray"}
          {...props}
        />
        {iconRightName && (
          <Pressable onPress={onIconRightPress}>
            <Ionicons name={iconRightName} color={iconColor} size={23} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 9,
    borderColor: "#687076a9",
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
});
