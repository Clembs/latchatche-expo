import Button, { ButtonSize } from "$lib/components/Button";
import ThemedText, { ThemedTextVariant } from "$lib/components/ThemedText";
import ThemedView from "$lib/components/ThemedView";
import { Stack } from "expo-router";
import { Link } from "phosphor-react-native";
import { Alert, View } from "react-native";

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View>
              <ThemedText variant={ThemedTextVariant.HeadingSmall}>
                Discussions
              </ThemedText>
              <ThemedText variant={ThemedTextVariant.Footnote}>
                4 membres • Opéré par vous
              </ThemedText>
            </View>
          ),
          headerRight: () => <Button icon={Link} />,
        }}
      />
      <ThemedView>
        <ThemedText>Hello world</ThemedText>

        <Button size={ButtonSize.Small} icon={Link} href="salons-publics">
          Bouton petit
        </Button>
        <Button
          size={ButtonSize.Medium}
          icon={Link}
          onPress={() =>
            Alert.alert("gheb", "glubux", [
              {
                text: "hi",
              },
            ])
          }
        >
          Bouton moyen
        </Button>
      </ThemedView>
    </>
  );
}
