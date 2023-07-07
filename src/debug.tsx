import { Leva } from "leva";

import { useQuery } from "./hooks/use-query";

export const DebugController = () => {
  const { debug = "true" } = useQuery<{ debug: string }>();

  return <Leva hidden={debug !== "true"} />;
};
