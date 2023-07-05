import { useControls } from "leva";

import { Cube } from "./objects/cube";

const WIDTH = 16;
const HEIGHT = 100;
const DEPTH = 2.5;

const BUILDING_BLOCK_THICKNESS = 0.2;

export const Playground = () => {
  const { visible } = useControls({
    visible: { label: 'Render "playground"', value: false },
  });

  return (
    <>
      <Cube
        visible={visible}
        type="fixed"
        scale={[DEPTH, 0.5, WIDTH]}
        color="red"
      />

      <Cube
        visible={false}
        type="fixed"
        scale={[BUILDING_BLOCK_THICKNESS, HEIGHT, WIDTH]}
        position-x={((DEPTH + BUILDING_BLOCK_THICKNESS) / 2) * -1}
        position-y={HEIGHT / 2}
        color="yellow"
      />
      <Cube
        visible={visible}
        type="fixed"
        scale={[BUILDING_BLOCK_THICKNESS, HEIGHT, WIDTH]}
        position-x={((DEPTH + BUILDING_BLOCK_THICKNESS) / 2) * 1}
        position-y={HEIGHT / 2}
        color="yellow"
      />
      <Cube
        visible={visible}
        type="fixed"
        scale={[DEPTH, HEIGHT, BUILDING_BLOCK_THICKNESS]}
        position-z={((WIDTH + BUILDING_BLOCK_THICKNESS) / 2) * -1}
        position-y={HEIGHT / 2}
        color="yellow"
      />
      <Cube
        visible={visible}
        type="fixed"
        scale={[DEPTH, HEIGHT, BUILDING_BLOCK_THICKNESS]}
        position-z={((WIDTH + BUILDING_BLOCK_THICKNESS) / 2) * 1}
        position-y={HEIGHT / 2}
        color="yellow"
      />
    </>
  );
};
