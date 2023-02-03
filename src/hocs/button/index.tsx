import React, { FC, ReactElement, ReactNode } from 'react';
import style from './index.module.scss';



type Props = {
  isText: string
  isOnClick?: ()=> void;
  isClassName?: string;
};

const ButtonHoc = ()=> {

  


  const ButtonBase: React.FC <Props> = ({isText, isOnClick, isClassName})=> {


    return <div
      className={`${style.btnHoc} ${!!isClassName ?  isClassName : ''}`}
    >
      <button 
        className={style.btn}
        onClick={isOnClick}
      >
        {isText}
      </button>
    </div>
  }


  return ButtonBase;
}


export default ButtonHoc;