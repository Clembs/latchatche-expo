import Button from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { Link } from "phosphor-react-native";

export default function Home() {
  return (
    <ThemedView>
      <ThemedText>Hello world</ThemedText>

      <Button icon={Link} onPress={() => alert("L'alerte est montrée.")}>
        Montrer une alerte
      </Button>
    </ThemedView>
  );
}
