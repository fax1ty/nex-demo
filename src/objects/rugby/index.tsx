import { Gltf, useGLTF } from "@react-three/drei";
import { RigidBody, RigidBodyProps } from "@react-three/rapier";

import { useRandomSpawnPoint } from "../use-random-spawn";
import model from "./model.glb";

export default function Rugby(props: RigidBodyProps) {
  const [position, api] = useRandomSpawnPoint();

  return (
    <RigidBody
      {...props}
      ref={api}
      colliders="hull"
      rotation-y={Math.PI / 2}
      restitution={0.7}
      position={position}
    >
      <Gltf src={model} />
    </RigidBody>
  );
}

useGLTF.preload(model);
