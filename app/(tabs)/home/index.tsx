import React, { useState } from "react";
import RenderShape from "@/components/RenderShape";
import Config from "../config";
import Button from "@/components/Button";
import { View } from "@/components/Themed";
import { GeometryObj } from "@/models/ConfigModel";

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
  const [isEditModeOpen, setIsEditModeOpen] = useState(false);

  if (isEditModeOpen) {
    return (
      <Config
        config={config}
        updateConfig={(newConfig: GeometryObj[]) => {
          setIsEditModeOpen(false)
          setConfig(newConfig)
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
