import { useState, useEffect } from "react";
import { IAsteroid } from "../types/t-asteroids";

const useStorage = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<IAsteroid[]>([]);

  useEffect(() => {
      const stored = localStorage.getItem("cart");
      if (stored) {
        setItems(JSON.parse(stored));
      } else {
        setLoading(false);
      }
  }, []);

  useEffect(() => {
    if (items.length) {
      localStorage.removeItem("cart");
      setLoading(false);
    }
  }, [items]);

  return { items, loading };
};

export default useStorage;
