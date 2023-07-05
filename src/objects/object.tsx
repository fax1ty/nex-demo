import { RigidBodyProps } from "@react-three/rapier";

import { Basketball } from "./basketball";
import { Crown } from "./crown";
import { CubeWithRandomForce } from "./cube";
import { Microphone } from "./microphone";
import { RugbyBall } from "./rugby";
import { SockerBall } from "./socker";

export type ObjectProps = {
  kind: "cube" | "rugby" | "basketball" | "socker" | "microphone" | "crown";
} & RigidBodyProps;

export const SpawnableObject = ({ kind, ...props }: ObjectProps) => {
  switch (kind) {
    case "cube":
      return <CubeWithRandomForce {...props} />;
    case "rugby":
      return <RugbyBall {...props} />;
    case "basketball":
      return <Basketball {...props} />;
    case "socker":
      return <SockerBall {...props} />;
    case "microphone":
      return <Microphone {...props} />;
    case "crown":
      return <Crown {...props} />;
    default:
      return null;
  }
};
