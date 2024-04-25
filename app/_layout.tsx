import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { useColorScheme } from "@/components/useColorScheme";

import FirestoreController from "@/controllers/FirebaseController";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "modal",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const firebaseCtrl = new FirestoreController();

  useEffect(() => {
    // const q = query(collection(firebaseCtrl.db, "user"));
    // const querySnapshot = getDocs(q).then((r) => {
    //   r.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data());
    //   });
    // });
  }, []);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="login/index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="config/index"
            options={{
              headerBackVisible: true,
              headerBackTitleVisible: false,
              title: "Configurações",
            }}
          />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    </ThemeProvider>
  );
}
