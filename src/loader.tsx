import { useEffect } from "react";

export const Loader = () => {
  useEffect(() => {
    window.postMessage("@APP/EXPIRIENCE_LOADED");
  }, []);

  return null;
};
