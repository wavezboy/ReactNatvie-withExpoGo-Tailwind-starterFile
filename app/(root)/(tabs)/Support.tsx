import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { LogoIcon } from "@/assets/icons/SupportIcon";
import { images } from "@/constants";
import { TouchableOpacity } from "react-native";
import { CancelIcon } from "@/assets/icons/Icon";

export default function Support() {
  return (
    <SafeAreaView className="h-full py-[36px] flex-1 bg-white">
      <View className="flex-row justify-between items-center">
        <LogoIcon />

        <View className="flex-row gap-[6px]">
          <Image resizeMode="cover" source={images.Avatar} />
          <Image resizeMode="cover" source={images.Avatar} />
          <Image resizeMode="cover" source={images.Avatar} />
          <TouchableOpacity className="ml-[6px]">
            <CancelIcon />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-[24px]">
        <Text className="text-[24px] text-[#29C302] font-PoppinsBold">
          Hi Ifeoluwa
        </Text>
        <View>{/* icon */}</View>
      </View>
      <Text className="text-[24px] font-PoppinsBold">How can we help ?</Text>
    </SafeAreaView>
  );
}
