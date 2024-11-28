import {
  BicycleIcon,
  CircleIcon,
  DishesIcon,
  DropdownIcon,
  HouseIcon,
  LoveIcon,
  MarketIcon,
  NairaIcon,
  NotificationIcon,
  PharmIcon,
  RestaurantIcon,
  SearchIcon,
  StarIcon,
  SupermarketIcon,
  TagIcon,
  TimeIcon,
} from "@/assets/icons/HomeIcon";
import { LocationIcon } from "@/assets/icons/Icon";
import FoodComponent from "@/components/FoodComponent";
import InputField from "@/components/InputField";
import { images } from "@/constants";
import { Link } from "expo-router";
import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView, Text, View, Image } from "react-native";

export default function Page() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="h-full py-[10px]  flex-1 bg-white"
    >
      <View className="flex-row items-center justify-between">
        <TouchableOpacity className="flex-row items-center ">
          <View>
            <LocationIcon />
          </View>
          <Text className="font-PoppinsRegular text-[16px]">
            Select your location
          </Text>
          <View>
            <DropdownIcon />
          </View>
        </TouchableOpacity>
        <View className="flex-row gap-[32px]">
          <View>
            <TagIcon />
          </View>
          <View>
            <NotificationIcon />
          </View>
        </View>
      </View>

      <InputField
        icon2={<SearchIcon />}
        placeholder="Find your restaurant, supermarket etc"
        containerStyle="bg-[#ECECEC] mt-[20px] border-[0px]"
      />

      <View className="flex-row justify-between mt-[25px]">
        <TouchableOpacity className="w-[122px] h-[99px] items-center justify-center rounded-[24px] bg-[#E9FFE4]">
          <RestaurantIcon />
          <Text className="mt-[8px] text-[14px] font-PoppinsRegular">
            Restaurants
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[122px] h-[99px] items-center justify-center rounded-[24px] bg-[#FFE8EE]">
          <SupermarketIcon />
          <Text className="mt-[8px] text-[14px] font-PoppinsRegular">
            Supermarkets
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[122px] h-[99px] items-center justify-center rounded-[24px] bg-[#FCF2D4]">
          <PharmIcon />
          <Text className="mt-[8px] text-[14px] font-PoppinsRegular">
            Pharmacies
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between mt-[16px]">
        <TouchableOpacity className="w-[122px] h-[99px] items-center justify-center rounded-[24px] bg-[#E6EFF9]">
          <MarketIcon />
          <Text className="mt-[8px] text-[14px] font-PoppinsRegular">
            Local Markets
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[122px] h-[99px] items-center justify-center rounded-[24px] bg-[#F2F2F2]">
          <DishesIcon />
          <Text className="mt-[8px] text-[14px] font-PoppinsRegular">
            African Dishes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[122px] h-[99px] items-center justify-center rounded-[24px] bg-[#F3F1FD]">
          <HouseIcon />
          <Text className="mt-[8px] text-[14px] font-PoppinsRegular">More</Text>
        </TouchableOpacity>
      </View>

      <View className="w-full h-[110px] bg-[#FFCFDD] rounded-[16px] flex-row mt-[20px] items-center justify-start pl-[16px]">
        <Image
          source={images.vector}
          resizeMode="cover"
          height={20}
          className="absolute -z-50 right-[7.5%]"
        />
        <Text className="text-[22px] font-PoppinsMedium w-[146px]">
          Get the Nosh Combo now
        </Text>
        <View className="w-[117px] h-[48px] rounded-[16px]  items-center justify-center flex-row bg-[#29C302] border-[2px] border-black">
          <View>
            <CircleIcon />
          </View>
          <Text className="text-white text-[18px] ml-[7px] font-PoppinsBold">
            2500 <Text className="text-[13px] font-PoppinsRegular">only</Text>
          </Text>
        </View>
        <Image
          className="rounded-r-[16px] ml-[-54px] -z-50"
          source={images.FoodImage}
          resizeMode="cover"
          height={960}
        />
      </View>
      <ScrollView
        horizontal={true}
        className=""
        showsHorizontalScrollIndicator={false}
      >
        {[...Array(5)].map((data, i) => (
          <View key={i} className="mr-3 ">
            <FoodComponent />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}
