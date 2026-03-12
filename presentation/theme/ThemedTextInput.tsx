import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface Props extends TextInputProps {
  ref?: React.Ref<TextInput> | undefined;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconRightName?: keyof typeof Ionicons.glyphMap;
  onIconRightPress?: VoidFunction;
  flex1Row?: boolean;
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

export default function ThemedTextInput({
  iconName,
  iconRightName,
  onIconRightPress,
  label,
  flex1Row,
  error,
  errorMessage,
  ...props
}: Props) {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const iconColor = useThemeColor({}, "icon");

  return (
    <View
      style={[
        { justifyContent: "flex-start", alignItems: "flex-start" },
        flex1Row && { flex: 1 },
      ]}
    >
      {label && (
        <ThemedText style={{ fontWeight: "500", marginLeft: 6, fontSize: 15 }}>
          {label}
        </ThemedText>
      )}

      <View
        style={[
          styles.container,
          { backgroundColor, borderColor: error ? "red" : "#687076a9" },
        ]}
      >
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
      {errorMessage && error && (
        <Text style={{ color: "red", fontSize: 14, marginLeft: 3 }}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 9,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
});
