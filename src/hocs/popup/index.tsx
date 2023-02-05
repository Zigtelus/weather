import React, { FC, ReactElement, ReactNode } from 'react';
import style from './index.module.scss';



type Props = {
  componentt: ReactNode;
  close: ()=> void;
  isClassNamePopupBG?: string;
  isClassNamePopup?: string;
  isClassNamePopupBody?: string;
};

const PopupHoc = ()=> {

  


  const PopupBase: React.FC <Props> = ({componentt, close, isClassNamePopupBG, isClassNamePopupBody, isClassNamePopup})=> {


    return <div className={`${style.popup_bg} ${isClassNamePopupBG}`}>

      <div className={`${style.popup} ${isClassNamePopup}`}>
        <button 
          className={style.popup__close}
          onClick={()=> close()}
        ></button>



        <div className={`${style.popup__body} ${isClassNamePopupBody}`}>
          {componentt}
        </div>


      </div>

    </div>
  }

  return PopupBase;
}


export default PopupHoc;