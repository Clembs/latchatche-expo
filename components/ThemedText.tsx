import { Colors } from "@/constants/Colors";
import { Text, TextProps, TextStyle, useColorScheme } from "react-native";

export enum ThemedTextVariant {
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  Clickable,
  Paragraph,
  Footnote,
}

export type ThemedTextProps = TextProps & {
  variant?: ThemedTextVariant;
};

export function ThemedText({
  variant = ThemedTextVariant.Paragraph,
  style,
  ...restProps
}: ThemedTextProps) {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <Text style={[variantStyles[variant](colorScheme), style]} {...restProps} />
  );
}

const variantStyles: Record<
  ThemedTextVariant,
  (theme: "light" | "dark") => TextStyle
> = {
  [ThemedTextVariant.HeadingLarge]: (theme) => ({
    color: Colors[theme].onSurface,
    fontSize: 32,
    fontWeight: 500,
  }),
  [ThemedTextVariant.HeadingMedium]: (theme) => ({
    color: Colors[theme].onSurface,
    fontSize: 24,
    fontWeight: 500,
  }),
  [ThemedTextVariant.HeadingSmall]: (theme) => ({
    color: Colors[theme].onSurface,
    fontSize: 20,
    fontWeight: 500,
  }),
  [ThemedTextVariant.Clickable]: (theme) => ({
    color: Colors[theme].onSurface,
    fontSize: 16,
    fontWeight: 500,
  }),
  [ThemedTextVariant.Paragraph]: (theme) => ({
    color: Colors[theme].onSurfaceLight,
    fontSize: 16,
    fontWeight: 400,
  }),
  [ThemedTextVariant.Footnote]: (theme) => ({
    color: Colors[theme].onSurfaceLight,
    fontSize: 12,
    fontWeight: 400,
  }),
};
