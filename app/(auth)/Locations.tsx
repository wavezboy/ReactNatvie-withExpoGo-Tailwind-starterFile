import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {
  CancelIcon,
  SearchIcon,
  LocationIcon,
  PlusIcon,
  MarkIcon,
  PenIcon,
  PeopleIcon,
  PhoneIcon,
  DeleteIcon,
} from "@/assets/icons/Icon";
import CustomButton from "@/components/CustomButton";
import SearchInput from "@/components/SearchInput";
import { router } from "expo-router";
import MapView from "react-native-maps";
import { TouchableOpacity } from "react-native";

export default function Locations() {
  return (
    <SafeAreaView className="h-full py-[36px] justify-between px-[23px] flex-1 bg-white">
      <View>
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
        <View className="w-full p-[17px] rounded-[16px]  h-[164px] bg-[#FCF2D4]">
          <View className="flex-row justify-between items-center">
            <View className="w-[48px] h-[24px] items-center justify-center    bg-white rounded-[8px]">
              <Text className="text-[#767676] font-PoppinsRegular ">Home</Text>
            </View>

            <View className="h-[34px] w-[34px] bg-[#29C302] items-center justify-center rounded-[10px]">
              <MarkIcon />
            </View>
          </View>
          <Text className="text-[20px] mt-[9px] font-PoppinsRegular text-[#767676]">
            Unnamed Road
          </Text>
          <View className="flex-row justify-between mt-[-10px] items-center">
            <Text className="text-[#767676] ">
              Unammed Road, Ibadan 200131, Oyo, Nigeria
            </Text>
            <View>
              <PenIcon />
            </View>
          </View>

          <View className="flex-row items-center mt-[19px] justify-between  ">
            <View className="flex-row items-center">
              <View className="flex-row items-center gap-[6px] mr-[10px] ">
                <View>
                  <PeopleIcon />
                </View>
                <Text className="text-[14px] font-PoppinsRegular text-[#767676]">
                  Ifeoluwa Alao
                </Text>
              </View>
              <View className="flex-row items-center gap-[6px] ">
                <View>
                  <PhoneIcon />
                </View>
                <Text className="text-[14px] font-PoppinsRegular text-[#767676]">
                  +2347031141156
                </Text>
              </View>
            </View>

            <View>
              <DeleteIcon />
            </View>
          </View>
        </View>

        <View className="w-full p-[17px] rounded-[16px] mt-[16px]  h-[164px] bg-[#FCF2D4]">
          <View className="flex-row justify-between items-center">
            <View className="w-[48px] h-[24px] items-center justify-center    bg-white rounded-[8px]">
              <Text className="text-[#767676] font-PoppinsRegular ">Home</Text>
            </View>

            <View className="h-[34px] w-[34px] bg-[#29C302] items-center justify-center rounded-[10px]">
              <MarkIcon />
            </View>
          </View>
          <Text className="text-[20px] mt-[9px] font-PoppinsRegular text-[#767676]">
            Unnamed Road
          </Text>
          <View className="flex-row justify-between mt-[-10px] items-center">
            <Text className="text-[#767676] ">
              Unammed Road, Ibadan 200131, Oyo, Nigeria
            </Text>
            <View>
              <PenIcon />
            </View>
          </View>

          <View className="flex-row items-center mt-[19px] justify-between  ">
            <View className="flex-row items-center">
              <View className="flex-row items-center gap-[6px] mr-[10px] ">
                <View>
                  <PeopleIcon />
                </View>
                <Text className="text-[14px] font-PoppinsRegular text-[#767676]">
                  Ifeoluwa Alao
                </Text>
              </View>
              <View className="flex-row items-center gap-[6px] ">
                <View>
                  <PhoneIcon />
                </View>
                <Text className="text-[14px] font-PoppinsRegular text-[#767676]">
                  +2347031141156
                </Text>
              </View>
            </View>

            <View>
              <DeleteIcon />
            </View>
          </View>
        </View>

        <View className="w-full p-[17px] rounded-[16px] mt-[16px]  h-[164px] bg-[#FCF2D4]">
          <View className="flex-row justify-between items-center">
            <View className="w-[48px] h-[24px] items-center justify-center    bg-white rounded-[8px]">
              <Text className="text-[#767676] font-PoppinsRegular ">Home</Text>
            </View>

            <View className="h-[34px] w-[34px] bg-[#29C302] items-center justify-center rounded-[10px]">
              <MarkIcon />
            </View>
          </View>
          <Text className="text-[20px] mt-[9px] font-PoppinsRegular text-[#767676]">
            Unnamed Road
          </Text>
          <View className="flex-row justify-between mt-[-10px] items-center">
            <Text className="text-[#767676] ">
              Unammed Road, Ibadan 200131, Oyo, Nigeria
            </Text>
            <View>
              <PenIcon />
            </View>
          </View>

          <View className="flex-row items-center mt-[19px]  justify-between  ">
            <View className="flex-row items-center">
              <View className="flex-row items-center gap-[6px] mr-[10px] ">
                <View>
                  <PeopleIcon />
                </View>
                <Text className="text-[14px] font-PoppinsRegular text-[#767676]">
                  Ifeoluwa Alao
                </Text>
              </View>
              <View className="flex-row items-center gap-[6px] ">
                <View>
                  <PhoneIcon />
                </View>
                <Text className="text-[14px] font-PoppinsRegular text-[#767676]">
                  +2347031141156
                </Text>
              </View>
            </View>

            <View>
              <DeleteIcon />
            </View>
          </View>
        </View>
      </View>
      <CustomButton title="Save address" />
    </SafeAreaView>
  );
}
