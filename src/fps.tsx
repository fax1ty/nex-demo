import { useControls } from "leva";
import { Perf } from "r3f-perf";

import { useQuery } from "./hooks/use-query";

export const FPSController = () => {
  const { fps } = useControls({
    fps: { value: true, label: "Render stats" },
  });
  const { debug = "true" } = useQuery<{ debug: string }>();

  return (
    <>
      {fps && debug === "true" && (
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
