import { useThemeColor } from "@/hooks/use-theme-color";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import ThemedButton from "@/presentation/theme/ThemedButton";
import { Redirect, router, Stack } from "expo-router";
import React from "react";

const AdminLayout = () => {
  const { user, authStatus } = useAuthStore();

  const backgroundColor = useThemeColor({ dark: "#000" }, "background");

  if (authStatus === "not-authenticated") {
    return <Redirect href={"/auth/login"} />;
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor },
        headerShadowVisible: false,
      }}
    >
      <Stack.Protected guard={!!user?.roles.includes("admin")}>
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
      </Stack.Protected>
    </Stack>
  );
};

export default AdminLayout;
