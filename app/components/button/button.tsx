import style from "./button.module.scss";

type TProps = {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ text, className, disabled, onClick }: TProps) => {
  return (
    <button
      className={!!className ? className : style.btn}
      disabled={!!disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
