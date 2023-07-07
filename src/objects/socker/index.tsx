import { Gltf, useGLTF } from "@react-three/drei";
import { RigidBody, RigidBodyProps } from "@react-three/rapier";

import { useRandomSpawnPoint } from "../use-random-spawn";
import model from "./model.glb";

export const SockerBall = (props: RigidBodyProps) => {
  const [position, api] = useRandomSpawnPoint();

  return (
    <RigidBody
      {...props}
      ref={api}
      colliders="ball"
      restitution={0.9}
      position={position}
    >
      <Gltf src={model} />
    </RigidBody>
  );
};

useGLTF.preload(model);
