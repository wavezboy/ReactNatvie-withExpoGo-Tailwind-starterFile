import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  LoveIcon,
  BicycleIcon,
  NairaIcon,
  TimeIcon,
  StarIcon,
} from "@/assets/icons/HomeIcon";
import { images } from "@/constants";

export default function FoodComponent() {
  return (
    <TouchableOpacity className="h-[232px] px-[8px] w-[296px] bg-[#F7F7F7] rounded-[16px] mt-[17px]">
      <Image
        source={images.FoodImage2}
        resizeMode="contain"
        className="w-full mt-[8px]"
      />

      <View className="flex-row justify-between items-center mt-[8px]">
        <Text className="text-[16px] font-PoppinsMedium">
          Jollof Square - Ibadan
        </Text>

        <View>
          <LoveIcon />
        </View>
      </View>

      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-[23px]">
          <View className="flex-row items-center">
            <View className="mr-1">
              <BicycleIcon />
            </View>
            <View className="flex-row items-center">
              <Text className="mr-1 text-[12px] font-PoppinsRegular">From</Text>
              <View>
                <NairaIcon />
              </View>
              <Text className="text-[12px] font-PoppinsRegular">600</Text>
            </View>
          </View>

          <View className="flex-row ml-[3px] items-center">
            <View>
              <TimeIcon />
            </View>
            <Text className="text-[#29C302] text-[12px] font-PoppinsRegular">
              12-22 min
            </Text>
          </View>
        </View>

        <View className="flex-row items-center">
          <View>
            <StarIcon />
          </View>
          <Text className="text-[12px] font-PoppinsRegular">4.8</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
