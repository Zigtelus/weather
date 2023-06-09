
import './index.scss';
import { useEffect, useState } from "react";
import PopupSignIn from '../Popups/PopupSignIn';
import PopupSignUp from '../Popups/PopupSignUp';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { getUserFomLocalStorage } from 'src/store/users/slice/users.slice';
import PopupChangeUser from 'src/components/Popups/PopupChangeUser';



export function Registration (): JSX.Element {

  const [autorizationPopup, setaAtorizationPopup] = useState(false);
  const [registrationPopup, setaRegistrationPopup] = useState(false);
  const [changeRegistrationPopup, setaChangeRegistrationPopup] = useState(false);

  const openAutorization = ()=> setaAtorizationPopup(!autorizationPopup);
  const openRegistration = ()=> setaRegistrationPopup(!registrationPopup);  
  const changeRegistration = ()=> setaChangeRegistrationPopup(!changeRegistrationPopup);  

  const isUser = useAppSelector(item => item.ussersReducer.main);
  const logInOrNot = !!isUser;

  const dispatch = useAppDispatch();

  logInOrNot && localStorage.setItem('isUser', `${JSON.stringify(isUser)}`)
  const getUserInLocalStorage = localStorage.getItem('isUser')

  useEffect(()=> {
    !!getUserInLocalStorage &&
    dispatch(getUserFomLocalStorage(JSON.parse(getUserInLocalStorage)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [0]) 

  const logoutHowUser = ()=> {
    localStorage.removeItem('isUser')
    dispatch(getUserFomLocalStorage(null))
  }




  return <>


    <div className='registration'>
    {
      logInOrNot ?

      <>
        <button
          onClick={logoutHowUser}
        >sign out</button>

        <button 
          onClick={()=> {
            changeRegistration()
          }}
        >change account</button>
      </> :

      <>
        <button
          onClick={openAutorization}
          className=""
        >sign in</button>

        <button 
          onClick={openRegistration}
          className=""
        >sign up</button>
      </>
    }
    </div>

    {
      registrationPopup && <PopupSignUp closeOpen={openRegistration}/>
      
    }

    {
      autorizationPopup && <PopupSignIn closeOpen={openAutorization}/>
    }

    {
      changeRegistrationPopup && <PopupChangeUser closeOpen={changeRegistration}/>
    }
  </>
}