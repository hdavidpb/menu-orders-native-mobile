import { globalStyles } from "@/constants/globals";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
  textSize?: number;
}

const ThemedButton = ({ children, textSize = 16, style, ...res }: Props) => {
  const backgroundColor = useThemeColor({}, "primary");

  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.shadow,
        {
          paddingHorizontal: 24,
          paddingVertical: 12,
          borderRadius: 16,
          backgroundColor,
          opacity: pressed ? 0.7 : 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        },
        style as any,
      ]}
      {...res}
    >
      <Text style={{ color: "white", fontSize: textSize, fontWeight: "600" }}>
        {children}
      </Text>
    </Pressable>
  );
};

export default ThemedButton;
