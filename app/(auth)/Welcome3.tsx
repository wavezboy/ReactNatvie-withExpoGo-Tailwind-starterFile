import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowIcon,
  CalendarIcon,
  EmailIcon,
  GreyMarkIcon,
  MarkIcon,
} from "@/assets/icons/Icon";
import { router } from "expo-router";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";

export default function Welcome3() {
  const MarkComp = () => (
    <View className="h-[32px] mr-[-8px] w-[34px] border  items-center justify-center border-[#767676] rounded-[10px] ">
      <View>
        <GreyMarkIcon />
      </View>
    </View>
  );

  return (
    <ScrollView className="h-full pt-[36px] px-[23px] flex-1  bg-[#111112]  ">
      <View>
        <View className="flex-row items-center ">
          <TouchableOpacity onPress={() => router.push("/(auth)/Welcome2")}>
            <ArrowIcon />
          </TouchableOpacity>
          <View className="w-[170px] ml-[36px] z-10 h-[8px] bg-[#29C302] rounded-[6px]"></View>
          <View className="w-[100px] h-[6px] ml-[-2px]  bg-[#575757] rounded-r-[4px]"></View>
        </View>

        <View className="mt-[57px]">
          <Text className="text-white text-[24px] font-PoppinsSemiBold">
            Welcome to Noshride!
          </Text>
          {/* clap icon */}
        </View>

        <Text className="text-white text-[14px] mt-[24px] font-PoppinsRegular w-[340px]">
          Tell us more about you
        </Text>

        <InputField containerStyle="bg-[#1D1D1D]" placeholder="First name" />
        <InputField containerStyle="bg-[#1D1D1D]" placeholder="Last name" />
        <InputField
          containerStyle="bg-[#1D1D1D]"
          placeholder="Email address"
          icon={<EmailIcon />}
        />
        <InputField
          containerStyle="bg-[#1D1D1D]"
          placeholder="Date of birth"
          icon={<CalendarIcon />}
        />

        <View className="w-full rounded-[16px] mt-[24px] p-[20px] h-[276px] bg-[#1D1D1D]">
          <Text className="text-white text-[16px] font-PoppinsSemiBold">
            Do you have a referral code ?
          </Text>
          <View className="flex-row items-center mt-[24px]">
            <TouchableOpacity className="h-[32px] mr-[8px] w-[34px] border items-center justify-center border-[#29C302] rounded-[10px] ">
              <View>
                <MarkIcon />
              </View>
            </TouchableOpacity>
            <Text className="text-white font-PoppinsRegular text-[20px]">
              Yes
            </Text>
          </View>

          <InputField
            placeholder="Enter referral code"
            containerStyle="mt-[20px]"
            icon={<MarkComp />}
          />

          <View className="flex-row items-center mt-[24px]">
            <TouchableOpacity className="h-[32px] mr-[8px] w-[34px] border items-center justify-center border-[#767676] rounded-[10px] ">
              <View className="hidden">
                <MarkIcon />
              </View>
            </TouchableOpacity>
            <Text className="text-white font-PoppinsRegular text-[20px]">
              No
            </Text>
          </View>
        </View>
      </View>

      <View>
        <CustomButton
          title="Next"
          Classname="mt-[20px]"
          onpress={() => router.push("/(auth)/Welcome4")}
        />
      </View>
    </ScrollView>
  );
}
