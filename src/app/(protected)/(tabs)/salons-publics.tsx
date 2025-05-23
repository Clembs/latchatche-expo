import Button from "$lib/components/Button";
import ThemedText, { ThemedTextVariant } from "$lib/components/ThemedText";
import ThemedView from "$lib/components/ThemedView";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function OtherThing() {
  const [count, setCount] = useState(0);

  return (
    <ThemedView>
      <ThemedText variant={ThemedTextVariant.HeadingLarge}>
        Compteur à {count}
      </ThemedText>

      <View style={styles.flex}>
        <Button onPress={() => setCount(count + 1)}>+1</Button>
        <Button onPress={() => setCount(count - 1)}>-1</Button>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    gap: 8,
  },
});
