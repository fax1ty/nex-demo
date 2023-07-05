import { Box } from "@react-three/drei";
import { RigidBody, RigidBodyProps } from "@react-three/rapier";
import { button, useControls } from "leva";
import { useState } from "react";

const Cube = ({
  color,
  visible = true,
  ...props
}: RigidBodyProps & { color?: string; visible?: boolean }) => (
  <RigidBody {...props} colliders="cuboid" includeInvisible>
    <Box visible={visible}>
      <meshStandardMaterial color={color} />
    </Box>
  </RigidBody>
);

const DEPTH = 15;

export const Physical = () => {
  const [cubesCount, setCubesCount] = useState(0);

  useControls({
    "Add cube": button(() => setCubesCount((v) => v + 1)),
  });

  return (
    <>
      {new Array(cubesCount).fill(0).map((_, i) => (
        <Cube key={i} position-y={10} />
      ))}

      <Cube type="fixed" scale={[DEPTH, 0.5, DEPTH]} color="red" />

      <Cube
        visible={false}
        type="fixed"
        scale={[0.5, 15, 15]}
        position-x={((DEPTH + 0.5) / 2) * -1}
        position-y={15 / 2}
        color="red"
      />
      <Cube
        visible={false}
        type="fixed"
        scale={[0.5, 15, 15]}
        position-x={((DEPTH + 0.5) / 2) * 1}
        position-y={15 / 2}
        color="red"
      />
      <Cube
        visible={false}
        type="fixed"
        scale={[15, 15, 0.5]}
        position-z={((DEPTH + 0.5) / 2) * -1}
        position-y={15 / 2}
        color="red"
      />
      <Cube
        visible={false}
        type="fixed"
        scale={[DEPTH, 15, 0.5]}
        position-z={((DEPTH + 0.5) / 2) * 1}
        position-y={15 / 2}
        color="red"
      />
    </>
  );
};
