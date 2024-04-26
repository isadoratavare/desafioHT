import { ActivityIndicator, StyleSheet } from "react-native";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { Suspense, useRef } from "react";

export default function TabOneScreen() {
  function Cube(props: any) {
    const ref = useRef<any>(null);

    useFrame((state, delta) => (ref.current.rotation.x += delta));

    return (
      <mesh ref={ref} {...props}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"yellow"} />
      </mesh>
    );
  }

  function Cone(props: any) {
    const meshRef = useRef<any>(null);

    useFrame((state, delta) => (meshRef.current.rotation.x += delta));

    return (
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} ref={meshRef} {...props}>
        <coneGeometry attach="geometry" args={[1, 2, 20]} />
        <meshBasicMaterial
          attach="material"
          color={"red"}
          opacity={1}
          transparent
        />
      </mesh>
    );
  }

  function Dode(props: any) {
    const meshRef = useRef<any>(null);
    useFrame((state, delta) => (meshRef.current.rotation.x += delta));

    return (
      <mesh ref={meshRef} position={[0, 0, 0]} {...props}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={"green"} />
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
      <Canvas
        camera={{
          position: [5, 5, 5],
        }}
      >
        <ambientLight />
        <Cone />
      </Canvas>
      <Canvas
        camera={{
          position: [5, 5, 5],
        }}
      >
        <ambientLight />
        <Suspense fallback={<ActivityIndicator />}>
          <Dode />
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
