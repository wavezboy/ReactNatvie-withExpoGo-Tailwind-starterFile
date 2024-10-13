import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {
  CancelIcon,
  SearchIcon,
  LocationIcon,
  PlusIcon,
} from "@/assets/icons/Icon";
import CustomButton from "@/components/CustomButton";
import SearchInput from "@/components/SearchInput";
import { router } from "expo-router";
import MapView from "react-native-maps";
import { TouchableOpacity } from "react-native";

export default function Locations() {
  return (
    <SafeAreaView className="h-full py-[36px] px-[23px] flex-1 bg-white">
      <View className="flex-row justify-between">
        <Text className="text-[24px] font-PoppinsSemiBold text-[#0C0C0C]">
          Your location
        </Text>
        <CancelIcon />
      </View>

      <View className="w-[227px]  h-[54px] bg-[#111112]  flex-row  items-center justify-center rounded-[16px] mt-[26px]">
        <Text className="text-[#29C302] mr-[18px] text-[18px] font-PoppinsRegular">
          Add new address
        </Text>
        <TouchableOpacity className="w-[34px] h-[32px] bg-[#29C302] rounded-[8px] items-center justify-center">
          <PlusIcon />
        </TouchableOpacity>
      </View>

      <Text className="text-[#767676] text-[18px] font-PoppinsRegular mt-[33px]">
        Saved address
      </Text>
      <View className="w-full h-[]"></View>
    </SafeAreaView>
  );
}
