import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="config/index"
        options={{
          title: "Configure seus objetos",
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
          href: null
        }}
        
      />
      <Tabs.Screen
        name="user/index"
        options={{
          title: "User",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}
