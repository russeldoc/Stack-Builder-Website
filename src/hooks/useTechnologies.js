import { useEffect, useState } from "react";
import technologiesData from "../data/technologies.json";


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
