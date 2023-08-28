import style from "./message.module.scss";

type TProps = {
  text: string;
};

const Message = ({ text }: TProps) => {
  return <div className={style.message}>{text}</div>;
};

export default Message;
