import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="Welcome" options={{ headerShown: false }} />
      <Stack.Screen name="Welcome2" options={{ headerShown: false }} />
      <Stack.Screen name="Welcome3" options={{ headerShown: false }} />
      <Stack.Screen name="Welcome4" options={{ headerShown: false }} />
      <Stack.Screen name="SelectLocation" options={{ headerShown: false }} />
      <Stack.Screen name="AddressDetails" options={{ headerShown: false }} />
      <Stack.Screen name="Locations" options={{ headerShown: false }} />
      <Stack.Screen name="Sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="Sign-up" options={{ headerShown: false }} />
    </Stack>
  );
}
