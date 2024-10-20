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
import { Text, View } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1 px-[15px]">
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
            marginBottom: 18,
            paddingHorizontal: 19,
            paddingBottom: 27,
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
                className={`${focused ? "text-[#FFBF00]  font-normal " : "text-white"} mt-[-30px] font-InterMedium mb-[10px]  `}
              >
                Home
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="Search"
          options={{
            title: "Search for Vendors",
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <SearchIcon focused={focused} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                className={`${focused ? "text-[#FFBF00]   font-normal " : "text-white"} font-InterMedium mt-[-30px] mb-[10px]  `}
              >
                Search
              </Text>
            ),
          }}
        />
        <Tabs.Screen
          name="Orders"
          options={{
            title: "Search for Events",
            headerShown: true,
            tabBarIcon: ({ color, focused }) => <OrderIcon focused={focused} />,

            tabBarLabel: ({ focused }) => (
              <Text
                className={`${focused ? "text-[#FFBF00]   font-normal " : "text-white"} font-InterMedium mt-[-30px] mb-[10px]  `}
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
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <SupportIcon focused={focused} />
            ),

            tabBarLabel: ({ focused }) => (
              <Text
                className={`${focused ? "text-[#FFBF00]   font-normal " : "text-white"} font-InterMedium mt-[-30px] mb-[10px]  `}
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
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <ProfileIcon focused={focused} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                className={`${focused ? "text-[#FFBF00]   font-normal " : "text-white"} font-InterMedium mt-[-30px] mb-[10px]  `}
              >
                Profile
              </Text>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
