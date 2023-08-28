import Image from "next/image";
import cn from "classnames";

import { IAsteroid } from "../../types/t-asteroids";
import Button from "../button/button";
import style from "./asteroid.module.scss";
import ArrowIcon from "../../../public/style/icon/arrow.svg";
import AsterImg from "../../../public/style/img/pngegg.png";
import AsterBigImg from "../../../public/style/img/pngegg-big.png";
import DangerIcon from "../../../public/style/icon/danger.svg";

type TProps = {
  item: IAsteroid;
  isKm: boolean;
};

const getDate = (date: string) => {
  const data = new Date(date);
  const monthName = data.toLocaleString('default', { month: 'short' });
  
  return `${data.getDate()} ${monthName.slice(0,-1)} ${data.getFullYear()}`;
};

const getFormatKm = (km: string) => {
  const arr: (number | string)[] = [];

  Math.round(+km)
    .toString()
    .split("")
    .reverse()
    .forEach((el, i) => {
      if (i !== 0 && i % 3 === 0) arr.push(" ");
      arr.push(el);
    });

  return arr.reverse().join("") + " " + "км";
};

const getFormatLunar = (lun: string) => {
  const num = Math.trunc(+lun);
  const twoLast = num.toString().slice(-2);
  const last = num.toString().slice(-1);
  let str = "лунных орбит";

  if (+last === 1) str = "лунная орбита";
  if (+last >= 2 && +last <= 4) str = "лунные орбиты";
  if (+twoLast >= 11 && +twoLast <= 14) str = "лунных орбит";

  return `${num} ${str}`;
};

const getDiameter = (diam: number) => {
  if (Math.trunc(diam).toString().length < 4) return `${Math.trunc(diam)} м`;

  return `${(diam / 1000).toFixed(1)} км`;
};

const getName = (name: string) => name.split("(")[1].slice(0, -1);

const Asteroid = ({ item, isKm }: TProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.date}>
        {getDate(item.close_approach_data[0].close_approach_date)}
      </div>
      <div className={style.desc}>
        <div className={style.orbs}>
          <div className={style.orbsTxt}>
            {isKm
              ? getFormatKm(
                  item.close_approach_data[0].miss_distance.kilometers
                )
              : getFormatLunar(item.close_approach_data[0].miss_distance.lunar)}
          </div>
          <Image className={style.arrow} alt="Arrow" src={ArrowIcon} />
        </div>
        <div className={style.astrImgWrap}>
          {item.estimated_diameter.kilometers.estimated_diameter_max > 1 ? (
            <Image
              className={style.arrow}
              alt="Asteroid big"
              src={AsterBigImg}
            />
          ) : (
            <Image className={style.astrImg} alt="Asteroid" src={AsterImg} />
          )}
        </div>
        <div className={style.size}>
          <div className={style.fq}>{getName(item.name)}</div>
          <div className={style.fqM}>
            Ø{" "}
            {getDiameter(item.estimated_diameter.meters.estimated_diameter_max)}
          </div>
        </div>
      </div>
      <div className={style.order}>
        <Button text="Заказать" className={style.btn} />
        {/* <Button text="В корзине" className={cn(style.btn, style.cart)} /> */}
        {item.is_potentially_hazardous_asteroid && (
          <Image
            src={DangerIcon}
            className={style.dangerIcon}
            alt="Danger icon"
          />
        )}
      </div>
    </div>
  );
};

export default Asteroid;
