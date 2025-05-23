import Screen from "$lib/components/Screen";
import { AuthContext } from "$lib/context/auth";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";
import { ActivityIndicator } from "react-native";

export default function ProtectedLayout() {
  const { isReady, currentUser } = useContext(AuthContext);

  if (!isReady) {
    return (
      <Screen style={{ alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </Screen>
    );
  }

  if (!currentUser) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
