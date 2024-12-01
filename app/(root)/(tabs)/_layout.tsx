import { CartIcon } from "@/assets/icons/SearchIcons";
import {
  OrderIcon,
  ProfileIcon,
  SearchIcon,
  SupportIcon,
  HomeIcon,
} from "@/assets/icons/TabIcons";
import { icons } from "@/constants";
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
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <HomeIcon focused={focused} />,
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${focused ? "text-[#FFBF00]  font-normal " : "text-white"} font-InterMedium mb-[10px]  `}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon: ({ color, focused }) => <SearchIcon focused={focused} />,
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${focused ? "text-[#FFBF00]   font-normal " : "text-white"} font-InterMedium  mb-[10px]  `}
            >
              Search
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <View>
                <CartIcon />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Orders"
        options={{
          title: "Orders",
          headerShown: true,
          headerShadowVisible: false,
          tabBarIcon: ({ color, focused }) => <OrderIcon focused={focused} />,

          tabBarLabel: ({ focused }) => (
            <Text
              className={`${focused ? "text-[#FFBF00]   font-normal " : "text-white"} font-InterMedium  mb-[10px]  `}
            >
              Orders
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Support"
        options={{
          title: "Support",
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({ color, focused }) => <SupportIcon focused={focused} />,

          tabBarLabel: ({ focused }) => (
            <Text
              className={`${focused ? "text-[#FFBF00]   font-normal " : "text-white"} font-InterMedium mb-[10px]  `}
            >
              Support
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          headerShadowVisible: false,
          tabBarIcon: ({ color, focused }) => <ProfileIcon focused={focused} />,
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${focused ? "text-[#FFBF00]   font-normal " : "text-white"} font-InterMedium mb-[10px]  `}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
