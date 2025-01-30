import { Stack, Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#FFBF00",
        tabBarInactiveTintColor: "#000000",
        tabBarStyle: {
          backgroundColor: "#111112",
          borderTopWidth: 1,
          borderTopColor: "#EBEAEA",
          borderTopStartRadius: 24,
          borderTopEndRadius: 24,
          borderBottomEndRadius: 24,
          borderBottomStartRadius: 24,
          height: 118,
          marginBottom: 10,
          paddingHorizontal: 19,
          paddingTop: 27,
          marginLeft: 15,
          marginRight: 15,
        },
        tabBarLabelStyle: {},
      }}
    ></Tabs>
  );
}
