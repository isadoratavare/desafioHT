import Firebase from "./Firebase";
import {
  signInWithEmailAndPassword,
  signOut as signOutAuth,
} from "firebase/auth";

import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const AuthContext = () => {
  const firebaseCtrl = new Firebase();
  const auth = firebaseCtrl.auth;

  async function signIn(email: string, password: string) {
    try {
      return await signInWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          console.log(res)
          if (res) {
            await AsyncStorage.setItem("userId", res.user.uid);
            await AsyncStorage.setItem("refreshToken", res.user.refreshToken);
            router.navigate("(tabs)/home");
          } else {
            throw new Error("Login is invalid");
          }
        })
        .catch((e) => {
          
          throw new Error(e.message);
        });
    } catch (error: any) {
      console.log(error)
      if (error.toString() === "[Error: Firebase: Error (auth/invalid-credential).]") {
        throw new Error('Your email or password was incorrect.');
      }
      throw new Error(error.message);
    }
  }

  async function getToken() {
    return await AsyncStorage.getItem("refreshToken");
  }

  async function signOut() {
    await signOutAuth(auth)
      .then(async () => {
        await AsyncStorage.removeItem("userId");
        await AsyncStorage.removeItem("refreshToken");
        router.navigate("/login");
      })
      .catch((error) => {
        Alert.alert("Erro ao sair da conta.");
      });
  }

  return {
    signIn,
    getToken,
    signOut,
  };
};
