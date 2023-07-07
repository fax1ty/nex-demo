import { Gltf, useGLTF } from "@react-three/drei";
import {
  CylinderCollider,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";

import { useRandomSpawnPoint } from "../use-random-spawn";
import model from "./model.glb";

const HEIGHT = 0.67;

export const Crown = (props: RigidBodyProps) => {
  const [position, api] = useRandomSpawnPoint();

  return (
    <RigidBody {...props} ref={api} colliders={false} position={position}>
      <Gltf src={model} position-y={-HEIGHT} />
      <CylinderCollider args={[HEIGHT, 1]} />
    </RigidBody>
  );
};

useGLTF.preload(model);
