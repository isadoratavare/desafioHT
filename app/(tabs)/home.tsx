import { ActivityIndicator, StyleSheet } from "react-native";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { Suspense, useRef } from "react";
import { Text, View } from "@/components/Themed";
import useControls from "r3f-native-orbitcontrols";
import { PerspectiveCamera } from "@react-three/drei";

export default function TabOneScreen() {
  function Cube(props: any) {
    const meshRef = useRef<any>(null);

    useFrame((state, delta) => (meshRef.current.rotation.x += delta));

    return (
      <mesh ref={meshRef} {...props}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    );
  }

  return (
    <>
      <Canvas>
        <ambientLight />
        <Suspense fallback={<ActivityIndicator />}>
          <Cube />
        </Suspense>
      </Canvas>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
