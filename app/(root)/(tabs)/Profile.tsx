import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

export default function Profile() {
  return (
    <SafeAreaView className="h-full  flex-1 bg-white">
      <View className="h-fit w-full  bg-[#E1FFDA] rounded-b-[24px]">
        <Image source={images.vector} resizeMode="cover" height={20} />
      </View>
    </SafeAreaView>
  );
}
