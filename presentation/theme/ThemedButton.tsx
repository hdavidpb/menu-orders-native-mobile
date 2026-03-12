import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
  textSize?: number;
  variant?: "outline" | "fulfill";
}

const ThemedButton = ({
  children,
  textSize = 16,
  style,
  variant = "fulfill",
  ...res
}: Props) => {
  const primaryColor = useThemeColor({}, "primary");

  const borderColor = useThemeColor({}, "primary");

  return (
    <Pressable
      style={({ pressed }) => [
        variant === "fulfill" && globalStyles.shadow,
        styles.defaultStyles,
        {
          borderWidth: 1,
          borderColor: borderColor,
          backgroundColor: variant === "fulfill" ? primaryColor : "transparent",
          opacity: pressed ? 0.7 : 1,
        },
        style as any,
      ]}
      {...res}
    >
      <Text
        style={{
          color: variant === "fulfill" ? "#fff" : primaryColor,
          fontSize: textSize,
          fontWeight: "600",
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  defaultStyles: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  outline: {},
});
