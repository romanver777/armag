import Button from "../button/button";

import style from "./cart.module.scss";

const Cart = () => {
  return (
    <div className={style.cart}>
      <div className={style.container}>
        <div className={style.wrap}>
          <h3 className={style.name}>Корзина</h3>
          <p className={style.quant}>{2} астероида</p>
        </div>
        <Button text="Отправить" />
      </div>
    </div>
  );
};

export default Cart;
