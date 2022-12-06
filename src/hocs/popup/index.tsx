import React, { FC, ReactElement, ReactNode } from 'react';
import style from './index.module.scss';



type Props = {
  componentt: ReactNode;
  close: ()=> void;
  isClassName?: string;
};

const PopupHoc = ()=> {

  


  const PopupBase: React.FC <Props> = ({componentt, close, isClassName})=> {


    return <div className={style.popup_bg}>

      <div className={style.popup}>
        <button 
          className={style.popup__close}
          onClick={()=> close()}
        ></button>



        <div className={`${style.popup__body} ${!!isClassName ?  isClassName : ''}`}>
          {componentt}
        </div>


      </div>

    </div>
  }

  return PopupBase;
}


export default PopupHoc;