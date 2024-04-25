import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.navigate("/config")}>
        <Text>Configurar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Home</Text>
    </SafeAreaView>
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
