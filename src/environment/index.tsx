import { Environment } from "@react-three/drei";

import map from "./map.hdr";

export const EnvironmentMap = () => {
  return <Environment files={map} />;
};
