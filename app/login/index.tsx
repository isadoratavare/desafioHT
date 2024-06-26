import React, { useEffect, useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";

import { router } from "expo-router";

import { Text, TextInput, View } from "@/components/Themed";
import Button from "@/components/Button";

import { UserContext } from "@/contexts/UserContext";

const LoginView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const colorScheme = useColorScheme();
  const { checkAlreadyLogged, signInUser } = UserContext();

  useEffect(() => {
    checkAlreadyLogged().then((logged) => {
      if (logged) {
        router.navigate("(tabs)/home")
      };
    });
  }, []);


  return (
    <View style={styles.container}>
      <View>
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
            {
              color: colorScheme === "dark" ? "white" : "black",
              backgroundColor: colorScheme === "dark" ? "#171A1F" : "#DEE1E6",
            },
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
            {
              color: colorScheme === "dark" ? "white" : "black",
              backgroundColor: colorScheme === "dark" ? "#171A1F" : "#DEE1E6",
            },
          ]}
        />
      </View>
      <Button
        title="Login"
        onPress={async () => {
          await signInUser(email, password).then(() => {
            setError("");
            if (router) {
              router.navigate("home");
            }
          }).catch(e => {
            console.log(e);
            setError(e.message)
          });


        }}
      />

      {error !== "" ? <Text style={{ color: "red" }} testID="error">{error}</Text> : <View testID="error" />}
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
    borderRadius: 15,
    paddingVertical: 15,
  },
});

export default LoginView;
