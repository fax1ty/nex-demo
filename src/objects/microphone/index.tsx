import { Gltf, useGLTF } from "@react-three/drei";
import {
  CapsuleCollider,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";

import { useRandomSpawnPoint } from "../use-random-spawn";
import model from "./model.glb";

export const Microphone = (props: RigidBodyProps) => {
  const [position, api] = useRandomSpawnPoint();

  return (
    <RigidBody
      {...props}
      ref={api}
      colliders={false}
      rotation-x={-Math.PI / 2}
      position={position}
    >
      <Gltf src={model} />
      <CapsuleCollider args={[0.75, 0.42]} />
    </RigidBody>
  );
};

useGLTF.preload(model);
