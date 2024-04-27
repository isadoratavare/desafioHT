import { Canvas, useFrame } from "@react-three/fiber/native";
import { Suspense, useRef } from "react";
import { ActivityIndicator } from "react-native";

interface ShapeGeometryProps {
  type: "cube" | "cone" | "dodecahedron";
  color?: string;
  rotation?: number[];
}
const ShapeGeometry: React.FC<ShapeGeometryProps> = ({
  type,
  color,
  rotation,
}) => {
  function Cube(props: any) {
    const ref = useRef<any>(null);

    useFrame((state, delta) => {
      return (ref.current.rotation.x = 0.05);
    });

    return (
      <mesh ref={ref} {...props} rotation={props.rotation || []}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={props.color || "yellow"} />
      </mesh>
    );
  }
  function Cone(props: any) {
    const meshRef = useRef<any>(null);

    useFrame((state, delta) => (meshRef.current.rotation.x = 0.05));

    return (
      <mesh rotation={[0, 0, 0]} ref={meshRef} {...props}>
        <coneGeometry attach="geometry" args={[1, 2, 20]} />
        <meshBasicMaterial
          attach="material"
          color={props.color || "yellow"}
          opacity={1}
          transparent
        />
      </mesh>
    );
  }
  function Dode(props: any) {
    const meshRef = useRef<any>(null);
    useFrame((state, delta) => (meshRef.current.rotation.x = 0.05));

    return (
      <mesh ref={meshRef} {...props}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={props.color || "yellow"} />
      </mesh>
    );
  }
  if (type === "cube") {
    return (
      <Canvas>
        <ambientLight intensity={3} />
        <Suspense fallback={<ActivityIndicator />}>
          <Cube rotation={rotation || [0, 0, 0]} color={color} />
        </Suspense>
      </Canvas>
    );
  }

  if (type === "cone") {
    return (
      <Canvas>
        <ambientLight intensity={3} />
        <Suspense fallback={<ActivityIndicator />}>
          <Cone rotation={rotation || [0, 0, 0]} color={color} />
        </Suspense>
      </Canvas>
    );
  }

  if (type === "dodecahedron") {
    return (
      <Canvas>
        <ambientLight intensity={3} />
        <Suspense fallback={<ActivityIndicator />}>
          <Dode rotation={rotation || [0, 0, 0]} color={color} />
        </Suspense>
      </Canvas>
    );
  }
  return <></>;
};

export default ShapeGeometry;
