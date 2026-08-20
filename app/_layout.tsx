import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaView >
        <Text>First Application</Text>
    </SafeAreaView>
  );
}
