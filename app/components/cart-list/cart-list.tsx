"use client";
import useStorage from "@/app/hooks/useStorage";

import { IAsteroid } from "../../types/t-asteroids";
import Asteroid from "../asteroid/asteroid";
import style from "./cart-list.module.scss";

const CartList = () => {
  const { items } = useStorage();

  return (
    <>
      {!!items.length ? (
        <div className={style.content}>
          <header className={style.header}>
            <h1 className={style.title}>Заказ отправлен!</h1>
          </header>
          <ul className={style.astList}>
            {items.map((item: IAsteroid) => (
              <li className={style.astItem} key={item.id}>
                <Asteroid item={item} isKm={true} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={style.content}>
          <header className={style.header}>
            <h1 className={style.title}>Корзина пуста!</h1>
          </header>
        </div>
      )}
    </>
  );
};

export default CartList;
