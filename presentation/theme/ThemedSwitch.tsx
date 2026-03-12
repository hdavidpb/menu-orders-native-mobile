import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { Switch, View } from "react-native";

interface Props {
  value: boolean;
  label?: string;
  onChange: (value: boolean) => void;
}

const ThemedSwitch = ({ value, label, onChange }: Props) => {
  const primaryColor = useThemeColor({}, "primary");

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Switch
        value={value}
        onValueChange={(value) => {
          onChange(value);
        }}
        trackColor={{ true: primaryColor }}
        thumbColor={value ? primaryColor : "gray"}
      />

      {label && <ThemedText style={{ fontWeight: "600" }}>{label}</ThemedText>}
    </View>
  );
};

export default ThemedSwitch;
