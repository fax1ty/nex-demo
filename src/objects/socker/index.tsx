import { Gltf, useGLTF } from "@react-three/drei";
import { RigidBody, RigidBodyProps } from "@react-three/rapier";

import { useRandomForce } from "../use-random-force";
import model from "./model.glb";

export const SockerBall = (props: RigidBodyProps) => {
  const api = useRandomForce(-30, 30);

  return (
    <RigidBody {...props} ref={api} colliders="ball" restitution={0.9}>
      <Gltf src={model} />
    </RigidBody>
  );
};

useGLTF.preload(model);
