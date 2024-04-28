import { AuthContext } from "@/contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function UserModel() {
  const { signIn } = AuthContext();

  async function checkAlreadyLogged() {
    const token = await AsyncStorage.getItem("refreshToken");
    return !!token;
  }

  const validateEmail = (email: string) => {
    return (
      email.trim() === "" ||
      (email.trim().includes("@") && email.trim().includes("."))
    );
  };

  async function signInUser(email: string, password: string) {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.trim() === "";

    if (email.trim() === "" || isPasswordValid) {
      throw new Error("Please fill in all fields.");
    }

    if (!isEmailValid) {
      throw new Error("Invalid email address.");
    }

    await signIn(email, password).catch((e) => {
      throw new Error(e);
    });
  }

  return {
    checkAlreadyLogged,
    signInUser,
  };
}
