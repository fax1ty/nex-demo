import { Gltf, useGLTF } from "@react-three/drei";
import {
  CylinderCollider,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";

import { useRandomForce } from "../use-random-force";
import model from "./model.glb";

const HEIGHT = 0.67;

export const Crown = (props: RigidBodyProps) => {
  const api = useRandomForce(-20, 20);

  return (
    <RigidBody {...props} ref={api} colliders={false}>
      <Gltf src={model} position-y={-HEIGHT} />
      <CylinderCollider args={[HEIGHT, 1]} />
    </RigidBody>
  );
};

useGLTF.preload(model);
