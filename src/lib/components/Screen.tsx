import { ViewProps } from "react-native";
import ThemedView from "./ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Screen({ style, ...restProps }: ViewProps) {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ThemedView
      style={[
        {
          paddingTop: safeAreaInsets.top + 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingBottom: safeAreaInsets.bottom + 16,
        },
        style,
      ]}
      {...restProps}
    />
  );
}
