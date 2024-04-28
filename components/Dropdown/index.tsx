import React, { ReactNode, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { Text } from "../Themed";
import { AntDesign } from "@expo/vector-icons";
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
      <TouchableOpacity
        onPress={handlePress}
        testID="dropdown-button"
        accessibilityLabel="Toque para abrir o modal de configuração abaixo."
      >
        <View style={styles.header}>
          <View style={styles.titleContainer}>
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
        <View testID="dropdown-content">
          <Animated.View
            style={[
              {
                height,
                backgroundColor:
                  colorScheme === "dark"
                    ? Colors.dark.dropdown
                    : Colors.light.dropdown,
              },
              styles.animated,
            ]}
          >
            {children}
          </Animated.View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleContainer: { flexDirection: "row", alignItems: "center" },
  animated: {
    width: "100%",
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
});

export default Dropdown;
