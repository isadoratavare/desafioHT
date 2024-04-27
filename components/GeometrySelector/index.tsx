import React, { useEffect, useState } from "react";
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

import { Text, TextInput } from "../Themed";
import RotationInput from "../RotationInput";

type GeometrySelectorProps = {
  selected: GeometryObj;
  onSelect: (newConfig: GeometryObj) => void;
};

const GeometrySelector: React.FC<GeometrySelectorProps> = ({
  selected,
  onSelect,
}) => {
  const [type, setType] = useState<GeometryTypes>(selected?.shape || "cube");
  const [color, setColor] = useState(selected?.color || "blue");
  const [rotation, setRotation] = useState(selected?.rotation || [0, 0, 0]);

  const colorScheme = useColorScheme();

  const iconColor =
    colorScheme === "dark" ? Colors.dark.text : Colors.light.text;

  function selectShape(newType: GeometryTypes) {
    setType(newType);
  }

  useEffect(() => {
    onSelect({
      shape: type,
      color: color,
      rotation: rotation,
    });
  }, [type, color, rotation]);

  return (
    <>
      <Dropdown icon={type} title={`Forma: ${type}`}>
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
      </Dropdown>
      <Dropdown icon="color-fill" title={`Cor: ${color}`}>
        <View style={styles.buttonTypeContainer}>
          <TouchableOpacity
            onPress={() => {
              setColor("red");
            }}
            style={[
              styles.colorSelect,
              {
                borderColor: iconColor,
                borderWidth: color === "red" ? 2 : 0,
                backgroundColor: "red",
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => {
              setColor("orange");
            }}
            style={[
              styles.colorSelect,
              {
                borderColor: iconColor,
                borderWidth: color === "orange" ? 2 : 0,
                backgroundColor: "orange",
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => {
              setColor("yellow");
            }}
            style={[
              styles.colorSelect,
              {
                borderColor: iconColor,
                borderWidth: color === "yellow" ? 2 : 0,
                backgroundColor: "yellow",
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => {
              setColor("green");
            }}
            style={[
              styles.colorSelect,
              {
                borderColor: iconColor,
                borderWidth: color === "green" ? 2 : 0,
                backgroundColor: "green",
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => {
              setColor("blue");
            }}
            style={[
              styles.colorSelect,
              {
                borderColor: iconColor,
                borderWidth: color === "blue" ? 2 : 0,
                backgroundColor: "blue",
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => {
              setColor("pink");
            }}
            style={[
              styles.colorSelect,
              {
                borderColor: iconColor,
                borderWidth: color === "pink" ? 2 : 0,
                backgroundColor: "pink",
              },
            ]}
          />
        </View>
      </Dropdown>
      <Dropdown icon="screen-rotation-alt" title={`Rotação: [${rotation}]`}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          <Text>X: </Text>
          <RotationInput
            initialValue={rotation[0].toString()}
            onChange={(newValue) => {
              setRotation((prevState) => {
                const newState = [...prevState];
                newState[0] = newValue;
                return newState;
              });
            }}
          />
          <Text>Y: </Text>
          <RotationInput
            initialValue={rotation[1].toString()}
            onChange={(newValue) => {
              setRotation((prevState) => {
                const newState = [...prevState];
                newState[1] = newValue;
                return newState;
              });
            }}
          />
          <Text>Z: </Text>
          <RotationInput
            initialValue={rotation[2].toString()}
            onChange={(newValue) => {
              setRotation((prevState) => {
                const newState = [...prevState];
                newState[2] = newValue;
                return newState;
              });
            }}
          />
        </View>
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
  colorSelect: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});
export default GeometrySelector;
