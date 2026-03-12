import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import ThemedButton from "./ThemedButton";
import ThemedTextInput from "./ThemedTextInput";

interface Props {
  label: string;
  placeholder: string;
  values: string[];
  onChange: (tags: string[]) => void;
}

export default function ThemedTagsField({
  label,
  onChange,
  placeholder,
  values,
}: Props) {
  const [tag, setTag] = useState("");

  const tagColor = useThemeColor({ dark: "#000", light: "#F3F4F6" }, "icon");
  const iconColor = useThemeColor({}, "icon");

  const handleAddTag = () => {
    if (!tag.trim()) return;
    onChange([...values, tag]);
    setTag("");
  };

  const handleRemoveTag = (tag: string) => {
    const newTags = values.filter((t) => t !== tag);
    onChange(newTags);
  };

  return (
    <View style={{ gap: 10 }}>
      <View style={{ flexDirection: "row", gap: 8, alignItems: "flex-end" }}>
        <ThemedTextInput
          flex1Row
          value={tag}
          onChangeText={(text) => setTag(text)}
          label="Ingredientes"
          placeholder="ej. Carne 150gr"
        />
        <View style={{ width: 135 }}>
          <ThemedButton onPress={handleAddTag}>Agregar</ThemedButton>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {values.map((t) => (
          <View
            key={t}
            style={{
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 100,
              backgroundColor: tagColor,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <ThemedText>{t}</ThemedText>
            <Pressable onPress={() => handleRemoveTag(t)}>
              <Ionicons name="close" size={20} color={iconColor} />
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}
