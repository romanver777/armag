import Cart from "./components/cart/cart";
import AsteroidsList from "./components/asteroids-list/asteroids-list";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.planeta} />
      <div className={styles.content}>
        <AsteroidsList />
        <Cart />
      </div>
    </>
  );
}
