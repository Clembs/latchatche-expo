import { Colors } from "@/constants/Colors";
import { Text, TextProps, TextStyle, useColorScheme } from "react-native";

export enum ThemedTextVariants {
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  Clickable,
  Paragraph,
}

export type ThemedTextProps = TextProps & {
  variant?: ThemedTextVariants;
};

export function ThemedText({
  variant = ThemedTextVariants.Paragraph,
  style,
  ...restProps
}: ThemedTextProps) {
  const colorScheme = useColorScheme() ?? "light";

  return <Text style={[styles[variant](colorScheme), style]} {...restProps} />;
}

const styles: Record<
  ThemedTextVariants,
  (theme: "light" | "dark") => TextStyle
> = {
  [ThemedTextVariants.HeadingLarge]: (theme) => ({
    color: Colors[theme].onSurface,
    fontSize: 32,
    fontWeight: 500,
  }),
  [ThemedTextVariants.HeadingMedium]: (theme) => ({
    color: Colors[theme].onSurface,
    fontSize: 24,
    fontWeight: 500,
  }),
  [ThemedTextVariants.HeadingSmall]: (theme) => ({
    color: Colors[theme].onSurface,
    fontSize: 20,
    fontWeight: 500,
  }),
  [ThemedTextVariants.Clickable]: (theme) => ({
    color: Colors[theme].onSurface,
    fontSize: 16,
    fontWeight: 500,
  }),
  [ThemedTextVariants.Paragraph]: (theme) => ({
    color: Colors[theme].onSurfaceVariant,
    fontSize: 16,
    fontWeight: 400,
  }),
};
