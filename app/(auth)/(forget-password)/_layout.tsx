import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="Verify-phoneNumber"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="New-password" options={{ headerShown: false }} />
      <Stack.Screen name="Success-screen" options={{ headerShown: false }} />
    </Stack>
  );
}
