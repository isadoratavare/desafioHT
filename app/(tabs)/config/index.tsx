import React, { useEffect, useState } from "react";
import { Text, View } from "@/components/Themed";
import { Button, SafeAreaView, ScrollView } from "react-native";
import GeometrySelector from "@/components/GeometrySelector";
import ConfigController from "@/controllers/ConfigController";
import { GeometryObj, GeometryTypes } from "@/models/ConfigModel";

const Config: React.FC = () => {
  const [geometryConfig, setGeometryConfig] = useState<GeometryObj[]>([]);

  const { getConfig } = ConfigController();

  useEffect(() => {
    const data = async () =>
      await getConfig("HSpPrWJK0BeLhHs22t4oUZJjHzs2").then((value) => {
        console.log(value.data.toString());
        setGeometryConfig(value.data.geometry);
      });

    data();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Configurações de Objetos 3D</Text>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text>Objeto 1</Text>
          <GeometrySelector selected={geometryConfig[0]} onSelect={() => {}} />
        </View>

        <View>
          <Text>Objeto 2</Text>
          <GeometrySelector selected={geometryConfig[1]} onSelect={() => {}} />
        </View>
        <View>
          <Text>Objeto 3</Text>
          <GeometrySelector selected={geometryConfig[2]} onSelect={() => {}} />
        </View>
      </ScrollView>
      <Button
        title="Salvar"
        onPress={async () => {
        }}
      />
    </SafeAreaView>
  );
};

export default Config;
