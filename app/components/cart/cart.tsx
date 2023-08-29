import { useRouter } from 'next/navigation';

import Button from "../button/button";
import style from "./cart.module.scss";

type TProps = {
  number: number;
};

const getFormattedTxt = (number: number) => {
  let str = "астероидов";
  const last = number.toString().slice(-1);

  if (+last === 1) str = "астероид";
  if (+last >= 2 && +last <= 4) str = "астероида";
  if (number >= 11 && number <= 14) str = "астероидов";
  
  return `${number} ${str}`;
}

const Cart = ({ number }: TProps) => {
  const router = useRouter()

  const handleClick = () => router.push('/cart');
  
  return (
    <div className={style.cart}>
      <div className={style.container}>
        <div className={style.wrap}>
          <h3 className={style.name}>Корзина</h3>
          <p className={style.quant}>
            {number ? getFormattedTxt(number) : "пуста"}
          </p>
        </div>
        <Button text="Отправить" disabled={!number} onClick={handleClick}/>
      </div>
    </div>
  );
};

export default Cart;
