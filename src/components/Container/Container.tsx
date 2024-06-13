import { FC, ReactNode } from "react";
import './Container.scss';

interface PropsContainer {
  children: ReactNode;
}

export const Container: FC<PropsContainer> = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}