import React from "react";
import { ActivityIndicator } from "react-native";
import {
  ConfigController,
  ConfigControllerType,
} from "@/controllers/ConfigController";
import ShapeGeometry from "@/components/ShapeGeometry";

export default function TabOneScreen() {
  const { config } = ConfigController() as ConfigControllerType;

  if (config && config?.length === 0) {
    return <ActivityIndicator />;
  }
  console.log(config);
  if (config && config.length > 0) {
    return (
      <>
        <ShapeGeometry
          type={config[0]?.shape}
          color={config[0]?.color}
          rotation={config[0]?.rotation}
        />

        <ShapeGeometry
          type={config[1]?.shape}
          color={config[1]?.color}
          rotation={config[1]?.rotation}
        />

        <ShapeGeometry
          type={config[2]?.shape}
          color={config[2]?.color}
          rotation={config[2]?.rotation}
        />
      </>
    );
  }
}
