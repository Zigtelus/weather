import { MutableRefObject } from "react";
import { base_url, protocol } from "src/constants";

type Props = {
  isRef?: MutableRefObject<HTMLImageElement>;
  isSrc: string;
}

const Pictures = ({isRef, isSrc}: Props): JSX.Element => {
  return <img 
    ref={isRef}
    src={`${protocol}://${base_url}/uploads/${isSrc}`} 
    alt="" 
  />
}


export default Pictures;