import { IAsteroid } from "../types/t-asteroids";

export const getDate = (date: string) => {
  const data = new Date(date);
  const monthName = data.toLocaleString("default", { month: "short" });

  return `${data.getDate()} ${monthName.slice(0, -1)} ${data.getFullYear()}`;
};

export const getFullDate = (date: string) => {
  const data = new Date(date);
  const monthName = data.toLocaleString("default", { month: "short" });
  const time = date.split(" ")[1];

  return `${data.getDate()} ${monthName.slice(
    0,
    -1
  )} ${data.getFullYear()} ${time}`;
};

export const getFormatKm = (km: string) => {
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

export const getFormatLunar = (lun: string) => {
  const num = Math.trunc(+lun);
  const twoLast = num.toString().slice(-2);
  const last = num.toString().slice(-1);
  let str = "лунных орбит";

  if (+last === 1) str = "лунная орбита";
  if (+last >= 2 && +last <= 4) str = "лунные орбиты";
  if (+twoLast >= 11 && +twoLast <= 14) str = "лунных орбит";

  return `${num} ${str}`;
};

export const getDiameter = (diam: number) => {
  if (Math.trunc(diam).toString().length < 4) return `${Math.trunc(diam)} м`;

  return `${(diam / 1000).toFixed(1)} км`;
};

export const getName = (name: string) => name.split("(")[1].slice(0, -1);

export const getRusOrbit = (orb: string) => {
  let result = "";
  if (orb.toLowerCase() === "earth") result = "Земля";

  return result;
};

export const getFormatNumber = (number: number | string) => {
  const arr: (number | string)[] = [];

  Math.round(+number)
    .toString()
    .split("")
    .reverse()
    .forEach((el, i) => {
      if (i !== 0 && i % 3 === 0) arr.push(" ");
      arr.push(el);
    });

  return arr.reverse().join("");
};

export const isItemInCard = (item: IAsteroid, cart: (IAsteroid[] | null)) => {
  if (cart === null) return false;
  
  return cart.some((it) => it.id == item.id);
}
  
