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
  if (kind === "cube") return <CubeWithRandomForce {...props} />;
  if (kind === "rugby") return <RugbyBall {...props} />;
  if (kind === "basketball") return <Basketball {...props} />;
  if (kind === "socker") return <SockerBall {...props} />;
  if (kind === "microphone") return <Microphone {...props} />;
  if (kind === "crown") return <Crown {...props} />;

  return null;
};
