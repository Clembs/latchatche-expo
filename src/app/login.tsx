import Button, { ButtonSize, ButtonVariant } from "$lib/components/Button";
import Screen from "$lib/components/Screen";
import ThemedText, { ThemedTextVariant } from "$lib/components/ThemedText";
import ThemedTextInput from "$lib/components/ThemedTextInput";
import { Colors } from "$lib/constants/Colors";
import { AuthContext } from "$lib/context/auth";
import { Stack } from "expo-router";
import { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Login() {
  const authContext = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const data = await authContext.login(username, password);

    if (typeof data === "object" && "error" in data) {
      setError(data.error);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <Screen style={{ gap: 32 }}>
        <View style={{ gap: 16 }}>
          <ThemedText variant={ThemedTextVariant.HeadingLarge}>
            Se connecter à La Tchatche
          </ThemedText>

          <ThemedText>Connectez-vous pour discuter avec vos amis.</ThemedText>
        </View>

        <ThemedTextInput
          label="Nom d'utilisateur"
          textContentType="username"
          returnKeyType="next"
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
        <ThemedTextInput
          label="Mot de passe"
          secureTextEntry={true}
          textContentType="password"
          returnKeyType="next"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        {error && (
          <ThemedText style={{ color: Colors.error }}>{error}</ThemedText>
        )}

        <Button onPress={handleSubmit} style={{ width: "100%" }}>
          Se connecter
        </Button>

        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            alignSelf: "flex-end",
          }}
        >
          <ThemedText>Pas de compte ?</ThemedText>

          <Button
            href="/register"
            size={ButtonSize.Small}
            variant={ButtonVariant.Text}
          >
            Inscrivez vous !
          </Button>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
});
