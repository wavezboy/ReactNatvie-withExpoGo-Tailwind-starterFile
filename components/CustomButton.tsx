import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { ButtonProps } from "@/types/type";

interface btnProps {
  onpress?: (() => Promise<void>) | (() => void);
  title?: string;
  bgVariant?: ButtonProps["bgVariant"];
  textVariant?: ButtonProps["textVariant"];
  IconLeft?: React.ReactNode;
  IconRight?: React.ReactNode;
  Classname?: string;
  isLoading?: boolean;
  isEmpty?: boolean;
  textStyles?: string;
}

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-primary-Bold rounded-[8px]   border-[0.94px]";

    default:
      return "bg-[#29C302]";
  }
};
const getTextVariant = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-primary-Bold";
    case "secondary":
      return "text-[#606060]";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";

    default:
      return "text-white";
  }
};

export default function CustomButton({
  onpress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  Classname,
  isEmpty,
  isLoading,
  textStyles,
  ...props
}: btnProps) {
  return (
    <TouchableOpacity
      onPress={onpress}
      className={`w-full rounded-[16px] p-3 h-[54px] flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${Classname} ${isLoading || isEmpty ? "opacity-50" : ""} `}
      {...props}
      disabled={isLoading || isEmpty}
    >
      {isLoading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <>
          {IconLeft && IconLeft}
          <Text
            className={`text-[16px] font-PoppinsMedium ${textStyles}  ${getTextVariant(textVariant)}`}
          >
            {title}
          </Text>

          {IconRight && IconRight}
        </>
      )}
    </TouchableOpacity>
  );
}
