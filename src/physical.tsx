import { button, useControls } from "leva";
import { useEffect, useState } from "react";
import { randInt } from "three/src/math/MathUtils";

import { ObjectKinds, SpawnableObject } from "./objects/object";
import { ObjectProps } from "./objects/object";
import { Playground } from "./playground";

const sum = (arr: number[]) => arr.reduce((partialSum, a) => partialSum + a, 0);

const Objects = () => {
  const [objects, setObjects] = useState<ObjectProps["kind"][]>([]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const items =
      (query.get("items")?.split(",") as ObjectProps["kind"][]) || [];

    const timeouts: NodeJS.Timeout[] = [];
    const timings: number[] = [];

    for (let i = 0; i < items.length; i++) {
      const timing = i ? randInt(300, 500) : 0;
      timings.push(timing);
      const timeout = setTimeout(() => {
        setObjects((v) => [...v, items[i]]);
      }, sum(timings));
      timeouts.push(timeout);
    }

    return () => {
      for (const timeout of timeouts) {
        clearTimeout(timeout);
      }
    };
  }, []);

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
