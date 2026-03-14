import { ThemedText } from "@/components/themed-text";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { Redirect } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

const Index = () => {
  const { authStatus, user, checkStatus } = useAuthStore();

  useEffect(() => {
    checkStatus();
    console.log("STATUS: ", authStatus);
  }, []);

  if (authStatus === "pending") {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={40} />
        <ThemedText>Espere por favor...</ThemedText>
      </View>
    );
  }

  if (authStatus === "not-authenticated") {
    return <Redirect href={"/auth/login"} />;
  }

  if (authStatus === "authenticated" && !!user?.roles.includes("admin")) {
    return <Redirect href={"/dashboard"} />;
  }

  if (authStatus === "authenticated" && !user?.roles.includes("admin")) {
    return <Redirect href={"/menu"} />;
  }
};

export default Index;
