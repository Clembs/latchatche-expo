import { Colors } from "$lib/constants/Colors";
import { Tabs } from "expo-router";
import { Compass, Hash } from "phosphor-react-native";
import { useColorScheme } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.surfaceVariant,
        },
        tabBarActiveTintColor: colors.onSurfaceVariant,
        headerStyle: {
          backgroundColor: colors.surfaceVariant,
        },
        headerTintColor: colors.onSurfaceVariant,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Discussions",
          tabBarIcon: ({ color, focused }) =>
            Hash({ weight: focused ? "bold" : "regular", color }),
        }}
      />
      <Tabs.Screen
        name="salons-publics"
        options={{
          title: "Salons publics",
          tabBarIcon: ({ color, focused }) =>
            Compass({ weight: focused ? "fill" : "regular", color }),
        }}
      />
    </Tabs>
  );
}
