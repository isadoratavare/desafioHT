import React, { useEffect, useState } from "react";
import { Text, View } from "@/components/Themed";
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import GeometrySelector from "@/components/GeometrySelector";
import { GeometryObj } from "@/models/ConfigModel";
import {
  ConfigController,
  ConfigControllerType,
} from "@/controllers/ConfigController";
import { router } from "expo-router";

const Config: React.FC = () => {
  const { config, updateConfig } = ConfigController() as ConfigControllerType;
  const [geometryConfig, setGeometryConfig] = useState<GeometryObj[]>(
    config || []
  );

  useEffect(() => {
    setGeometryConfig(config);
  }, [config]);

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
            const res = await updateConfig(geometryConfig);
            Alert.alert(res?.message, "", [
              {
                text: "OK",
                onPress: () => {
                  router.navigate("/home");
                },
              },
            ]);
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
