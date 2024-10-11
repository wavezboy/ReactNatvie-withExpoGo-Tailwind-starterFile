import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="Welcome" options={{ headerShown: false }} />
      <Stack.Screen name="Sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="Sign-up" options={{ headerShown: false }} />
    </Stack>
  );
}
