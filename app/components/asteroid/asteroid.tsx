import Image from "next/image";
import cn from "classnames";

import Button from "../button/button";
import style from "./asteroid.module.scss";
import ArrowIcon from "../../../public/style/icon/arrow.svg";
import AsterImg from "../../../public/style/img/pngegg.png";
import DangerIcon from "../../../public/style/icon/danger.svg";

type TProps = {
  item: string;
};

const Asteroid = ({ item }: TProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.date}>{item}</div>
      <div className={style.desc}>
        <div className={style.orbs}>
          <div className={style.orbsTxt}>3 лунные орбиты</div>
          <Image className={style.arrow} alt="Arrow" src={ArrowIcon} />
        </div>
        <div className={style.astrImgWrap}>
          <Image className={style.astrImg} alt="Asteroid" src={AsterImg} />
        </div>
        <div className={style.size}>
          <div className={style.fq}>2021 FQ</div>
          <div className={style.fqM}>Ø 85 м</div>
        </div>
      </div>
      <div className={style.order}>
        <Button text="Заказать" className={style.btn} />
        {/* <Button text="В корзине" className={cn(style.btn, style.cart)} /> */}
        <Image
          src={DangerIcon}
          className={style.dangerIcon}
          alt="Danger icon"
        />
      </div>
    </div>
  );
};

export default Asteroid;
