import { Colors } from "@/constants/Colors";
import { StyleSheet, useColorScheme, View, ViewProps } from "react-native";

export default function ThemedView({ style, ...restProps }: ViewProps) {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <View
      style={[styles.container, { backgroundColor: colors.surface }, style]}
      {...restProps}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});
