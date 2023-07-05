import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";

import { Physical } from "./physical";

export const App = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[-8, 15, 0]} />
      <OrbitControls makeDefault />
      <Environment preset="city" />

      <Suspense>
        <Physics debug>
          <Physical />
        </Physics>
      </Suspense>
    </Canvas>
  );
};
