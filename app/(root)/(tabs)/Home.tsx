import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View>
      <Link href="/Sign-in">
        <Text>Sign In</Text>
      </Link>
      <Link href="/Sign-up">
        <Text>Sign Up</Text>
      </Link>
    </View>
  );
}
