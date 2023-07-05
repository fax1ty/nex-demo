import { useControls } from "leva";
import { Perf } from "r3f-perf";

export const FPSController = () => {
  const { fps } = useControls({
    fps: { value: true, label: "Render stats" },
  });

  return (
    <>
      {fps && (
        <Perf
          antialias={false}
          showGraph={false}
          logsPerSecond={1}
          style={{ left: 48, bottom: 40 + 48 + 20 }}
          position="bottom-left"
        />
      )}
    </>
  );
};
