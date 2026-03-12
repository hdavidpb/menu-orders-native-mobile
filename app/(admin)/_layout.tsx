import { useThemeColor } from "@/hooks/use-theme-color";
import { Stack } from "expo-router";
import React from "react";

const AdminLayout = () => {
  const backgroundColor = useThemeColor({}, "background");

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
        name="menu-settings/[id]"
        options={{
          title: "",
        }}
      />
    </Stack>
  );
};

export default AdminLayout;
