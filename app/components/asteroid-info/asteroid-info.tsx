import Image from "next/image";
import cn from "classnames";
import {
  getName,
  getFullDate,
  getFormatNumber,
  getRusOrbit,
  getDiameter,
} from "../../utils/utils";

import { IAsteroid } from "@/app/types/t-asteroids";
import Button from "../button/button";

import DangerIcon from "../../../public/style/icon/danger.svg";
import style from "./asteroid-info.module.scss";

type TProps = {
  item: IAsteroid;
  inCart: boolean;
  onHandleClick: (item: IAsteroid) => void;
};

const AsteroidInfo = ({ item, inCart, onHandleClick }: TProps) => {
  return (
    <div className={style.content}>
      <header className={style.header}>
        <h1 className={style.title}>{getName(item.name)}</h1>
        <p className={style.magn}>
          Абсолютная магнитуда: {item.absolute_magnitude_h}
        </p>
        <p className={style.diam}>
          Диаметр:{" "}
          {getDiameter(item.estimated_diameter.meters.estimated_diameter_max)}
        </p>
        {inCart ? (
          <Button
            text="В корзине"
            className={cn(style.btn, style.cart)}
            onClick={() => onHandleClick(item)}
          />
        ) : (
          <Button
            text="Заказать"
            className={style.btn}
            onClick={() => onHandleClick(item)}
          />
        )}
        {item.is_potentially_hazardous_asteroid && (
            <Image
              src={DangerIcon}
              className={style.dangerIcon}
              alt="Danger icon"
            />
          )}
      </header>

      <ul className={style.astList}>
        {item.close_approach_data.map((it, ind) => (
          <li className={style.astItem} key={item.id + ind}>
            <p className={style.approach}>
              Cближение: {getFullDate(it.close_approach_date_full)}
            </p>
            <p className={style.approach}>
              Скорость:{" "}
              {getFormatNumber(it.relative_velocity.kilometers_per_hour)} км/час
            </p>
            <p className={style.approach}>
              Расстояние: {getFormatNumber(it.miss_distance.kilometers)} км
            </p>
            <p className={style.approach}>
              Орбита: {getRusOrbit(it.orbiting_body)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsteroidInfo;
