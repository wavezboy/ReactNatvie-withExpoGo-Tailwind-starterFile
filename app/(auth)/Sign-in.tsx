import {
  ArrowIcon,
  MessageEmoji,
  PasswordIcon,
  WhatsappEmoji,
} from "@/assets/icons/Icon";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { Link, router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

export default function SignIn() {
  return (
    <SafeAreaView className="h-full py-[36px] justify-between   px-[23px] flex-1  bg-[#111112]  ">
      <View>
        <View className="flex-row items-center ">
          <TouchableOpacity onPress={() => router.push("/(auth)/Welcome")}>
            <ArrowIcon />
          </TouchableOpacity>
        </View>

        <Text className="text-white text-[24px] font-PoppinsSemiBold mt-[24px]">
          Welcome Back
        </Text>
        {/* hand icon */}

        <Text className="text-white text-[14px] font-PoppinsRegular mt-[14px] mb-[27px]">
          Let’s get you logged in and back to ordering from your favorites
          stores.
        </Text>

        <InputField
          containerStyle="  bg-[#1D1D1D] "
          placeholder="Enter your password"
          icon={<PasswordIcon />}
        />
        <View className="flex-row justify-end mr-2">
          <Text className="text-[#898989] text-[14px] font-PoppinsRegular">
            5/5
          </Text>
        </View>
      </View>

      <View>
        <CustomButton
          title="Log in"
          Classname=""
          onpress={() => router.push("/(auth)/Welcome3")}
        />

        <Link
          href={"/(auth)/(forget-password)/Verify-phoneNumber"}
          className="text-white text-[16px] font-PoppinsMedium mt-[26px] text-center"
        >
          Forget password ?
        </Link>
      </View>
    </SafeAreaView>
  );
}
