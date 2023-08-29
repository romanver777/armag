import { useState, useEffect } from "react";
import { IAsteroid } from "../types/t-asteroids";

const useStorage = () => {
  const [items, setItems] = useState<IAsteroid[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setItems(JSON.parse(stored));
    localStorage.removeItem("cart");
  }, []);

  return { items };
};

export default useStorage;
