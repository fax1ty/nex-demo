import { button, useControls } from "leva";
import { useEffect, useMemo, useState } from "react";
import { randInt } from "three/src/math/MathUtils";

import { useQuery } from "./hooks/use-query";
import { ObjectKinds } from "./objects/kinds";
import { SpawnableObject } from "./objects/object";
import { ObjectProps } from "./objects/object";
import { Playground } from "./playground";

const sum = (arr: number[]) => arr.reduce((partialSum, a) => partialSum + a, 0);

const Objects = () => {
  const [objects, setObjects] = useState<ObjectProps["kind"][]>([]);

  const { items } = useQuery<{ items: string }>();
  const filtered = useMemo(
    () =>
      (items?.split(",") || []).filter((kind) =>
        ObjectKinds.includes(kind as ObjectProps["kind"])
      ) as ObjectProps["kind"][],
    [items]
  );

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    const timings: number[] = [];

    for (let i = 0; i < filtered.length; i++) {
      const timing = i ? randInt(100, 300) : 0;
      timings.push(timing);
      const timeout = setTimeout(() => {
        setObjects((v) => [...v, filtered[i]]);
      }, sum(timings));
      timeouts.push(timeout);
    }

    return () => {
      for (const timeout of timeouts) {
        clearTimeout(timeout);
      }
    };
  }, [filtered]);

  useControls({
    ...Object.fromEntries(
      ObjectKinds.map((kind) => [
        `Add ${kind}`,
        button(() => setObjects((v) => [...v, kind])),
      ])
    ),
    "Reset everything": button(() => setObjects([])),
  });

  return objects.map((type, i) => <SpawnableObject kind={type} key={i} />);
};

export const Physical = () => {
  return (
    <>
      <Objects />

      <Playground />
    </>
  );
};
