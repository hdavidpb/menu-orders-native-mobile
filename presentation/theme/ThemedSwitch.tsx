import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { Switch, SwitchProps, View } from "react-native";

interface Props extends SwitchProps {
  value: boolean;
  label?: string;
  onChangeValue: (value: boolean) => void;
}

const ThemedSwitch = ({ value, label, onChangeValue, ...rest }: Props) => {
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
          onChangeValue(value);
        }}
        trackColor={{ true: primaryColor }}
        thumbColor={value ? primaryColor : "gray"}
        {...rest}
      />

      {label && <ThemedText style={{ fontWeight: "400" }}>{label}</ThemedText>}
    </View>
  );
};

export default ThemedSwitch;
