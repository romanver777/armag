"use client"
import useCart from "./hooks/useCart";

import Cart from "./components/cart/cart";
import AsteroidsList from "./components/asteroids-list/asteroids-list";
import styles from "./page.module.scss";

export default function Home() {
  const { cart, handleSetCart } = useCart();

  return (
    <>
      <div className={styles.planeta} />
      <div className={styles.content}>
        <AsteroidsList cart={cart} setToCart={(item) => handleSetCart(item)}/>
        <Cart number={!!cart ? cart.length : 0} />
      </div>
    </>
  );
}
