import Button from "@/components/Button";
import { ThemedText, ThemedTextVariants } from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function OtherThing() {
  const [count, setCount] = useState(0);

  return (
    <ThemedView>
      <ThemedText variant={ThemedTextVariants.HeadingLarge}>
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
