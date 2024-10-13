import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { CancelIcon, LocationIcon, SearchIcon } from "@/assets/icons/Icon";
import SearchInput from "@/components/SearchInput";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

export default function SelectLocation() {
  // Typing the location to specifically handle the coordinates object
  const [location, setLocation] =
    useState<Location.LocationObjectCoords | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [address, setAddress] = useState<string | null>(null);
  const [address1, setAddress1] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Fetch the user's current position and store only the coordinates
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      const getAddressFromCoordinates = async (
        latitude: number,
        longitude: number
      ) => {
        const API_KEY = "AIzaSyCLMsw3vqFoWPLZBe0cL6vhBKEnjOvqPyM"; // Replace with your API key
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

        try {
          const response = await fetch(url);

          const data = await response.json();

          if (data.results.length > 0) {
            setAddress(data.results[0].formatted_address);
            setAddress1(data.results[0].address_components[1].long_name);
          } else {
            setAddress("No address found");
          }
        } catch (error) {
          console.error(error);
        }
      };

      getAddressFromCoordinates(location.latitude, location.longitude);
    }
  }, [location]);

  return (
    <SafeAreaView className="h-full py-[36px] flex-1 bg-white">
      <View className="px-[23px]">
        <View className="flex-row justify-between">
          <Text className="text-[24px] font-PoppinsSemiBold text-[#0C0C0C]">
            Select your location
          </Text>
          <CancelIcon />
        </View>

        <SearchInput icon={<SearchIcon />} placeholder="Search address" />
      </View>

      <View className="w-full h-full">
        {location ? (
          <MapView
            className="w-full h-full"
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
          />
        ) : (
          <Text>{errorMsg || "Loading location..."}</Text>
        )}
      </View>

      <View className="absolute bottom-0 mb-[20px] w-full px-[23px]">
        <View className="w-full h-[213px] bg-[#FCF2D4] rounded-[24px] p-[23px]">
          <View className="flex-row items-center gap-[3px]">
            <LocationIcon />
            <Text className="text-[10px] font-PoppinsRegular">
              YOUR CURRENT LOCATION
            </Text>
          </View>
          <Text className="text-[20px] font-PoppinsMedium mt-[4px]">
            {address1 || "Unnamed Road"}
          </Text>
          <Text className="mt-[4px] text-[#767676] text-[14px] font-PoppinsRegular">
            {address || "Unamed Road, Ibadan 200131, Oyo, Nigeria"}
          </Text>
          <CustomButton
            onpress={() => router.push("/(auth)/AddressDetails")}
            title="Select this address"
            Classname="mt-[25px]"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
