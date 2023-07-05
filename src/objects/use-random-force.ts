import { RapierRigidBody } from "@react-three/rapier";
import { Ref, useEffect, useRef } from "react";
import { Vector3 } from "three";
import { randFloat } from "three/src/math/MathUtils";

export const useRandomForce = (
  min: number,
  max: number,
  api?: Ref<RapierRigidBody>
) => {
  const ref = useRef<RapierRigidBody | null>(null);

  useEffect(() => {
    const force = new Vector3(0, 0, randFloat(min, max));
    if (!api || typeof api === "function" || !api.current) {
      if (!ref.current) return;
      ref.current.addForce(force, true);
    } else api.current.addForce(force, true);
  }, []);

  return api || ref;
};
