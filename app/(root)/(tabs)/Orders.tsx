import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { CancelIcon, EmptyIcon } from "@/assets/icons/OrderIcon";
import CustomButton from "@/components/CustomButton";
import { images } from "@/constants/index";
import { BicycleIcon } from "@/assets/icons/HomeIcon";

export default function Orders() {
  const [ongoing, setOngoing] = useState(false);
  const [myCart, setMycart] = useState(true);
  const [completed, setCompleted] = useState(false);
  const myCartData = [1, 2, 3];

  const MyCartCard = () => (
    <View className="w-full h-[175px] p-[14px] bg-[#FCF2D4] rounded-[16px] mt-[19px]">
      <TouchableOpacity className="absolute left-[97%] bottom-[97%]">
        <CancelIcon />
      </TouchableOpacity>
      <View className="flex-row items-center gap-[9px]">
        <Image
          source={images.OrderCardPlaceholder}
          resizeMode="cover"
          height={20}
        />
        <View>
          <Text className="text-[14px] font-PoppinsMedium ">
            Cafe One - Ibadan
          </Text>
          <Text className="text-[#767676] font-PoppinsMedium text-[14px]">
            1 Items - ₦4,665
          </Text>
        </View>
      </View>
      <View className="flex-row mt-[16px] items-center ">
        <BicycleIcon />
        <Text className="text-[12px] ml-[4px] font-PoppinsRegular ">
          Deleivering to Elebu Road, Oluyole, Oyo
        </Text>
      </View>

      <View className="flex-row mt-[13px] justify-between">
        <CustomButton
          title="View Selection"
          bgVariant="white"
          textVariant="white"
          Classname="w-[40%]"
        />
        <CustomButton title="Checkout" Classname="w-[55%]" />
      </View>
    </View>
  );

  return (
    <SafeAreaView className="h-full py-[36px] items-center   bg-white">
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

      <View className="flex-1 w-full">
        {myCartData.length > 0 && myCart ? (
          <MyCartCard />
        ) : (
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
        )}
      </View>

      <View className="w-full items-center">
        {myCartData.length > 0 && myCart ? (
          <TouchableOpacity>
            <Text className="text-[#FF0000] font-PoppinsMedium text-[14px]">
              Clear cart
            </Text>
          </TouchableOpacity>
        ) : (
          <CustomButton
            title={`${myCart ? "Add items to cart" : ongoing ? "Order now" : "Order now"}`}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
