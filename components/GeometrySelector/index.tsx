import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";

import { GeometryTypes } from "@/models/ConfigModel";
import SelectTypeModal from "../SelectTypeModal";

const GeometrySelector: React.FC = () => {
  const [type, setType] = useState<GeometryTypes>("cube");
  const [selectTypeModalOpen, setSelectTypeModalOpen] = useState(false);
  return (
    <View
      style={{ margin: 5, padding: 5, borderColor: "pink", borderWidth: 1 }}
    >
      <View>
        <Text>{type}</Text>
      </View>

      <TouchableOpacity
        onPress={() => setSelectTypeModalOpen((prevState) => !prevState)}
      >
        <Text>Selecione</Text>
      </TouchableOpacity>
      {selectTypeModalOpen && (
        <SelectTypeModal onSelect={(type: GeometryTypes) => setType(type)} />
      )}
    </View>
  );
};

export default GeometrySelector;
