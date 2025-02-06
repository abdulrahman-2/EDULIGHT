import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQueryList = window.matchMedia(query);
      setMatches(mediaQueryList.matches);

      const listener = (event: MediaQueryListEvent) =>
        setMatches(event.matches);
      mediaQueryList.addEventListener("change", listener);

      return () => mediaQueryList.removeEventListener("change", listener);
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
