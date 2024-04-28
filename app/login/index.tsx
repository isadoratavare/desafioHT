import React, { useEffect, useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";

import { router } from "expo-router";

import { Text, TextInput, View } from "@/components/Themed";
import Button from "@/components/Button";

import { UserModel } from "@/models/UserModel";

const LoginView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const colorScheme = useColorScheme();
  const { checkAlreadyLogged, signInUser } = UserModel();

  useEffect(() => {
    checkAlreadyLogged().then((logged) => {
      if (logged) router.navigate("(tabs)/home");
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.h3}>Welcome Back!</Text>
        <Text
          style={[
            styles.subtitle,
            { color: colorScheme === "dark" ? "#47494E" : "black" },
          ]}
        >
          Please sign in to your account.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={"none"}
          style={[
            styles.textInput,
            { color: colorScheme === "dark" ? "white" : "black" },
          ]}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize={"none"}
          style={[
            styles.textInput,
            { color: colorScheme === "dark" ? "white" : "black" },
          ]}
        />
      </View>
      <Button
        title="Login"
        onPress={async () =>
          await signInUser(email, password)
            .then((res) => {
              setError("");
              router.navigate("home")
            })
            .catch((e) => {
              setError(e.message);
            })
        }
      />
      {error !== "" ? <Text style={{ color: "red" }}>{error}</Text> : <></>}
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  h3: {
    fontSize: 30,
    fontWeight: "400",
    marginVertical: 10,
    textAlign: "center",
    fontFamily: "Lato-Bold",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  textInput: {
    width: "100%",
    marginVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#171A1F",
    borderRadius: 15,
    paddingVertical: 15,
  },
});

export default LoginView;
