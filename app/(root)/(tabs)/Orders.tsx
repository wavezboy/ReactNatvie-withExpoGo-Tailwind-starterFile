import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { EmptyIcon } from "@/assets/icons/OrderIcon";
import CustomButton from "@/components/CustomButton";

export default function Orders() {
  const [ongoing, setOngoing] = useState(false);
  const [myCart, setMycart] = useState(true);
  const [completed, setCompleted] = useState(false);
  const MyCart = [1, 2, 3];
  return (
    <SafeAreaView className="h-full py-[36px] justify-between  items-center pb-[87px]  bg-white">
      <View className="w-full h-[60px] flex-row justify-between bg-[#F0F0F0] rounded-[16px] items-center px-[5px]">
        <TouchableOpacity
          className={` ${myCart ? "bg-black" : ""} w-[107px] h-[47px]  items-center justify-center rounded-[12px]`}
          onPress={() => {
            setMycart(true);
            setCompleted(false);
            setOngoing(false);
          }}
        >
          <Text
            className={` ${myCart ? "text-white" : "text-[#767676]"}  text-[14px] font-PoppinsRegular`}
          >
            My Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={` ${ongoing ? "bg-black" : ""} w-[107px] h-[47px]  items-center justify-center rounded-[12px]`}
          onPress={() => {
            setOngoing(true);
            setMycart(false);
            setCompleted(false);
          }}
        >
          <Text
            className={` ${ongoing ? "text-white" : "text-[#767676]"}  text-[14px] font-PoppinsRegular`}
          >
            Ongoing
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={` ${completed ? "bg-black" : ""} w-[107px] h-[47px]  items-center justify-center rounded-[12px]`}
          onPress={() => {
            setCompleted(true);
            setMycart(false);
            setOngoing(false);
          }}
        >
          <Text
            className={` ${completed ? "text-white" : "text-[#767676]"}  text-[14px] font-PoppinsRegular`}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 justify-center items-center">
        <View className=" w-[128px] items-center justify-center h-[236px] rounded-[24px] bg-[#D9D9D9]">
          <View>
            <EmptyIcon />
          </View>
        </View>

        <Text className=" text-[#767676] text-[14px] font-PoppinsRegular mt-[45px]">
          {myCart
            ? "Your cart is empty"
            : ongoing
              ? "We are waiting for your first order"
              : "We are waiting for your first order"}
        </Text>
      </View>

      <CustomButton
        title={`${myCart ? "Add items to cart" : ongoing ? "Order now" : "Order now"}`}
      />
    </SafeAreaView>
  );
}
