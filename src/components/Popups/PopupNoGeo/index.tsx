import { useEffect, useState } from "react";
import PopupHoc from "src/hocs/popup";




function PopupNoGeo ({status}: {status: boolean}) {

  const [popup, setPopup] = useState(false);
  const closePopup = ()=> setPopup(false);
  const Popup = PopupHoc();

  const thisPosition = ()=> setPopup(false);
  const thisError = ()=> {
    setTimeout(()=> setPopup(true))
    setTimeout(()=> setPopup(false), 4000)
  };

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(thisPosition, thisError);
  }, [0]);

  return <> { 
    popup && 
    <Popup 
      close={closePopup} 
      componentt={<>У вас не включен GPS, поэтому мы вывели данные по погоде в Москве</>}
    /> 
  } </>
}


export default PopupNoGeo;