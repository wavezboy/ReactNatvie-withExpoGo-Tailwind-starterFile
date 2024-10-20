import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import { SuccessIcon } from "@/assets/icons/Icon";

export default function Success() {
  return (
    <SafeAreaView className="h-full py-[36px] justify-between px-[23px] flex-1  bg-[#111112]  ">
      <View className="h-[80vh] justify-center items-center">
        <SuccessIcon />
        <Text className="text-white text-[16px] font-PoppinsRegular">
          Password reset successful
        </Text>
      </View>

      <CustomButton title="Login" />
    </SafeAreaView>
  );
}
