import { RapierRigidBody } from "@react-three/rapier";
import { Ref, useEffect, useMemo, useRef } from "react";
import { Vector3 } from "three";
import { randFloat } from "three/src/math/MathUtils";

export const useRandomSpawnPoint = (api?: Ref<RapierRigidBody>) => {
  const ref = useRef<RapierRigidBody | null>(null);
  const position = useMemo(() => new Vector3(0, 12, randFloat(-5, 5)), []);

  useEffect(() => {
    if (!api || typeof api === "function" || !api.current) {
      if (!ref.current) return;
      ref.current.setTranslation(position, true);
    } else api.current.setTranslation(position, true);
  }, [position]);

  return [position, api || ref] as const;
};
