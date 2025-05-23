import { Colors } from "$lib/constants/Colors";
import { Href, Link, LinkProps } from "expo-router";
import { IconProps } from "phosphor-react-native";
import { ComponentType } from "react";
import {
  Pressable,
  StyleSheet,
  TextProps,
  TextStyle,
  useColorScheme,
  ViewStyle,
} from "react-native";
import ThemedText, { ThemedTextVariant } from "./ThemedText";

export enum ButtonVariant {
  Primary,
  Secondary,
  Text,
}

export enum ButtonSize {
  Small,
  Medium,
}

export type ButtonProps = (LinkProps | TextProps) & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: Href;
  icon?: ComponentType<IconProps>;
};

export default function Button({
  style,
  children,
  size = ButtonSize.Medium,
  variant = ButtonVariant.Primary,
  href,
  icon: Icon,
  ...restProps
}: ButtonProps) {
  const colorScheme = useColorScheme() ?? "light";
  const styleVariant = variantStyles[variant](colorScheme);

  const buttonStyles = [
    styles.button,
    sizeStyles[size].button,
    styleVariant,
    !children ? sizeStyles[size].iconButton : undefined,
    style,
  ];

  const ButtonContents = () => (
    <Pressable
      style={({ pressed }) => [
        buttonStyles,
        pressed && { backgroundColor: styleVariant.pressedBackgroundColor },
      ]}
      {...(restProps as TextProps)}
    >
      {Icon && (
        <Icon
          size={size === ButtonSize.Small ? 18 : 24}
          color={styleVariant.color?.toString()}
        />
      )}

      {children && (
        <ThemedText
          variant={ThemedTextVariant.Clickable}
          style={[
            styleVariant,
            {
              // override the bg color since it's not supposed to have any
              backgroundColor: "transparent",
            },
          ]}
        >
          {children}
        </ThemedText>
      )}
    </Pressable>
  );

  if (href) {
    return (
      <Link
        asChild
        style={buttonStyles}
        {...(restProps as LinkProps)}
        href={href}
      >
        <ButtonContents />
      </Link>
    );
  }

  return <ButtonContents />;
}

const variantStyles: Record<
  ButtonVariant,
  (theme: "light" | "dark") => ViewStyle &
    TextStyle & {
      pressedBackgroundColor: string;
    }
> = {
  [ButtonVariant.Primary]: (theme) => ({
    backgroundColor: Colors.primary,
    pressedBackgroundColor: Colors.primaryVariant,
    color: Colors.onPrimary,
  }),
  [ButtonVariant.Secondary]: (theme) => ({
    backgroundColor: Colors[theme].surfaceVariant,
    pressedBackgroundColor: Colors[theme].surfaceVariant,
    color: Colors[theme].onSurfaceVariant,
  }),
  [ButtonVariant.Text]: (theme) => ({
    backgroundColor: "transparent",
    pressedBackgroundColor: "#00000020",
    color: Colors[theme].onSurfaceVariant,
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
    textDecorationColor: Colors[theme].onSurface,
  }),
};

const sizeStyles: Record<
  ButtonSize,
  {
    button: ViewStyle;
    iconButton: ViewStyle;
  }
> = {
  [ButtonSize.Small]: {
    button: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
      gap: 8,
    },
    iconButton: {
      paddingHorizontal: 8,
      paddingVertical: 8,
      borderRadius: 8,
      gap: 8,
    },
  },
  [ButtonSize.Medium]: {
    button: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 32,
      gap: 12,
    },
    iconButton: {
      paddingHorizontal: 12,
      paddingVertical: 12,
      borderRadius: 32,
      gap: 12,
    },
  },
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
