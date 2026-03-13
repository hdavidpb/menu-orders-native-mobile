import { useThemeColor } from "@/hooks/use-theme-color";
import ThemedButton from "@/presentation/theme/ThemedButton";
import { router, Stack } from "expo-router";
import React from "react";

const AdminLayout = () => {
  const backgroundColor = useThemeColor({ dark: "#000" }, "background");

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="dashboard/index"
        options={{
          title: "Dashboard",
        }}
      />
      <Stack.Screen
        name="menu-settings/index"
        options={{
          title: "",
          headerRight: () => (
            <ThemedButton
              onPress={() => router.push("/menu-settings/new")}
              style={{ paddingVertical: 7 }}
            >
              + Nueva
            </ThemedButton>
          ),
        }}
      />
      <Stack.Screen
        name="menu-settings/[id]"
        options={{
          title: "",
        }}
      />
    </Stack>
  );
};

export default AdminLayout;
