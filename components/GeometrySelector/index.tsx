import React, { useState } from "react";
import { GeometryObj, GeometryTypes } from "@/models/ConfigModel";
import Dropdown from "../Dropdown";

import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import Dodecahedron from "@/assets/icons/dodecahedron";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import Colors from "@/constants/Colors";
import { Text } from "../Themed";

type GeometrySelectorProps = {
  selected: GeometryObj;
  onSelect: (type: GeometryTypes) => void;
};

const GeometrySelector: React.FC<GeometrySelectorProps> = ({
  selected,
  onSelect,
}) => {
  const [type, setType] = useState<GeometryTypes>(selected?.shape || "cube");

  const colorScheme = useColorScheme();

  const iconColor =
    colorScheme === "dark" ? Colors.dark.text : Colors.light.text;

  function selectShape(newType: GeometryTypes) {
    setType(newType);
  }

  return (
    <>
      <Dropdown icon={type} title={`Forma: ${type}`}>
        <View>
          <View style={styles.buttonTypeContainer}>
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  borderColor: iconColor,
                  borderWidth: type === "cube" ? 3 : 1,
                },
              ]}
              onPress={() => selectShape("cube")}
            >
              <FontAwesome name="cube" size={24} color={iconColor} />
              <Text style={{ marginVertical: 5 }}>Cubo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  borderColor: iconColor,
                  borderWidth: type === "cone" ? 3 : 1,
                },
              ]}
              onPress={() => selectShape("cone")}
            >
              <MaterialCommunityIcons name="cone" size={24} color={iconColor} />
              <Text style={{ marginVertical: 5 }}>Cone</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.iconContainer,
                {
                  borderColor: iconColor,
                  borderWidth: type === "dodecahedron" ? 3 : 1,
                },
              ]}
              onPress={() => selectShape("dodecahedron")}
            >
              <Dodecahedron fill={iconColor} height={24} width={24} />
              <Text style={{ marginVertical: 5, textAlign: "center" }}>
                Dodecaedro
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dropdown>
      <Dropdown icon="color-fill" title={`Cor: ${selected?.color}`}>
        <></>
      </Dropdown>
      <Dropdown
        icon="screen-rotation-alt"
        title={`Rotação: [${selected?.rotation}]`}
      >
        <></>
      </Dropdown>
    </>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    height: 70,
    width: 90,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal: 5,
  },
  buttonTypeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
});
export default GeometrySelector;
