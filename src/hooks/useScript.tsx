import { useEffect, useState } from "react";

export const useScript = (url: string) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = url;
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return {
    loaded,
  };
};
