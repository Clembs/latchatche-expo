import { Colors } from "$lib/constants/Colors";
import { useColorScheme, View, ViewProps } from "react-native";

export default function ThemedView({ style, ...restProps }: ViewProps) {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <View style={[{ backgroundColor: colors.surface }, style]} {...restProps} />
  );
}
