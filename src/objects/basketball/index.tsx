import { Gltf, useGLTF } from "@react-three/drei";
import { RigidBody, RigidBodyProps } from "@react-three/rapier";

import { useRandomSpawnPoint } from "../use-random-spawn";
import model from "./model.glb";

export default function Basketball(props: RigidBodyProps) {
  const [position, api] = useRandomSpawnPoint();

  return (
    <RigidBody
      {...props}
      ref={api}
      colliders="ball"
      restitution={1}
      position={position}
    >
      <Gltf src={model} />
    </RigidBody>
  );
}

useGLTF.preload(model);
