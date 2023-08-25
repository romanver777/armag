import Cart from "./components/cart/cart";
import Image from "next/image";
import styles from "./page.module.scss";

import AsteroidsList from "./components/asteroids-list/asteroids-list";

export default function Home() {
  return (
    <>
      <div className={styles.planeta}>
        <Image
          src="/style/img/planeta.png"
          alt="Planeta"
          width={377}
          height={436}
          quality={100}
          priority
        />
      </div>
      <AsteroidsList />
      <Cart />
    </>
  );
}
