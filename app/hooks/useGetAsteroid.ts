import { useState, useEffect } from "react";
import { IAsteroid } from "../types/t-asteroids";

const useGetAsteroid = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [item, setItem] = useState<IAsteroid | null>(null);

  const getAsteroid = async (id: string) => {
    const key = "DEMO_KEY";
    const url = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${key}`;

    try {
      const res = await fetch(url);

      if (!res.ok) {
        setError("Что-то пошло не так...");
        setLoading(false);
        return;
      }
      const data = await res.json();
      setItem(data);
    } catch (error) {
      setError("Что-то пошло не так...");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) setLoading(true);
    getAsteroid(id);
  }, [id]);

  return { item, loading, error };
};

export default useGetAsteroid;
