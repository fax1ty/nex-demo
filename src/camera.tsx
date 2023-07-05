import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useControls } from "leva";

export const CameraController = () => {
  const { orbitControls } = useControls({
    orbitControls: {
      label: "Debug camera",
      value: false,
    },
  });

  return (
    <>
      <PerspectiveCamera
        name="pp-camera"
        makeDefault
        position={[-34.5, 2.3, 0.28]}
        rotation={[1.5, -1.5, 1.5]}
        fov={15}
      />
      {orbitControls && <OrbitControls makeDefault />}
    </>
  );
};
