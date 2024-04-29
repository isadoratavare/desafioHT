import React, { useEffect, useState } from "react";
import { GeometryObj, GeometryTypes } from "@/types";
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
  const [color, setColor] = useState(selected?.color);
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

  const ColorOption = ({
    colorName,
    colorLabel,
  }: {
    colorName: string;
    colorLabel: string;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setColor(colorName);
        }}
        style={[
          styles.colorSelect,
          {
            borderColor: iconColor,
            borderWidth: color === colorName ? 2 : 0,
            backgroundColor: colorName,
          },
        ]}
        accessibilityLabel={`"Toque para selecionar a cor ${colorLabel} para o objeto."`}
      />
    );
  };

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
            accessibilityLabel="Toque para selecionar o cubo."
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
            accessibilityLabel="Toque para selecionar o cone."
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
            accessibilityLabel="Toque para selecionar o dodecaedro."
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
          <ColorOption colorName="red" colorLabel="vermelho" />
          <ColorOption colorName="orange" colorLabel="laranja" />
          <ColorOption colorName="yellow" colorLabel="amarelo" />
          <ColorOption colorName="green" colorLabel="verde" />
          <ColorOption colorName="blue" colorLabel="azul" />
          <ColorOption colorName="pink" colorLabel="rosa" />
        </View>
      </Dropdown>
      <Dropdown icon="screen-rotation-alt" title={`Rotação: [${rotation}]`}>
        <View style={styles.rotationContainer}>
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
  rotationContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
export default GeometrySelector;
