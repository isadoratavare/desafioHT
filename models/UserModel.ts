import AsyncStorage from "@react-native-async-storage/async-storage";

export function UserModel() {
  async function checkAlreadyLogged() {
    const token = await AsyncStorage.getItem("refreshToken");
    return !!token;
  }

  return {
    checkAlreadyLogged
  };
}
