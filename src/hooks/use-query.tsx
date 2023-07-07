import { useMemo } from "react";

export function useQuery<
  T extends Record<string, string> = Record<string, string>
>() {
  const query = useMemo(
    () =>
      Object.fromEntries(
        new URLSearchParams(location.search).entries()
      ) as Partial<T>,
    []
  );
  return query;
}
