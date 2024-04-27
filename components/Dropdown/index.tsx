import React, { ReactNode, useState } from "react";
import {
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { Text } from "../Themed";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Icon from "../IconShape";

type DropdownProps = {
  icon: string;
  title: string;
  children: ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({ icon, title, children }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const height = useSharedValue(0);
  const colorScheme = useColorScheme();

  const handlePress = () => {
    if (showDropdown) {
      setShowDropdown(false);
      height.value = withSpring(0);
      return;
    }
    setShowDropdown(true);
    height.value = withSpring(100);
  };

  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon icon={icon} />

            <View style={{ marginHorizontal: 5 }}>
              <Text>{title}</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity onPress={handlePress}>
              <AntDesign
                name="edit"
                size={20}
                color={
                  colorScheme === "dark" ? Colors.dark.text : Colors.light.text
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      {showDropdown && (
        <>
          <Animated.View
            style={{
              width: "100%",
              height,
              backgroundColor:
                colorScheme === "dark"
                  ? Colors.dark.dropdown
                  : Colors.light.dropdown,
              borderBottomStartRadius: 15,
              borderBottomEndRadius: 15,
            }}
          >
            {children}
          </Animated.View>
        </>
      )}
    </>
  );
};

export default Dropdown;
