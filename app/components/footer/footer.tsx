"use client";
import { usePathname } from "next/navigation";

import style from "./footer.module.scss";

const Footer = () => {
  const path = usePathname();

  return (
    <>
      {path === "/cart" && (
        <footer className={style.footer}>
          <p className={style.txt}>© Все права и планета защищены</p>
        </footer>
      )}
    </>
  );
};

export default Footer;
