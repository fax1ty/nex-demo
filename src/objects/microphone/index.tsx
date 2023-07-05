import { Gltf, useGLTF } from "@react-three/drei";
import {
  CapsuleCollider,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";

import { useRandomForce } from "../use-random-force";
import model from "./model.glb";

export const Microphone = (props: RigidBodyProps) => {
  const api = useRandomForce(-10, 10);

  return (
    <RigidBody {...props} ref={api} colliders={false} rotation-x={-Math.PI / 2}>
      <Gltf src={model} />
      <CapsuleCollider args={[0.75, 0.42]} />
    </RigidBody>
  );
};

useGLTF.preload(model);
