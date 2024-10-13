import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  PermissionsAndroid,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CancelIcon, LocationIcon, SearchIcon } from "@/assets/icons/Icon";
import SearchInput from "@/components/SearchInput";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import CustomButton from "@/components/CustomButton";

export default function SelectLocation() {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location.coords);
    })();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView className="h-full py-[36px]   flex-1  bg-white  ">
      <View className="px-[23px]">
        <View className="flex-row justify-between">
          <Text className="text-[24px] font-PoppinsSemiBold text-[#0C0C0C]">
            Select your location
          </Text>

          <View>
            <CancelIcon />
          </View>
        </View>

        <SearchInput icon={<SearchIcon />} placeholder="search address" />
      </View>

      <View className="">
        <MapView
          className="w-full h-full "
          region={{
            latitude: location?.latitude || 37.78825,
            longitude: location?.longitude || -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
          {location && (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="You are here"
            />
          )}
        </MapView>
      </View>

      <View className="absolute bottom-0 mb-[20px] w-full px-[23px]">
        <View className=" w-full  h-[213px] bg-[#FCF2D4] rounded-[24px] p-[23px] ">
          <View className="flex-row items-center gap-[3px]">
            <View>
              <LocationIcon />
            </View>
            <Text className="text-[10px] font-PoppinsRegular">
              YOUR CURRENT LOCATION
            </Text>
          </View>

          <Text className="text-[20px] font-PoppinsMedium mt-[4px]">
            Unnamed Road
          </Text>

          <Text className="mt-[4px] text-[#767676] text-[14px] font-PoppinsRegular">
            Unammed Road, Ibadan 200131, Oyo, Nigeria
          </Text>
          <CustomButton title="Select this address" Classname="mt-[25px]" />
        </View>
      </View>
    </SafeAreaView>
  );
}
