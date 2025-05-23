import { AuthProvider } from "$lib/context/auth";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="(protected)"
          options={{ headerShown: false, animation: "none" }}
        />
      </Stack>
    </AuthProvider>
  );
}
