import FirebaseController from "./FirebaseController";
import {
  signInWithEmailAndPassword,
  signOut as signOutAuth,
} from "firebase/auth";

import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const AuthController = () => {
  const firebaseCtrl = new FirebaseController();
  const auth = firebaseCtrl.auth;

  async function signIn(email: string, password: string) {
    try {
      return await signInWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
          await AsyncStorage.setItem("refreshToken", res.user.refreshToken);
          router.navigate("(tabs)/home");
          return { success: true };
        })
        .catch((e) => {
          return { success: false, error: e.message };
        });
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async function getToken() {
    return await AsyncStorage.getItem("refreshToken");
  }

  async function signOut() {
    await signOutAuth(auth)
      .then(async () => {
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
