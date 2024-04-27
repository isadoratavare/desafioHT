import React, { useEffect, useState } from "react";
import { Text, View } from "@/components/Themed";
import { Button, SafeAreaView, ScrollView } from "react-native";
import GeometrySelector from "@/components/GeometrySelector";
import ConfigController from "@/controllers/ConfigController";
import { GeometryObj } from "@/models/ConfigModel";

const Config: React.FC = () => {
  const [geometryConfig, setGeometryConfig] = useState<GeometryObj[]>([]);

  const { getConfig } = ConfigController();

  useEffect(() => {
    const data = async () =>
      await getConfig("HSpPrWJK0BeLhHs22t4oUZJjHzs2").then((value) => {
        setGeometryConfig(value.data.geometry);
      });

    data();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              textAlign: "center",
              marginVertical: 10,
              fontWeight: "bold",
            }}
          >
            Objeto 1
          </Text>
          <GeometrySelector
            selected={geometryConfig[0]}
            onSelect={(newConfig: GeometryObj) => {
              setGeometryConfig((prevState) => {
                const newState = [...prevState];
                newState[0] = newConfig;
                return newState;
              });
            }}
          />
        </View>

        <View>
          <Text
            style={{
              textAlign: "center",
              marginVertical: 10,
              fontWeight: "bold",
            }}
          >
            Objeto 2
          </Text>
          <GeometrySelector
            selected={geometryConfig[1]}
            onSelect={(newConfig: GeometryObj) => {
              setGeometryConfig((prevState) => {
                const newState = [...prevState];
                newState[1] = newConfig;
                return newState;
              });
            }}
          />
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              marginVertical: 10,
              fontWeight: "bold",
            }}
          >
            Objeto 3
          </Text>
          <GeometrySelector
            selected={geometryConfig[2]}
            onSelect={(newConfig: GeometryObj) => {
              setGeometryConfig((prevState) => {
                const newState = [...prevState];
                newState[2] = newConfig;
                return newState;
              });
            }}
          />
        </View>
      </ScrollView>
      <Button
        title="Salvar"
        onPress={async () => {
          console.log(geometryConfig);
        }}
      />
    </SafeAreaView>
  );
};

export default Config;
