import React from 'react';
import './styleButton.scss';



function Button():JSX.Element {
  return <>
    <label className="switch">
      <input type="checkbox"/>
      <span className="slider round"></span>
    </label> 
  </>
}


export default React.memo(Button)