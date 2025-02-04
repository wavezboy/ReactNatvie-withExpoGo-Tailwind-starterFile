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
  placeholderTextColor?: string;
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
  icon2?: React.ReactNode;
}

export default function InputField({
  placeholderTextColor = "#767676",
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
  icon2,
  ...props
}: inputProps) {
  const [secureText, setSecureText] = useState(secureTextEntry);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          {/* <Text className={`text-[14px]  mb-3 ${labelStyle}`}>{label}</Text> */}
          <View
            className={`flex flex-row justify-start items-center  relative bg-transparent rounded-[16px] border border-[#767676]  ${containerStyle}`}
          >
            {icon2 && (
              <TouchableOpacity
                onPress={() => setSecureText((prev) => !prev)}
                className="mr-[0px] ml-[10px]"
              >
                {icon2}
              </TouchableOpacity>
            )}
            <TextInput
              className={`rounded-full p-4 font-normal  font-PoppinsRegular text-white py-[10px]   text-[16px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureText}
              keyboardType={keyboardType}
              {...props}
              placeholder={placeholder}
              onChangeText={onChangeText}
              placeholderTextColor={placeholderTextColor}
            ></TextInput>
            {icon && (
              <TouchableOpacity
                onPress={() => setSecureText((prev) => !prev)}
                className="mr-[17px]"
              >
                {icon}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
