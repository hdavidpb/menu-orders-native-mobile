import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

import { Pressable } from "react-native";

const CustomBack = ({ handleBack }: { handleBack: VoidFunction }) => {
  const tabIconDefault = useThemeColor({}, "tabIconDefault");

  const navigation = useNavigation();

  return (
    <Pressable
      onPress={handleBack}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        marginLeft: 24,
      }}
    >
      <Ionicons name="arrow-back-outline" size={18} color={tabIconDefault} />
      <ThemedText style={{ color: tabIconDefault }}>Volver</ThemedText>
    </Pressable>
  );
};

export default CustomBack;
