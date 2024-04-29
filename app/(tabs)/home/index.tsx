import React, { useEffect, useState } from "react";

import Config from "../config";

import RenderShape from "@/components/RenderShape";
import Button from "@/components/Button";
import { View } from "@/components/Themed";

import { GeometryObj } from "@/types";
import { ConfigContext } from "@/contexts/ConfigContext";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabOneScreen() {
  const [config, setConfig] = useState([
    {
      color: "red",
      shape: "cone",
      rotation: [0, 0, 1],
    },
    {
      color: "yellow",
      shape: "cube",
      rotation: [0, 0, 1],
    },
    {
      color: "green",
      shape: "dodecahedron",
      rotation: [0, 0, 1],
    },
  ]);
  const [configId, setConfigId] = useState("")
  const [isEditModeOpen, setIsEditModeOpen] = useState(false);
  const { updateConfig, getConfig } = ConfigContext();

  useEffect(() => {
    const data = async () => {
      const userId = await AsyncStorage.getItem("userId");

      await getConfig(userId).then((value) => {
        console.log("DATA: ", value.data)
        setConfigId(value.data.id);
        setConfig(value.data.geometry);
      });
    };

    data();
  }, []);

  if (isEditModeOpen) {
    return (
      <Config
        config={config}
        updateConfig={async (newConfig: GeometryObj[]) => {
          setIsEditModeOpen(false)
          setConfig(newConfig)

          if (config.length > 0) {
            await updateConfig(newConfig, configId);
          }
        }}
      />
    );
  }

  return (
    <>
      <RenderShape config={config} />
      <View style={{ width: "100%", paddingHorizontal: 80, paddingVertical: 10 }}>
        <Button title="Editar" onPress={() => setIsEditModeOpen(true)} />
      </View>
    </>
  );
}
