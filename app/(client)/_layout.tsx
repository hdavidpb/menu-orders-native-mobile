import { useThemeColor } from "@/hooks/use-theme-color";
import MenuHeaderLeft from "@/presentation/menu/components/MenuHeaderLeft";
import CustomBack from "@/presentation/theme/CustomBack";
import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  const tabIconSelected = useThemeColor({}, "tabIconSelected");
  const tabIconDefault = useThemeColor({}, "tabIconDefault");
  const backgroundColor = useThemeColor(
    { dark: "#000", light: "#fff" },
    "background",
  );

  return (
    <Tabs
      screenOptions={{
        sceneStyle: { backgroundColor: backgroundColor },
        headerStyle: { backgroundColor },
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="menu/index"
        options={{
          title: "",
          headerLeft: () => <MenuHeaderLeft />,
          tabBarLabel: "Menú",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size - 7} />
          ),
          tabBarActiveTintColor: tabIconSelected,
          tabBarInactiveTintColor: tabIconDefault,
          headerStyle: { backgroundColor: "#000" },
        }}
      />
      <Tabs.Screen
        name="menu/[id]"
        options={{
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="shopping-cart/index"
        options={{
          title: "Mi carrito",
          tabBarLabel: "Carrito",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size - 7} />
          ),
          tabBarActiveTintColor: tabIconSelected,
          tabBarInactiveTintColor: tabIconDefault,
        }}
      />
      <Tabs.Screen
        name="orders/index"
        options={{
          title: "Mis pedidos",
          tabBarLabel: "pedidos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" color={color} size={size - 7} />
          ),
          tabBarActiveTintColor: tabIconSelected,
          tabBarInactiveTintColor: tabIconDefault,
        }}
      />

      <Tabs.Screen
        name="orders/[id]"
        options={{
          title: "",
          href: null,

          headerLeft: () => (
            <CustomBack handleBack={() => router.push("/(client)/orders")} />
          ),
        }}
      />
      <Tabs.Screen
        name="order/index"
        options={{
          title: "",
          href: null,

          headerLeft: () => (
            <CustomBack
              handleBack={() => router.push("/(client)/shopping-cart")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "",
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size - 7} />
          ),
          tabBarActiveTintColor: tabIconSelected,
          tabBarInactiveTintColor: tabIconDefault,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
