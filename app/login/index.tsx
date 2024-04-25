import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "@/components/Themed";
import { Button, StyleSheet } from "react-native";
import { AuthController } from "@/controllers/AuthController";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const LoginView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = AuthController();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("refreshToken");
      if (token) {
        router.navigate("(tabs)/home");
      }
    };

    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>Login</Text>
      </View>
      <TextInput
        placeholder="Nome de Usuário"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Entrar"
        onPress={async () => await signIn(email, password)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginView;
