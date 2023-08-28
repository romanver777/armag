"use client";
import { useState, useEffect, useRef } from "react";
import cn from "classnames";
import useGetAsteroids from "../../hooks/useGetAsteroids";

import Message from "../message/message";
import Asteroid from "../asteroid/asteroid";
import style from "./asteroids-list.module.scss";

const AsteroidsList = () => {
  const [url, setUrl] = useState("");
  const [isKm, setKm] = useState(true);
  const { items, loading, error, nextUrl } = useGetAsteroids(url);
  const lastRef = useRef(null);

  useEffect(() => {
    if (!lastRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setUrl(nextUrl);
        observer.unobserve(entry.target);
      }
    });

    observer.observe(lastRef.current);
  }, [nextUrl]);

  return (
    <div className={style.content}>
      <header className={style.header}>
        <h1 className={style.title}>Ближайшие подлёты астероидов</h1>
        <div className={style.switch}>
          <span
            className={cn(style.dist, style.km, { [style.active]: isKm })}
            onClick={() => {
              if (!isKm) setKm(true);
            }}
          >
            в километрах
          </span>
          &nbsp;|&nbsp;
          <span
            className={cn(style.dist, style.orb, { [style.active]: !isKm })}
            onClick={() => {
              if (isKm) setKm(false);
            }}
          >
            в лунных орбитах
          </span>
        </div>
      </header>
      {loading && !items.length && <Message text="Загружаем..." />}
      {error && <Message text={error} />}
      <ul className={style.astList}>
        {items.map((item, ind) => {
          if (ind === items.length - 1) {
            return (
              <li className={style.astItem} key={item.id} ref={lastRef}>
                <Asteroid item={item} isKm={isKm} />
              </li>
            );
          } else {
            return (
              <li className={style.astItem} key={item.id}>
                <Asteroid item={item} isKm={isKm} />
              </li>
            );
          }
        })}
      </ul>
      {loading && !!items.length && <Message text="Загружаем..." />}
    </div>
  );
};

export default AsteroidsList;
