import cn from "classnames";
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
      className={cn(style.btn, className)}
      disabled={!!disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
