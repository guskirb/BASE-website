import { useEffect } from "react";

export const useScript = (url: string, callback: () => void) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.onload = () => callback();
    
    script.src = url;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, callback]);
};
