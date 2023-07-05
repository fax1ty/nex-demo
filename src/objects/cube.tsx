import { Box } from "@react-three/drei";
import {
  RapierRigidBody,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";
import { forwardRef } from "react";

import { useRandomForce } from "./use-random-force";

type CubeProps = RigidBodyProps & { visible?: boolean; color?: string };

export const Cube = forwardRef<RapierRigidBody, CubeProps>(
  function CubeComponent({ visible, color, ...props }, ref) {
    return (
      <RigidBody {...props} ref={ref} colliders="cuboid" includeInvisible>
        <Box visible={visible}>
          <meshStandardMaterial color={color} />
        </Box>
      </RigidBody>
    );
  }
);

export const CubeWithRandomForce = (props: RigidBodyProps) => {
  const api = useRandomForce(-5, 5);

  return <Cube {...props} ref={api} colliders="cuboid" />;
};
