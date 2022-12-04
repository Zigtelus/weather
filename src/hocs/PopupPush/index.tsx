import style from './index.module.scss';
import React, { FC, ReactElement, ReactNode } from 'react';



type Props = {
  text: ReactNode;
  isClassName?: string;
  timer?: number
  isStyle?: {
    [key: string]: string;
  }
};

const PusPopuphHoc = ()=> {

  const PusPopuphBase: React.FC <Props> = ({text, isClassName, timer = 2, isStyle})=> {


    return <div 
      style={{...isStyle}}
      className={`${style.push_popup} ${!!isClassName ?  isClassName : ''}`}>
        {text}
      </div>
  }

  return PusPopuphBase;
}


export default PusPopuphHoc;