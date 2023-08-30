import { useState, useEffect, useCallback } from "react";
import { INearEarthObjects, IAsteroid } from "../types/t-asteroids";

const getFormatItems = (items: INearEarthObjects) =>
  Object.keys(items)
    .reverse()
    .map((item) => items[item])
    .flat();

const addZero = (num: number) => {
  if (num.toString().length < 2) return `${0}${num}`;

  return num;
};

const getDate = () => {
  const datestring = new Date();
  const day = 24 * 60 * 60 * 1000;
  const endDateString = new Date(Date.now() + day);

  const startDate =
    datestring.getFullYear() +
    "-" +
    addZero(datestring.getMonth() + 1) +
    "-" +
    datestring.getDate();
  const endDate =
    endDateString.getFullYear() +
    "-" +
    addZero(endDateString.getMonth() + 1) +
    "-" +
    endDateString.getDate();

  return { startDate, endDate };
};

const useGetAsteroids = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<IAsteroid[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");

  const getAsteroids = useCallback( async (url: string) => {
    const { startDate, endDate } = getDate();
    const key = "DEMO_KEY";
    const startUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=${key}`;

    try {
      const res = await fetch(`${!!url ? url : startUrl}`);

      if (!res.ok) {
        setError("Что-то пошло не так...");
        setLoading(false);
        return;
      }
      const data = await res.json();

      setItems([...items, ...getFormatItems(data.near_earth_objects)]);
      setNextUrl(data.links.next);
    } catch (error) {
      setError("Что-то пошло не так...");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) setLoading(true);
    getAsteroids(url);
  }, [url]);

  return { items, loading, error, nextUrl };
};

export default useGetAsteroids;
