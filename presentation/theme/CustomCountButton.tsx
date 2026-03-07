import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  iconName: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
  iconColor: string;
}

const CustomCountButton = ({
  iconName,
  iconColor,
  iconSize = 20,
  style,
  ...rest
}: Props) => {
  const primaryColor = useThemeColor({}, "primary");
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.countButton,
        { borderColor: primaryColor, backgroundColor: primaryColor },
        style,
      ]}
      {...rest}
    >
      <Ionicons name={iconName} color={iconColor} size={20} />
    </TouchableOpacity>
  );
};

export default CustomCountButton;

const styles = StyleSheet.create({
  countButton: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});
