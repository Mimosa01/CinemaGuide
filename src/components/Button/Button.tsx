import { FC, ReactNode } from "react";
import classNames from "classnames";
import './Button.scss';
import { Loader } from "../Loader/Loader";

interface IBtnVeiw {
  color?: boolean;
  icon?: boolean;
  outline?: boolean;
  none?: boolean;
}

interface PropsButton {
  children: ReactNode;
  view?: IBtnVeiw;
  className?: string;
  isLoading?: boolean;
  tabindex?: number;
  onClick?: () => void;
}

// Не забыть вставить обработчик
export const Button: FC<PropsButton> = (props) => {

  const btnClass = classNames({
    'btn': (props.view?.outline || props.view?.none) ? false : true,
    'btn-reset': true,
    'btn--icon': props.view?.icon,
    'btn--color': props.view?.color,
    'btn--outline': props.view?.outline,
    [`${props.className}`]: props.className
  })

  return (
    <button 
      className={btnClass}
      tabIndex={props.tabindex && props.tabindex}
      onClick={props.onClick}
    >
      {props.isLoading ? 
        <>
          <Loader />
          {props.children}
        </>
        : props.children}
    </button>
  )
}