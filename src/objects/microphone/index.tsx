import { Gltf, useGLTF } from "@react-three/drei";
import { RigidBody, RigidBodyProps } from "@react-three/rapier";

import { useRandomForce } from "../use-random-force";
import model from "./model.glb";

export const Microphone = (props: RigidBodyProps) => {
  const api = useRandomForce(-20, 20);

  return (
    <RigidBody {...props} ref={api} colliders="hull" rotation-x={-Math.PI / 2}>
      <Gltf src={model} />
    </RigidBody>
  );
};

useGLTF.preload(model);
