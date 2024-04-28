import { Canvas } from "@react-three/fiber/native";
import useControls from "r3f-native-orbitcontrols";
import { View } from "react-native";

const Cube = (props) => {
  return (
    <>
      <ambientLight intensity={1} />
      <mesh
        rotation={props.rotation || [0, 10, 0]}
        position={props.position || [0, 0, 0]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={props.color || "#6be092"} />
      </mesh>
    </>
  );
};

const Cone = (props: any) => {
  return (
    <>
      <ambientLight intensity={1} />
      <mesh
        rotation={props.rotation || [0, 10, 0]}
        position={props.position || [0, 0, 0]}
      >
        <coneGeometry args={[0.5, 1, 20]} />
        <meshStandardMaterial color={props.color || "#6be092"} />
      </mesh>
    </>
  );
};

const Dode = (props: any) => {
  return (
    <>
      <ambientLight intensity={1} />
      <mesh
        rotation={props.rotation || [0, 10, 0]}
        position={props.position || [0, 0, 0]}
      >
        <dodecahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial color={props.color || "#6be092"} />
      </mesh>
    </>
  );
};

const RenderShape: React.FC<{ config: any[] }> = ({ config }) => {
  const Shape = ({ config }: any) => {
    const [OrbitControls, events] = useControls();
    if (config.shape === "cone") {
      return (
        <View {...events} style={{ flex: 1 }}>
          <Canvas>
            <Cone color={config.color || "#6be092"} position={[0, 0, 0]} />
            <OrbitControls />
          </Canvas>
        </View>
      );
    }

    if (config.shape === "cube") {
      return (
        <View {...events} style={{ flex: 1 }}>
          <Canvas>
            <Cube color={config.color || "#6be092"} position={[0, 0, 0]} />
            <OrbitControls />
          </Canvas>
        </View>
      );
    }
    if (config.shape === "dodecahedron") {
      return (
        <View {...events} style={{ flex: 1 }}>
          <Canvas>
            <Dode color={config.color || "#6be092"} position={[0, 0, 0]} />
            <OrbitControls />
          </Canvas>
        </View>
      );
    }

    return <Cube color={"#6be092"} position={[0, 2, 0]} />;
  };
  return (
    <View style={{ flex: 1 }}>
      <Shape config={config[0]} />
      <Shape config={config[1]} />
      <Shape config={config[2]} />
    </View>
  );
};

export default RenderShape;
