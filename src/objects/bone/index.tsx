import { Gltf, useGLTF } from "@react-three/drei";
import {
  CapsuleCollider,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";

import { useRandomSpawnPoint } from "../use-random-spawn";
import model from "./model.glb";

export default function Bone(props: RigidBodyProps) {
  const [position, api] = useRandomSpawnPoint();

  return (
    <RigidBody
      {...props}
      ref={api}
      colliders={false}
      rotation-x={-Math.PI / 2}
      position={position}
    >
      <Gltf src={model} position-y={[0.1]} />
      <CapsuleCollider args={[0.5, 0.65]} />
    </RigidBody>
  );
}

useGLTF.preload(model);
