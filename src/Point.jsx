import { Html } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useState } from "react";

export default function Point({ args }) {
  const [hover, setHover] = useState(false);

  //   const { position, scale } = useControls({
  //     position: {
  //       value: { x: 0, y: 0, z: 0 },
  //       step: 0.01,
  //     },
  //     scale: {
  //       value: 1,
  //       step: 0.001,
  //     },
  //   });
  return (
    <>
      <mesh
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={[args[0][0], args[0][1], args[0][2]]}
        // position={[position.x, position.y, position.z]}
        scale={0.05}
      >
        {hover && (
          <Html>
            <div className="content">this is {args[1]}</div>
          </Html>
        )}
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
}
