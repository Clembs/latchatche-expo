import { Colors } from "@/constants/Colors";
import { Link, LinkProps } from "expo-router";
import { IconProps } from "phosphor-react-native";
import { ComponentType } from "react";
import {
  StyleSheet,
  TextProps,
  TouchableHighlight,
  View,
  ViewStyle,
} from "react-native";
import { ThemedText, ThemedTextVariant } from "./ThemedText";

export enum ButtonSize {
  Small,
  Medium,
}

export type ButtonProps = (LinkProps | TextProps) & {
  size?: ButtonSize;
  href?: string;
  icon?: ComponentType<IconProps>;
  iconProps?: IconProps;
};

export default function Button({
  style,
  children,
  size = ButtonSize.Medium,
  href,
  icon: Icon,
  iconProps,
  ...restProps
}: ButtonProps) {
  const buttonStyles = [
    styles.buttonWrapper,
    sizeStyles[size].buttonWrapper,
    style,
  ];

  const ButtonContents = () => (
    <View style={[styles.buttonContents, sizeStyles[size].buttonContents]}>
      {Icon && (
        <Icon
          size={size === ButtonSize.Small ? 18 : 24}
          color={Colors.onPrimary}
          {...iconProps}
        />
      )}

      <ThemedText
        variant={ThemedTextVariant.Clickable}
        style={{ color: Colors.onPrimary }}
      >
        {children}
      </ThemedText>
    </View>
  );

  if (href) {
    return (
      <Link style={buttonStyles} {...(restProps as LinkProps)} href={href}>
        <ButtonContents />
      </Link>
    );
  }

  return (
    <TouchableHighlight
      style={buttonStyles}
      underlayColor={Colors.primaryVariant}
      {...(restProps as TextProps)}
    >
      <ButtonContents />
    </TouchableHighlight>
  );
}

const sizeStyles: Record<
  ButtonSize,
  {
    buttonWrapper: ViewStyle;
    buttonContents: ViewStyle;
  }
> = {
  [ButtonSize.Small]: {
    buttonWrapper: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 8,
    },
    buttonContents: {
      gap: 8,
    },
  },
  [ButtonSize.Medium]: {
    buttonWrapper: {
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 32,
    },
    buttonContents: {
      gap: 12,
    },
  },
};

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
  },
  buttonContents: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
