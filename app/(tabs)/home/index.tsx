import React, { Suspense, useEffect, useState } from "react";
import { ActivityIndicator, Button } from "react-native";
import { Canvas } from "@react-three/fiber/native";
import { View } from "@/components/Themed";
import useControls from "r3f-native-orbitcontrols";
import { ConfigController } from "@/controllers/ConfigController";
import RenderShape from "@/components/RenderShape";
import Config from "../config";

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
        updateConfig={(newConfig) => {
          console.log(newConfig)
          setIsEditModeOpen(false)
          setConfig(newConfig)
        }}
      />
    );
  }

  return (
    <>
      <RenderShape config={config} />
      <Button title="Editar" onPress={() => setIsEditModeOpen(true)} />
    </>
  );
}
