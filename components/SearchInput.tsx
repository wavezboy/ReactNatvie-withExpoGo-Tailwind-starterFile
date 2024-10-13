import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  ImageSourcePropType,
  Platform,
  Keyboard,
  KeyboardType,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

interface inputProps {
  label?: string;
  labelStyle?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  value?: string;
  onChangeText?: (value: string) => void;
  secureTextEntry?: boolean;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
  keyboardType?: KeyboardType;
}

export default function SearchInput({
  labelStyle,
  label,
  icon,
  onChangeText,
  placeholder,
  value,
  secureTextEntry,
  className,
  containerStyle,
  iconStyle,
  inputStyle,
  keyboardType,
  ...props
}: inputProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          {/* <Text className={`text-[14px]  mb-3 ${labelStyle}`}>{label}</Text> */}
          <View
            className={`flex flex-row justify-start items-center px-[16px]  relative  rounded-[16px] bg-[#ECECEC]  ${containerStyle}`}
          >
            {icon && (
              <TouchableOpacity onPress={() => {}} className="">
                {icon}
              </TouchableOpacity>
            )}
            <TextInput
              className={`rounded-full p-4 font-normal font-PoppinsRegular text-black py-[10px]   text-[16px] flex-1 ${inputStyle} text-left`}
              keyboardType={keyboardType}
              {...props}
              placeholder={placeholder}
              onChangeText={onChangeText}
              placeholderTextColor={"#767676"}
            ></TextInput>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
