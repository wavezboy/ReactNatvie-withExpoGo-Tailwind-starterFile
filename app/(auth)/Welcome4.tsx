import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import {
  ArrowIcon,
  MessageEmoji,
  PasswordIcon,
  ShowpassowrdIcon,
  WhatsappEmoji,
} from "@/assets/icons/Icon";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { router } from "expo-router";

export default function Welcome4() {
  return (
    <SafeAreaView className="h-full pt-[36px] px-[23px] flex-1  bg-[#111112]  ">
      <View className="flex-row items-center ">
        <TouchableOpacity onPress={() => router.push("/(auth)/Welcome")}>
          <ArrowIcon />
        </TouchableOpacity>
        <View className="w-[270px] ml-[36px] z-10 h-[8px] bg-[#29C302] rounded-[6px]"></View>
      </View>
      <View className="mt-[57px]">
        <Text className="text-white text-[24px] font-PoppinsSemiBold">
          Create a password
        </Text>
        {/* hand icon */}
      </View>

      <Text className="text-white text-[14px] mt-[24px] font-PoppinsRegular w-[340px]">
        Secure your account
      </Text>

      <InputField
        secureTextEntry={true}
        placeholder="******"
        icon={<PasswordIcon />}
      />

      <InputField
        secureTextEntry={true}
        placeholder="Enter password again"
        icon={<ShowpassowrdIcon />}
      />

      <CustomButton
        title="Next"
        Classname="mt-[275px]"
        onpress={() => router.push("/(auth)/Welcome3")}
      />
    </SafeAreaView>
  );
}
