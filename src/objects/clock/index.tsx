import { Gltf, useGLTF } from "@react-three/drei";
import {
  CylinderCollider,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";

import { useRandomSpawnPoint } from "../use-random-spawn";
import model from "./model.glb";

export default function Clock(props: RigidBodyProps) {
  const [position, api] = useRandomSpawnPoint();

  return (
    <RigidBody
      {...props}
      ref={api}
      colliders={false}
      rotation={[Math.PI / 2, 0, Math.PI / 2]}
      position={position}
    >
      <Gltf src={model} rotation-x={-Math.PI / 2} position-y={0.25} />
      <CylinderCollider args={[0.28, 1]} />
    </RigidBody>
  );
}

useGLTF.preload(model);
