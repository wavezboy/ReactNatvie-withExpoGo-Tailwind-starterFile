import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { FlagIcon, LogoIcon } from "@/assets/icons/Icon";
import { icons } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";

export default function Onboarding() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="h-full   flex-1  bg-[#111112]  ">
      <View className=" pt-[63px] items-center justify-center">
        <LogoIcon />
        <Text className="text-white text-[16px] font-PoppinsRegular mt-[15px]">
          Delivered within minutes
        </Text>
        <View className="w-full mt-[-40px] ">
          <Image source={icons.welcomeIcon} resizeMode="cover" height={960} />
        </View>
      </View>

      <View className="p-[15px] absolute bottom-0">
        <Text className="text-white text-[18px] font-PoppinsMedium">
          Enter your Phone number
        </Text>

        <View className="flex-row items-center mb-[26px] ">
          <TouchableWithoutFeedback className="" onPress={Keyboard.dismiss}>
            <View className="border justify-center flex-row items-center  bg-[#111112]  border-[#767676] w-[110px] h-[54px] rounded-[16px]">
              <View className="mr-[10px]">
                <FlagIcon />
              </View>
              <Text className="text-[#767676] text-[16px] font-PoppinsRegular">
                +234
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <InputField
            containerStyle="min-w-[243px] ml-[27px] bg-[#111112]  h-[54px]"
            placeholder="07031141156"
          />
        </View>
        <CustomButton
          title="Continue"
          onpress={() => router.push("/(auth)/Welcome2")}
        />

        <Link href={"/"} className="text-white text-center mt-[50px]">
          Sign in as guest
        </Link>
      </View>
    </SafeAreaView>
  );
}
