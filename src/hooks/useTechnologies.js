import { useEffect, useState } from "react";
import technologiesData from "../data/technologies.json";

/**
 * Simulates fetching the technology catalogue from a JSON source.
 * The data is bundled locally, so the "network" delay is a short
 * timeout — enough for the loading state to genuinely exist and run,
 * even if it's only visible for a moment on screen.
 */
export function useTechnologies() {
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);
    const timer = setTimeout(() => {
      if (!isMounted) return;
      try {
        setTechnologies(technologiesData);
        setError(null);
      } catch (err) {
        setError("Could not load technologies.");
      } finally {
        setIsLoading(false);
      }
    }, 400);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return { technologies, isLoading, error };
}
