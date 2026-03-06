import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  shadow: {
    // iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,

    // Android
    elevation: 2,
  },
});
