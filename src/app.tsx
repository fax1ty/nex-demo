import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { useControls } from "leva";
import { Suspense } from "react";

import { CameraController } from "./camera";
import { Postprocessing } from "./effects";
import { EnvironmentMap } from "./environment";
import { FPSController } from "./fps";
import { Physical } from "./physical";

const CANVAS_CONFIG = {
  linear: true,
  shadows: true,
  debug: {
    checkShaderErrors: import.meta.env.DEV,
    onShaderError: console.error,
  },
  gl: {
    depth: true,
    stencil: false,
    antialias: false,
    logarithmicDepthBuffer: false,
  },
};

export const App = () => {
  const { debug } = useControls({
    debug: { value: false, label: "Render colliders" },
  });

  return (
    <Canvas {...CANVAS_CONFIG} dpr={window.devicePixelRatio}>
      <CameraController />
      <EnvironmentMap />

      <Postprocessing />

      <FPSController />

      <Suspense>
        <Physics debug={debug}>
          <Physical />
        </Physics>
      </Suspense>
    </Canvas>
  );
};
