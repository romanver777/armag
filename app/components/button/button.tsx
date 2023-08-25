import cn from "classnames";
import style from "./button.module.scss";

type TProps = {
  text: string;
  className?: string;
};

const Button = ({ text, className }: TProps) => {
  return <button className={cn(style.btn, className)}>{text}</button>;
};

export default Button;
