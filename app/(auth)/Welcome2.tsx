import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowIcon, MessageEmoji, WhatsappEmoji } from "@/assets/icons/Icon";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function Welcome2() {
  return (
    <SafeAreaView className="h-full py-[36px] justify-between   px-[23px] flex-1  bg-[#111112]  ">
      <View>
        <View className="flex-row items-center ">
          <TouchableOpacity onPress={() => router.push("/(auth)/Welcome")}>
            <ArrowIcon />
          </TouchableOpacity>
          <View className="w-[100px] ml-[36px] z-10 h-[8px] bg-[#29C302] rounded-[6px]"></View>
          <View className="w-[170px] h-[6px] ml-[-2px]  bg-[#575757] rounded-r-[4px]"></View>
        </View>
        <View className="mt-[57px]">
          <Text className="text-white text-[24px] font-PoppinsSemiBold">
            Verify your phone number
          </Text>
          {/* thum icon */}
        </View>

        <Text className="text-white text-[14px] mt-[24px] font-PoppinsRegular w-[340px]">
          Please enter the code sent to{" "}
          <Text className="text-[#29C302]">+2347031141156</Text> via SMS and
          WhatsApp
        </Text>

        <View className="flex-row">
          <InputField
            containerStyle="w-[89px]  bg-[#1D1D1D] h-[54px]"
            keyboardType="number-pad"
          />
          <InputField
            containerStyle="w-[89px] bg-[#1D1D1D] h-[54px] ml-[5px]"
            keyboardType="numeric"
          />
          <InputField
            containerStyle="w-[89px] bg-[#1D1D1D] h-[54px] ml-[5px]"
            keyboardType="numeric"
          />
          <InputField
            containerStyle="w-[89px] bg-[#1D1D1D] h-[54px] ml-[5px]"
            keyboardType="numeric"
          />
        </View>

        <Text className="text-[#767676] text-[16px] mt-[24px] font-PoppinsMedium ">
          Resend code in <Text className="text-[#187700]">30s</Text>
        </Text>

        <CustomButton
          Classname="bg-[#1D1D1D] border border-[#767676] mt-[36px] w-[260px]"
          textStyles="mr-[23px] text-[16px] font-PoppinsRegular"
          title="Resend code  via SMS"
          IconRight={<MessageEmoji />}
        />
        <CustomButton
          Classname="bg-[#1D1D1D] border border-[#767676] mt-[12px] w-[299px]"
          textStyles="mr-[23px] text-[16px] font-PoppinsRegular"
          title="Resend code  via Whatsapp"
          IconRight={<WhatsappEmoji />}
        />
      </View>

      <View>
        <CustomButton
          title="Verify phone number"
          Classname=""
          onpress={() => router.push("/(auth)/Welcome3")}
        />
      </View>
    </SafeAreaView>
  );
}
