import ThemedButton from "@/presentation/theme/ThemedButton";
import ThemedTextInput from "@/presentation/theme/ThemedTextInput";
import React from "react";
import { ScrollView, View } from "react-native";

const GenerateOrderScreen = () => {
  return (
    <ScrollView style={{ padding: 14 }}>
      <View style={{ gap: 20 }}>
        <ThemedTextInput
          label="Dirección"
          placeholder="Confirma tu Dirección"
        />
        <ThemedTextInput
          label="Apto / Casa"
          placeholder="Ej: Torre 7, apto 404"
        />
        <ThemedTextInput
          label="Teléfono"
          placeholder="Confirma tu Teléfono"
          keyboardType="numeric"
        />
        <ThemedTextInput
          label="Referencia adicional"
          placeholder="Ej: Casa blanca de rejas."
        />
        <ThemedButton style={{ marginTop: 30 }}>Confirmar pedido</ThemedButton>
      </View>
    </ScrollView>
  );
};

export default GenerateOrderScreen;
