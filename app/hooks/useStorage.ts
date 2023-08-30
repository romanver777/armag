import { useState, useEffect } from "react";
import { IAsteroid } from "../types/t-asteroids";

const useStorage = () => {
  const [items, setItems] = useState<IAsteroid[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (items.length) localStorage.removeItem("cart");
  }, [items]);

  return { items };
};

export default useStorage;
