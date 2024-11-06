import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SearchIcon } from "@/assets/icons/Icon";
import InputField from "@/components/InputField";
import { RecentIcon } from "@/assets/icons/SearchIcons";

export default function Search() {
  return (
    <ScrollView
      className="h-full  flex-1 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <InputField
        icon2={<SearchIcon />}
        placeholder="Find your restaurant, supermarket etc"
        containerStyle="bg-[#ECECEC] border-[0px]"
      />

      <Text className="mt-[25px] text-[18px] font-PoppinsMedium">
        Quick search
      </Text>

      <ScrollView
        horizontal={true}
        className="mt-[9px]"
        showsHorizontalScrollIndicator={false}
      >
        <View className="">
          <View className="flex-row gap-[8px]">
            <View className="w-[100px] h-[120px] bg-[#FCF2D4] border border-[#FFBF00] rounded-[16px]"></View>
            <View className="w-[100px] h-[120px] bg-[#FCF2D4] rounded-[16px]"></View>
            <View className="w-[100px] h-[120px] bg-[#FCF2D4] rounded-[16px]"></View>
            <View className="w-[100px] h-[120px] bg-[#FCF2D4] rounded-[16px]"></View>
          </View>

          <View className="flex-row gap-[8px] mt-[1px]">
            <View>
              <View className="flex-row gap-[8px]">
                <View className="w-[100px] h-[120px] bg-[#FCF2D4] border border-[#FFBF00] rounded-[16px]"></View>
                <View className="w-[100px] h-[120px] bg-[#FCF2D4] rounded-[16px]"></View>
              </View>
              <View className="flex-row gap-[8px] mt-[1px]">
                <View className="w-[100px] h-[120px] bg-[#FCF2D4] border border-[#FFBF00] rounded-[16px]"></View>
                <View className="w-[100px] h-[120px] bg-[#FCF2D4] rounded-[16px]"></View>
              </View>
            </View>

            <View className="w-[210px] h-[248px] rounded-[16px] bg-[#E9FFE4]"></View>
          </View>
        </View>
      </ScrollView>

      <Text className="font-PoppinsMedium text-[18px] mt-[32px]">
        Recent searches
      </Text>

      <View className="flex-row gap-[20px]">
        <View className="min-w-[82px] px-[10px] h-[44px] bg-[#FCF2D4] flex-row items-center justify-center rounded-[16px] border border-[#767676]">
          <View>
            <RecentIcon />
          </View>
          <Text className=" ml-[4px] text-[14px] font-PoppinsRegular">
            Chicken
          </Text>
        </View>
        <View className="min-w-[82px] px-[10px] h-[44px] bg-[#FCF2D4] flex-row items-center justify-center rounded-[16px] border border-[#767676]">
          <View>
            <RecentIcon />
          </View>
          <Text className=" ml-[4px] text-[14px] font-PoppinsRegular">
            Chicken Pie
          </Text>
        </View>
        <View className="min-w-[82px] px-[10px] h-[44px] bg-[#FCF2D4] flex-row items-center justify-center rounded-[16px] border border-[#767676]">
          <View>
            <RecentIcon />
          </View>
          <Text className=" ml-[4px] text-[14px] font-PoppinsRegular">
            Pizza
          </Text>
        </View>
      </View>
      <View className="flex-row gap-[20px]">
        <View className="min-w-[82px] px-[10px] h-[44px] bg-[#FCF2D4] flex-row items-center justify-center rounded-[16px] border border-[#767676]">
          <View>
            <RecentIcon />
          </View>
          <Text className=" ml-[4px] text-[14px] font-PoppinsRegular">
            Chicken
          </Text>
        </View>
        <View className="min-w-[82px] px-[10px] h-[44px] bg-[#FCF2D4] flex-row items-center justify-center rounded-[16px] border border-[#767676]">
          <View>
            <RecentIcon />
          </View>
          <Text className=" ml-[4px] text-[14px] font-PoppinsRegular">
            Chicken Pie
          </Text>
        </View>
        <View className="min-w-[82px] px-[10px] h-[44px] bg-[#FCF2D4] flex-row items-center justify-center rounded-[16px] border border-[#767676]">
          <View>
            <RecentIcon />
          </View>
          <Text className=" ml-[4px] text-[14px] font-PoppinsRegular">
            Pizza
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
