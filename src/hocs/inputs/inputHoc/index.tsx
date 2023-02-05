import style from './index.module.scss';
import { MouseEvent, MutableRefObject, ReactNode } from "react";



type Props = {
  isPlaceholder?: string;
  isRef?: MutableRefObject<HTMLInputElement>;
  isOnClick?: (e: MouseEvent<HTMLInputElement>)=> void;
  isType?: string;
  isName?: string;
  isValue?: string;
  isDisabled?: boolean;
};


const inputHoc = ()=> {



  const inputTextBase: React.FC <Props> = ({
    isPlaceholder, isType = 'text', isName, isRef, isOnClick, isValue, isDisabled
  })=> {

    return <>
      <input 
        type={isType}
        className={style.inputText} 
        placeholder={isPlaceholder}
        ref={isRef}
        onClick={isOnClick}
        name={isName}
        value={isValue}
        disabled={isDisabled}
      />
    </>
  };

  return inputTextBase;
};

export default inputHoc;