import { Colors } from "$lib/constants/Colors";
import { useRef } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  useColorScheme,
} from "react-native";
import ThemedText, { ThemedTextVariant } from "./ThemedText";

export default function ThemedTextInput({
  style,
  label,
  ...restProps
}: TextInputProps & {
  label?: string;
}) {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  const textInputRef = useRef<TextInput>(null);

  return (
    <Pressable
      onPress={() => textInputRef.current?.focus()}
      style={styles.container}
    >
      {label && (
        <ThemedText variant={ThemedTextVariant.Clickable}>{label}</ThemedText>
      )}

      <TextInput
        ref={textInputRef}
        style={[
          styles.textInput,
          {
            backgroundColor: colors.surfaceVariant,
            color: colors.onSurface,
          },
          style,
        ]}
        {...restProps}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  textInput: {
    borderRadius: 8,
    padding: 12,
    width: "100%",
    fontSize: 16,
  },
});
