import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import {
  getDate,
  getFormatKm,
  getFormatLunar,
  getDiameter,
  getName,
} from "../../utils/utils";
import { IAsteroid } from "../../types/t-asteroids";
import Button from "../button/button";
import ArrowIcon from "../../../public/style/icon/arrow.svg";
import AsterImg from "../../../public/style/img/pngegg.png";
import AsterBigImg from "../../../public/style/img/pngegg-big.png";
import DangerIcon from "../../../public/style/icon/danger.svg";

import style from "./asteroid.module.scss";

type TProps = {
  item: IAsteroid;
  isKm: boolean;
  inCart?: boolean;
  onHandleClick?: (item: IAsteroid) => void;
};

const Asteroid = ({ item, isKm, inCart, onHandleClick }: TProps) => {
  const handleClick = (item: IAsteroid) => {
    if (onHandleClick !== undefined) onHandleClick(item);
  };

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
          <Link href={`/asteroid/${item.id}`} className={style.fq}>
            {getName(item.name)}
          </Link>
          <div className={style.fqM}>
            Ø{" "}
            {getDiameter(item.estimated_diameter.meters.estimated_diameter_max)}
          </div>
        </div>
      </div>
      {inCart !== undefined && (
        <div className={style.order}>
          {inCart ? (
            <Button
              text="В корзине"
              className={cn(style.btn, style.cart)}
              onClick={() => handleClick(item)}
            />
          ) : (
            <Button
              text="Заказать"
              className={style.btn}
              onClick={() => handleClick(item)}
            />
          )}
          {item.is_potentially_hazardous_asteroid && (
            <Image
              src={DangerIcon}
              className={style.dangerIcon}
              alt="Danger icon"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Asteroid;
