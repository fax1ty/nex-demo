import { Gltf, useGLTF } from "@react-three/drei";
import {
  CapsuleCollider,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";

import { useRandomSpawnPoint } from "../use-random-spawn";
import model from "./model.glb";

export const ChickenBone = (props: RigidBodyProps) => {
  const api = useRandomSpawnPoint();

  return (
    <RigidBody {...props} ref={api} colliders={false} rotation-x={-Math.PI / 2}>
      <Gltf src={model} position-y={[0.1]} />
      <CapsuleCollider args={[0.5, 0.65]} />
    </RigidBody>
  );
};

useGLTF.preload(model);
