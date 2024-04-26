import {
  Button,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Text, View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { AuthController } from "@/controllers/AuthController";

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
      <Text style={styles.title}>Deseja sair da sua conta?</Text>
      <TouchableOpacity
        style={{ backgroundColor: "pink", width: 100, marginVertical: 10 }}
      >
        <Button title="Sair" onPress={async () => await signOut()} />
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
