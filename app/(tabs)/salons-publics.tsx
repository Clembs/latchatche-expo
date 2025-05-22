import { StyleSheet, Text, View } from "react-native";

export default function OtherThing() {
  return (
    <View style={styles.container}>
      <Text>Salons publics yippee</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
