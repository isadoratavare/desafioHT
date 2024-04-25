import React from "react";
import { View, Text } from "../Themed";
import { TouchableOpacity } from "react-native";
import { GeometryTypes } from "@/models/ConfigModel";

type SelectTypeModalProps = {
  onSelect: (type: GeometryTypes) => void;
};

const SelectTypeModal: React.FC<SelectTypeModalProps> = ({ onSelect }) => {
  return (
    <View>
      <Text>Selecione o tipo de geometria</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => onSelect("cube")}>
          <Text>Cubo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ paddingHorizontal: 5 }}
          onPress={() => onSelect("cone")}
        >
          <Text>Cone</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onSelect("dodecahedron")}>
          <Text>Dodecaedro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectTypeModal;
