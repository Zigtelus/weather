import style from './index.module.scss';
import { MutableRefObject, ReactNode } from "react";



type Props = {
  isPlaceholder?: string;
  isRef?: MutableRefObject<HTMLInputElement>;
  clickHandle?: ()=> void;
};


const inputTextHoc = ()=> {



  const inputTextBase: React.FC <Props> = ({isPlaceholder, isRef, clickHandle})=> {

    return <>
      <input 
        type="text"
        className={style.inputText} 
        placeholder={isPlaceholder}
        ref={isRef}
        onClick={clickHandle}
      />
    </>
  };

  return inputTextBase;
};

export default inputTextHoc;