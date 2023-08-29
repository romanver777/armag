import { useState, useEffect } from "react";

import { IAsteroid } from "../types/t-asteroids";

const useCart = () => {
  const [cart, setCart] = useState<IAsteroid[] | null>(null);

  useEffect(() => {
    if (cart === null) {
      const stored = localStorage.getItem("cart");
      if (stored) setCart(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (cart !== null && !cart.length) localStorage.removeItem("cart");
    if (cart !== null && cart.length)
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleSetCart = (item: IAsteroid) => {
    if (cart !== null) {
      const array = cart.filter((it) => it.id !== item.id);

      if (array.length < cart.length) {
        setCart(array);
        return;
      }
      setCart([...cart, item]);
    } else {
      setCart([item]);
    }
  };
  return { cart, handleSetCart };
};

export default useCart;
