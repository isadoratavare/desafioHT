import React from "react";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native";
import GeometrySelector from "@/components/GeometrySelector";

const Config: React.FC = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Configurações de Objetos 3D</Text>

      <View>
        <Text>Objeto 1</Text>
        <GeometrySelector />
      </View>

      <View>
        <Text>Objeto 2</Text>
        <GeometrySelector />
      </View>
      <View>
        <Text>Objeto 3</Text>
        <GeometrySelector />
      </View>
    </SafeAreaView>
  );
};

export default Config;
