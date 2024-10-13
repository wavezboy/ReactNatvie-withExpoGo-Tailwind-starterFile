import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { router } from "expo-router";
import {
  ArrowBackIcon,
  HomeIcon,
  OthersIcon,
  PenIcon,
  PeopleIcon,
  PhoneIcon,
  SchoolIcon,
  WorkIcon,
} from "@/assets/icons/Icon";

export default function AddressDetails() {
  return (
    <SafeAreaView className="h-full py-[36px] justify-between  px-[23px] flex-1  bg-white  ">
      <View>
        <View className="flex-row gap-[20px]">
          <TouchableOpacity
            onPress={() => router.push("/(auth)/SelectLocation")}
          >
            <ArrowBackIcon />
          </TouchableOpacity>

          <Text className="text-[24px] font-PoppinsSemiBold">
            Address details
          </Text>
        </View>

        <Text className="text-[18px] font-PoppinsMedium mt-[39px]">
          Address
        </Text>
        <Text className="text-[20px] font-PoppinsRegular text-[#767676]">
          Unnamed Road
        </Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-[#767676]">
            Unammed Road, Ibadan 200131, Oyo, Nigeria
          </Text>
          <View>
            <PenIcon />
          </View>
        </View>

        <Text className="text-[18px] font-PoppinsMedium mt-[37px]">
          Contact information
        </Text>
        <InputField icon2={<PeopleIcon />} placeholder="Alao Ifeoluwa" />
        <InputField icon2={<PhoneIcon />} placeholder="+2347031141156" />

        <Text className="text-[18px] font-PoppinsMedium mt-[40px]">
          Instructions for the driver
        </Text>
        <InputField
          containerStyle="h-[126px] text-start"
          inputStyle="h-full text-black "
          placeholder="Ex. First house on the right when you enter the street"
        />

        <Text className="text-[18px] font-PoppinsMedium mt-[29px]">
          Address label
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity className="h-[146px] mr-[7px] w-[117px] bg-[#FCF2D4] border border-[#FFBF00] rounded-[16px]">
            <View className="items-center justify-center flex-1">
              <HomeIcon />
              <Text className="text-center text-[14px] font-PoppinsRegular">
                Home
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-[146px] mr-[7px] w-[117px] bg-[#F7F7F7]  rounded-[16px]">
            <View className="items-center justify-center flex-1">
              <WorkIcon />
              <Text className="text-center text-[#767676] text-[14px] font-PoppinsRegular">
                Work
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-[146px] mr-[7px] w-[117px] bg-[#F7F7F7] rounded-[16px]">
            <View className="items-center justify-center flex-1">
              <SchoolIcon />
              <Text className="text-center text-[#767676] text-[14px] font-PoppinsRegular">
                School
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-[146px] mr-[7px] w-[117px] bg-[#F7F7F7] rounded-[16px]">
            <View className="items-center justify-center flex-1">
              <OthersIcon />
              <Text className="text-center text-[#767676] text-[14px] font-PoppinsRegular">
                Others
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <CustomButton
        title="Save address"
        onpress={() => router.push("/(auth)/Locations")}
      />
    </SafeAreaView>
  );
}
