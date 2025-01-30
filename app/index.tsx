import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

export default function Home() {
  // return <Redirect href="/(root)/(tabs)/Home" />;

  return (
    <SafeAreaView className="bg-black flex-1 justify-center items-center">
      <Text className="text-4xl text-white">This is a starter file</Text>
    </SafeAreaView>
  );
}
