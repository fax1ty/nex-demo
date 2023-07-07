import { RigidBodyProps } from "@react-three/rapier";
import { createElement, FC, memo } from "react";

import { ObjectKinds } from "./kinds";

export type ObjectProps = {
  kind: (typeof ObjectKinds)[number];
} & RigidBodyProps;

const objects: Record<
  `./${ObjectProps["kind"]}/index.tsx`,
  { default: FC<RigidBodyProps> }
> = import.meta.glob("./*/index.tsx", { eager: true });

export const SpawnableObject = memo(function MemoizedSpawnableObject({
  kind,
  ...props
}: ObjectProps) {
  return createElement(objects[`./${kind}/index.tsx`].default, props);
});
