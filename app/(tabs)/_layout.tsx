import { Tabs } from "expo-router";
import { Compass, Hash } from "phosphor-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
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
