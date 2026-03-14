import { ThemedText } from "@/components/themed-text";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import ThemedButton from "@/presentation/theme/ThemedButton";
import ThemedTextInput from "@/presentation/theme/ThemedTextInput";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, RefreshControl, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const LoginScreen = () => {
  const [isPending, setIsPending] = useState(false);
  const [form, setForm] = useState({
    email: {
      value: "",
      errors: false,
      errorMessage: "Campo requerido.",
    },
    password: {
      value: "",
      errors: false,
      errorMessage: "Campo requerido.",
    },
  });

  const { login } = useAuthStore();

  const { top } = useSafeAreaInsets();
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor({}, "background");

  const handleChangeText = (key: keyof typeof form, value: string) => {
    if (key === "email") {
      if (!isValidEmail(value)) {
        setForm((prev) => ({
          ...prev,
          email: { value, errors: true, errorMessage: "Formato no valido" },
        }));
        return;
      } else {
        setForm((prev) => ({
          ...prev,
          email: { value, errors: false, errorMessage: "Campo obligatorio" },
        }));
        return;
      }
    }

    setForm((prev) => ({
      ...prev,
      [key]: { value, errors: false, errorMessage: "Campo obligatorio" },
    }));
  };

  const handleSubmit = async () => {
    if (isInvalidaEmptyFields()) return;

    setIsPending(true);

    const userInfo = await login(form.email.value, form.password.value);

    setIsPending(false);

    if (!userInfo) {
      Alert.alert("Error", "Email y/o contraseña incorrecto");
    }
    if (userInfo) {
      if (userInfo?.roles.includes("admin")) {
        router.replace("/dashboard");
      } else {
        router.replace("/menu");
      }
    }
  };

  const isInvalidaEmptyFields = () => {
    let isInvalid = false;

    if (!form.email.value.trim() || form.email.errors) {
      setForm((prev) => ({ ...prev, email: { ...prev.email, errors: true } }));
      isInvalid = true;
    }
    if (!form.password.value.trim() || form.password.errors) {
      setForm((prev) => ({
        ...prev,
        password: { ...prev.password, errors: true },
      }));
      isInvalid = true;
    }
    return isInvalid;
  };

  return (
    <ScrollView
      style={{ padding: 12, flex: 1, paddingTop: top, backgroundColor }}
      refreshControl={<RefreshControl refreshing={isPending} />}
    >
      <ThemedText
        style={{
          fontSize: 30,
          fontWeight: "600",
          marginTop: 60,
          marginBottom: 12,
        }}
      >
        Inicia sesión
      </ThemedText>
      <ThemedText>Ingresa tus datos para continuar</ThemedText>

      <View style={{ gap: 14, marginTop: 30 }}>
        <ThemedTextInput
          label="Email"
          placeholder="Tu@email.com"
          keyboardType="email-address"
          error={form.email.errors}
          errorMessage={form.email.errorMessage}
          onChangeText={(text) => handleChangeText("email", text)}
          autoCapitalize="none"
        />
        <ThemedTextInput
          label="Contraseña"
          placeholder="Escribe tu contraseña"
          error={form.password.errors}
          errorMessage={form.password.errorMessage}
          onChangeText={(text) => handleChangeText("password", text)}
          secureTextEntry
        />
        <View style={{ marginVertical: 20 }}>
          <ThemedButton disabled={isPending} onPress={handleSubmit}>
            {!isPending ? "Iniciar sesión" : "Iniciando sesión..."}
          </ThemedButton>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
          }}
        >
          <ThemedText style={{ color: "gray" }}>¿No tienes cuenta?</ThemedText>
          <Link
            href={"/auth/register"}
            style={{ color: primaryColor, fontWeight: "500" }}
          >
            Crear cuenta
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
