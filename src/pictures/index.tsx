import { ImgHTMLAttributes, MutableRefObject, useRef } from "react";

type Props = {
  isRef?: MutableRefObject<HTMLImageElement>;
  isSrc: string;
}

const Pictures = ({isRef, isSrc}: Props): JSX.Element => {
  return <img 
    ref={isRef}
    src={`http://localhost:3000/uploads/${isSrc}`} 
    alt="" 
  />
}


export default Pictures;