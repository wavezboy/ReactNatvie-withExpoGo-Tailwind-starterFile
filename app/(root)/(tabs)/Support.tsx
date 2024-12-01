import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import {
  ArrowIcon,
  LogoIcon,
  MessageIcon,
  QuestionIcon,
  SearchIcon,
} from "@/assets/icons/SupportIcon";
import { images } from "@/constants";
import { TouchableOpacity } from "react-native";
import { CancelIcon } from "@/assets/icons/Icon";
import InputField from "@/components/InputField";

export default function Support() {
  return (
    <SafeAreaView className="h-full px-[15px]  py-[36px] flex-1 bg-white">
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
      <View className=" w-full p-[14px] h-[97px] bg-[#FCF2D4] rounded-[16px] mt-[24px]">
        <View className="justify-between items-center flex-row">
          <Text className="font-PoppinsRegular text-[14px]">Messages</Text>
          <View>
            <MessageIcon />
          </View>
        </View>
        <View className="h-[1px] bg-[#DADADA] w-full mt-[12px]"></View>
        <View className="justify-between items-center flex-row mt-[13px]">
          <Text className="font-PoppinsRegular text-[14px]">Help</Text>
          <View>
            <QuestionIcon />
          </View>
        </View>
      </View>

      <View className=" w-full px-[14px] py-[19px] h-fit bg-[#FCF2D4] rounded-[16px] mt-[24px]">
        <View className="justify-between items-center flex-row">
          <Text className="font-PoppinsRegular text-[14px]">
            Send us a message
          </Text>
          <View>
            <MessageIcon />
          </View>
        </View>
      </View>
      <View className=" w-full px-[11px] py-[19px] h-fit bg-[#FCF2D4] rounded-[16px] mt-[24px]">
        <InputField
          containerStyle="bg-[#29C302]  border-[0px]"
          placeholder="Search for help"
          placeholderTextColor="#FFFFFF"
          inputStyle="py-[11px]"
          icon={<SearchIcon />}
        />

        <TouchableOpacity className="px-[2px] justify-between flex-row">
          <Text className="font-PoppinsRegular text-[14px]">
            What is Service Fee?
          </Text>
          <View>
            <ArrowIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="px-[2px] justify-between mt-[16px] flex-row">
          <Text className="font-PoppinsRegular text-[14px]">
            What is Surge Fee?
          </Text>
          <View>
            <ArrowIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="px-[2px] justify-between mt-[16px] flex-row">
          <Text className="font-PoppinsRegular text-[14px]">Refund Policy</Text>
          <View>
            <ArrowIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="px-[2px] justify-between mt-[16px] flex-row">
          <Text className="font-PoppinsRegular text-[14px]">
            How do I withdraw the funds in my wallet
          </Text>
          <View>
            <ArrowIcon />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
