import { RigidBodyProps } from "@react-three/rapier";

import { Basketball } from "./basketball";
import { ChickenBone } from "./bone";
import { Clock } from "./clock";
import { Crown } from "./crown";
import { CubeWithRandomForce } from "./cube";
import { Microphone } from "./microphone";
import { RugbyBall } from "./rugby";
import { SockerBall } from "./socker";

export const ObjectKinds = [
  "cube",
  "rugby",
  "basketball",
  "socker",
  "microphone",
  "crown",
  "bone",
  "clock",
] as const;

export type ObjectProps = {
  kind: (typeof ObjectKinds)[number];
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
    case "bone":
      return <ChickenBone {...props} />;
    case "clock":
      return <Clock {...props} />;
    default:
      return null;
  }
};
