import React, { useState } from "react";
import { Text, View } from "@/components/Themed";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import GeometrySelector from "@/components/GeometrySelector";
import { GeometryObj } from "@/models/ConfigModel";
import Button from "@/components/Button";

const Config: React.FC<{ config: any[]; updateConfig: any }> = ({
  config,
  updateConfig,
}) => {
  const [geometryConfig, setGeometryConfig] = useState<GeometryObj[]>(
    config || []
  );

  if (config?.length > 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.title}>Objeto 1</Text>
            <GeometrySelector
              selected={geometryConfig[0]}
              onSelect={(newConfig: GeometryObj) => {
                setGeometryConfig((prevState: GeometryObj[]) => {
                  const newState = [...prevState];
                  newState[0] = newConfig;
                  return newState;
                });
              }}
            />
          </View>

          <View>
            <Text style={styles.title}>Objeto 2</Text>
            <GeometrySelector
              selected={geometryConfig[1]}
              onSelect={(newConfig: GeometryObj) => {
                setGeometryConfig((prevState: GeometryObj[]) => {
                  const newState = [...prevState];
                  newState[1] = newConfig;
                  return newState;
                });
              }}
            />
          </View>
          <View>
            <Text style={styles.title}>Objeto 3</Text>
            <GeometrySelector
              selected={geometryConfig[2]}
              onSelect={(newConfig: GeometryObj) => {
                setGeometryConfig((prevState: GeometryObj[]) => {
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
            await updateConfig(geometryConfig);
          }}
        />
      </SafeAreaView>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  container: { flex: 1 },
});

export default Config;
