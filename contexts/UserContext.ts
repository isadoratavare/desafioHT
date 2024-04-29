import { AuthContext } from "@/contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function UserContext() {
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
      if (e.message === "Firebase: Error (auth/invalid-email).") throw new Error('Your email or password was incorrect.');
      if (e.message === "Firebase: Error (auth/invalid-credential).") throw new Error('Your email or password was incorrect.')
      throw new Error(e.message);
    });
  }

  return {
    checkAlreadyLogged,
    signInUser,
  };
}
