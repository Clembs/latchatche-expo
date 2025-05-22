import Button, { ButtonSize } from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { Link } from "phosphor-react-native";

export default function Home() {
  return (
    <ThemedView>
      <ThemedText>Hello world</ThemedText>

      <Button size={ButtonSize.Small} icon={Link} href="salons-publics">
        Bouton petit
      </Button>
      <Button size={ButtonSize.Medium} icon={Link} onPress={() => alert("h")}>
        Bouton moyen
      </Button>
    </ThemedView>
  );
}
