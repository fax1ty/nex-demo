import { button, useControls } from "leva";
import { useState } from "react";

import { SpawnableObject } from "./objects/object";
import { ObjectProps } from "./objects/object";
import { Playground } from "./playground";

const HEIGHT = 12;

const Objects = () => {
  const [objects, setObjects] = useState<ObjectProps["kind"][]>([]);

  useControls({
    "Add cube": button(() => setObjects((v) => [...v, "cube"])),
    "Add rugby": button(() => setObjects((v) => [...v, "rugby"])),
    "Add basketball": button(() => setObjects((v) => [...v, "basketball"])),
    "Add socker": button(() => setObjects((v) => [...v, "socker"])),
    "Add microphone": button(() => setObjects((v) => [...v, "microphone"])),
    "Add crown": button(() => setObjects((v) => [...v, "crown"])),
    "Reset everything": button(() => setObjects([])),
  });

  return objects.map((type, i) => (
    <SpawnableObject kind={type} key={i} position-y={HEIGHT} />
  ));
};

export const Physical = () => {
  return (
    <>
      <Objects />

      <Playground />
    </>
  );
};
