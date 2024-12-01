import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { images } from "@/constants";
import {
  AddressIcon,
  BorderedStar,
  CardIcon,
  FaqIcon,
  GetHelpIcon,
  LegalIcon,
  LoveIcon,
  OfferIcon,
  ProfileIcon,
  ReferralIcon,
  RewardIcon,
  ShuffleIcon,
  Threestars,
  UpdateIcon,
  WalletIcon,
} from "@/assets/icons/ProfileIcon";

export default function Profile() {
  return (
    <SafeAreaView className="h-full  flex-1 bg-white">
      <View className="h-fit w-full py-[22px] px-[20px] flex-row justify-between items-center  bg-[#E1FFDA] rounded-b-[24px]">
        <View className="flex-row items-center">
          <View className="w-[116px] h-[139px] bg-[#29C302] rounded-[20px]">
            <Image source={images.Head} resizeMode="cover" height={20} />
            <View className="absolute bottom-[10px] right-[10px]">
              <ShuffleIcon />
            </View>
          </View>

          <Text className="font-PoppinsMedium text-[20px] w-[108px] ml-[14px]">
            Ifeoluwa Alao
          </Text>
        </View>{" "}
        <View className="mb-[-35px]">
          <View>
            <Threestars />
          </View>

          <View className="w-[70px] mt-[22px] h-[44px] flex-row items-center justify-center bg-[#FCF2D4] rounded-[16px] border border-[#767676]">
            <View>
              <BorderedStar />
            </View>

            <Text className="font-PoppinsRegular text-[16px] ml-[8px]">3</Text>
          </View>
        </View>
      </View>

      <View className="px-[10px] flex-1 justify-between mb-[39px] mt-[42px] ">
        <View className="flex-row justify-between">
          <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#FCF2D4]">
            <View>
              <WalletIcon />
            </View>
            <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
              Wallet
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#F7F7F7]">
            <View>
              <LoveIcon />
            </View>
            <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
              Saved
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#F7F7F7]">
            <View>
              <OfferIcon />
            </View>
            <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
              Offers
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#F7F7F7]">
            <View>
              <ReferralIcon />
            </View>
            <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
              Referrals
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text className="text-[16px] font-PoppinsRegular text-[#767676]  mb-[8px]">
            Personal
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#F7F7F7]">
              <View>
                <ProfileIcon />
              </View>
              <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
                Profile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#F7F7F7]">
              <View>
                <AddressIcon />
              </View>
              <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
                Address
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#F7F7F7]">
              <View>
                <CardIcon />
              </View>
              <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
                Gift Card
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#F7F7F7]">
              <View>
                <RewardIcon />
              </View>
              <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
                Rewards
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text className="text-[16px] font-PoppinsRegular text-[#767676]  mb-[8px]">
            More
          </Text>
          <View className="flex-row justify-between">
            <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#F7F7F7]">
              <View>
                <UpdateIcon />
              </View>
              <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
                Updates
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#F7F7F7]">
              <View>
                <FaqIcon />
              </View>
              <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
                FAQs
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#F7F7F7]">
              <View>
                <GetHelpIcon />
              </View>
              <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
                Get Help
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-[94px] items-center justify-center h-[120px] rounded-[16px] bg-[#F7F7F7]">
              <View>
                <LegalIcon />
              </View>
              <Text className="text-[#767676] text-[14px] font-PoppinsRegular">
                Legal
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
