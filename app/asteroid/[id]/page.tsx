"use client";
import cn from "classnames";

import useGetAsteroid from "@/app/hooks/useGetAsteroid";
import useCart from "@/app/hooks/useCart";

import Cart from "@/app/components/cart/cart";
import Message from "@/app/components/message/message";
import AsteroidInfo from "@/app/components/asteroid-info/asteroid-info";

import styles from "../../page.module.scss";
import style from "./pageId.module.scss";
import { isItemInCard } from "@/app/utils/utils";

type TProps = {
  params: {
    id: string;
  };
};

const Page = ({ params: { id } }: TProps) => {
  const { item, loading, error } = useGetAsteroid(id);
  const { cart, handleSetCart } = useCart();

  return (
    <>
      <div className={styles.planeta} />
      <div className={cn(styles.content, style.content)}>
        {loading && <Message className={style.messWidth} text="Загружаем..." />}
        {error && (
          <Message className={style.messWidth} text="Что-то пошло не так..." />
        )}
        {!!item && (
          <AsteroidInfo
            inCart={isItemInCard(item, cart)}
            item={item}
            onHandleClick={() => handleSetCart(item)}
          />
        )}
        <Cart number={!!cart ? cart.length : 0} />
      </div>
    </>
  );
};

export default Page;
