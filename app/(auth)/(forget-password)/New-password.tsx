import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowIcon, PasswordIcon, ShowpassowrdIcon } from "@/assets/icons/Icon";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { router } from "expo-router";

export default function CreatePassword() {
  return (
    <SafeAreaView className="h-full py-[36px] justify-between px-[23px] flex-1  bg-[#111112]  ">
      <View>
        <View className="flex-row items-center ">
          <TouchableOpacity onPress={() => router.push("/(auth)/Welcome3")}>
            <ArrowIcon />
          </TouchableOpacity>
          <View className="w-[270px] ml-[36px] z-10 h-[8px] bg-[#29C302] rounded-[6px]"></View>
        </View>
        <View className="mt-[57px]">
          <Text className="text-white text-[24px] font-PoppinsSemiBold">
            Enter your new password
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
        <View className="flex-row justify-end mr-2">
          <Text className="text-[#898989] text-[14px] font-PoppinsRegular">
            5/5
          </Text>
        </View>

        <InputField
          secureTextEntry={true}
          placeholder="Enter password again"
          icon={<ShowpassowrdIcon />}
        />
        <View className="flex-row justify-end mr-2">
          <Text className="text-[#898989] text-[14px] font-PoppinsRegular">
            5/5
          </Text>
        </View>
      </View>

      <View>
        <CustomButton
          title="Reset password"
          Classname=""
          onpress={() =>
            router.push("/(auth)/(forget-password)/Success-screen")
          }
        />
      </View>
    </SafeAreaView>
  );
}
