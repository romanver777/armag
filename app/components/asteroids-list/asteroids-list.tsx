import cn from "classnames";

import Asteroid from "../asteroid/asteroid";
import style from "./asteroids-list.module.scss";

const list = [
  "12 сент 2023",
  "10 сент 2023",
  "13 сент 2023",
  "12 сент 2023",
  "10 сент 2023",
  "13 сент 2023",
  "12 сент 2023",
  "10 сент 2023",
  "13 сент 2023",
];

const AsteroidsList = () => {
  return (
    <div className={style.content}>
      <header className={style.header}>
        <h1 className={style.title}>Ближайшие подлёты астероидов</h1>
        <div className={style.switch}>
          <span className={cn(style.dist, style.km)}>в километрах</span>
          &nbsp;|&nbsp;
          <span className={cn(style.dist, style.orb, style.active)}>в лунных орбитах</span>
        </div>
      </header>
      <ul className={style.astList}>
        {list.map((item) => (
          <li className={style.astItem} key={item}>
            <Asteroid item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsteroidsList;
