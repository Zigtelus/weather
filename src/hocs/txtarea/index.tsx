import { MutableRefObject, useRef, useState } from "react";



type Props = {
  isName?: string;
  isPlaceholder?: string;
  isCols?: number;
  isRows?: number;
  // isRef?: MutableRefObject<HTMLTextAreaElement>;
  isDisabled?: boolean;
  isOnClick?: ()=> void;
  isStyle?: {
    [className: string]: string;
  };
  isId?: string;
};


const TxtareaHoc: React.FC <Props> = ({
  // isName, isPlaceholder, isCols=100, isRows=10, isRef, isDisabled, isOnClick, isStyle, isId
  isName, isPlaceholder, isCols=100, isRows=10, isDisabled, isOnClick, isStyle, isId
})=> {


  const [textareaHeight, setTextareaHeight] = useState<string>('auto')
  // isRef = (!!isRef && !!isRef.current) ? isRef : (useRef() as MutableRefObject<HTMLTextAreaElement>)
  const txtAreaRef = useRef() as MutableRefObject<HTMLTextAreaElement>
  // const qq = !!isRef?.current ? !!isRef : txtAreaRef 

  return <>
    <textarea 
      name={isName}
      id={isId}
      cols={isCols} 
      rows={isRows} 
      placeholder={isPlaceholder}
      onClick={isOnClick}
      onKeyUp={()=> {
        setTextareaHeight(`${txtAreaRef.current.scrollHeight}px`)
      }}
      style={{
        ...isStyle,
        height: textareaHeight
      }}
      ref={txtAreaRef}
      disabled={isDisabled}
    />
  </>
};

export default TxtareaHoc;