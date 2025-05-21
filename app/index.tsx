import { StyleSheet, Text, View } from "react-native";

function Home() {
  return (
    <View style={styles.container}>
      <Text>Hello, world oOoo</Text>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
