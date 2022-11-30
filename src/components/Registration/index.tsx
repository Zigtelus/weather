
import './index.scss';
import { useState } from "react";
import PopupSignIn from '../Popups/PopupSignIn';
import PopupSignUp from '../Popups/PopupSignUp';



export function Registration (): JSX.Element {

  const [autorizationPopup, setaAtorizationPopup] = useState(false);
  const [registrationPopup, setaRegistrationPopup] = useState(false);

  const openAutorization = ()=> setaAtorizationPopup(!autorizationPopup)
  const openRegistration = ()=> setaRegistrationPopup(!registrationPopup)
  
  return <>
    <button
      onClick={()=> {
        openAutorization()
      }}
      className=""
    >авторизоваться</button>


    <button 
      onClick={()=> {
        openRegistration()
      }}
      className=""
    >зарегистрироваться</button>

    {
      registrationPopup && <PopupSignUp closeOpen={openRegistration}/>
      
    }

    {
      autorizationPopup && <PopupSignIn closeOpen={openAutorization}/>
    }
  </>
}