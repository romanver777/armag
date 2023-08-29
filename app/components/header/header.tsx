import Link from "next/link";
import cn from "classnames";

import { Passion_One } from "next/font/google";
import style from "./header.module.scss";

const passionOne = Passion_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link href="/" className={cn(style.title, passionOne.className)}>
          Armageddon 2023
        </Link>
        <div className={style.desc}>
          <p>ООО “Команда им. Б. Уиллиса”.</p>
          <p>Взрываем астероиды с 1998 года.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
