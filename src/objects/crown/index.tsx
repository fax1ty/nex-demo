import { Gltf, useGLTF } from "@react-three/drei";
import { RigidBody, RigidBodyProps } from "@react-three/rapier";

import { useRandomForce } from "../use-random-force";
import model from "./model.glb";

export const Crown = (props: RigidBodyProps) => {
  const api = useRandomForce(-40, 40);

  return (
    <RigidBody {...props} ref={api} colliders="hull">
      <Gltf src={model} />
    </RigidBody>
  );
};

useGLTF.preload(model);
