import { ImgHTMLAttributes, MutableRefObject, useRef } from "react";

type Props = {
  isRef?: MutableRefObject<HTMLImageElement>;
  isSrc: string;
}

const Pictures = ({isRef, isSrc}: Props): JSX.Element => {
  return <img 
    ref={isRef}
    src={`https://weather-back-deploy.herokuapp.com/uploads/${isSrc}`} 
    alt="" 
  />
}


export default Pictures;