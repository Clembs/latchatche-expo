import { Colors } from "@/constants/Colors";
import { Link, LinkProps } from "expo-router";
import { IconProps } from "phosphor-react-native";
import { ComponentType, PropsWithChildren } from "react";
import {
  Platform,
  StyleSheet,
  TextProps,
  TouchableHighlight,
  View,
} from "react-native";
import { ThemedText, ThemedTextVariants } from "./ThemedText";

function ButtonContents({
  icon: Icon,
  children,
}: PropsWithChildren<{
  icon?: ComponentType<IconProps>;
}>) {
  return (
    <View style={styles.buttonContents}>
      {Icon && <Icon color={Colors.onPrimary} />}

      <ThemedText
        variant={ThemedTextVariants.Clickable}
        style={{ color: Colors.onPrimary }}
      >
        {children}
      </ThemedText>
    </View>
  );
}

export default function Button({
  children,
  href,
  style,
  icon,
  ...restProps
}: PropsWithChildren<Partial<LinkProps | TextProps>> & {
  href?: string;
  icon?: ComponentType<IconProps>;
}) {
  return href ? (
    <Link
      style={[styles.buttonWrapper, style]}
      {...(restProps as LinkProps)}
      href={href}
    >
      <ButtonContents icon={icon} children={children} />
    </Link>
  ) : (
    <TouchableHighlight
      style={[styles.buttonWrapper, style]}
      underlayColor={Colors.primaryVariant}
      {...(restProps as TextProps)}
    >
      <ButtonContents icon={icon} children={children} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: Platform.OS === "web" ? 8 : 32,
    paddingHorizontal: 16 * 1.5,
    paddingVertical: 16,
    backgroundColor: Colors.primary,
    color: Colors.onPrimary,
  },
  buttonContents: {
    gap: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
});
