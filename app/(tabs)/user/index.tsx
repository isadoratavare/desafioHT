import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { AuthController } from "@/controllers/AuthController";
import Button from "@/components/Button";

export default function TabTwoScreen() {
  const colorScheme = useColorScheme();
  const { signOut } = AuthController();
  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 20,
        }}
      >
        <FontAwesome
          name="user"
          color={colorScheme === "dark" ? Colors.dark.text : Colors.light.text}
          size={100}
        />
      </View>
      <TouchableOpacity
        style={{ width: 100, marginVertical: 10 }}
        accessibilityLabel="Toque para sair da conta."
      >
        <Button title="Sign out" onPress={async () => await signOut()} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
