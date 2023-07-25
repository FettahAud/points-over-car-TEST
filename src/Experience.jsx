import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Point from "./Point";

export default function Experience() {
  const car = useRef();
  const gltf = useLoader(GLTFLoader, "../src/car.glb");
  useFrame((state, delta) => {
    // car.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    // console.log(Math.cos(delta * 0.01));
    console.log();
  });
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <primitive ref={car} object={gltf.scene} />

      <Point args={[[0.39, 0, -0.34], "name of point 1"]} />
      <Point args={[[-0.4, -0.229, 0.39], "name of point 2"]} />
      <Point args={[[-0.019, 0.15, 0.07], "name of point 3"]} />
    </>
  );
}
