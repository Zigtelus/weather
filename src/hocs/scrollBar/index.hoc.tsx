import React, { ReactNode } from 'react';
import './index.scss';

type Props = {
  componentt: ReactNode;
};

const ScrollBarHOK = ()=> {


  const ScrollBarBase: React.FC <Props> = (props)=> {

    return <div className="scrollBarBase">

      {props.componentt}
    </div>
  };


  return ScrollBarBase;
}


export { ScrollBarHOK }