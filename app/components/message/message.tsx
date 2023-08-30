import cn from "classnames";
import style from "./message.module.scss";

type TProps = {
  text: string;
  className?: string;
};

const Message = ({ text, className }: TProps) => {
  return <div className={cn(style.message, className)}>{text}</div>;
};

export default Message;
