import './index.scss';
import { MutableRefObject, useRef, useState } from "react";
import LoadingAnimation from "src/helpers/LoadingAnimation";
import inputHoc from "src/hocs/inputs/inputHoc";
import PopupHoc from "src/hocs/popup";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getUserActions } from "src/store/users/actions/getUser.action";


export default function PopupSignIn({closeOpen}: {closeOpen: ()=> void}): JSX.Element {

  const isUser = useAppSelector(state => state.ussersReducer);
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  const userMain = isUser.main;
  const userLoading = isUser.getUsers.loading;

  const dispatch = useAppDispatch();

  const Inpt = inputHoc();

  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [textAuthorization, setTextAuthorization] = useState <string> ('Введите логин и пароль для авторизации');


  const getUser = ()=> {

    const body = {
      "password": passwordRef.current.value,
      "email": emailRef.current.value,
    };

    dispatch(getUserActions(body));
    setTextAuthorization('авторизуется')
  }



  const authorization = 
  <form 
    className={'popup_sign_in__body'}
    ref={formRef}
  >
        
    <h2 className={'popup_sign_in__title'}>authorization</h2>
    
    <p style={{"textAlign": "center", "width": "100%"}}>

      {
        !userLoading &&
        (
          !!userMain ?
          `вы авторизовались` :
          'Введите логин и пароль'
        )
      }
    </p>

    <LoadingAnimation userLoading={userLoading} />

    {
      !userMain && 
      (!userLoading &&
      (<>

        <div className={'popup_sign_in__write_places'}>
          <Inpt 
            isPlaceholder="e-mail" 
            isRef={emailRef}
            isType={"email"}
            isName={"email"}
          />

          <Inpt 
            isPlaceholder="password" 
            isRef={passwordRef}
            isType={"password"}
            isName={"password"}
          />
        </div>

        {
          textAuthorization === 'авторизуется' &&
          !userMain &&
          <p>пользователь не найден</p>
        }

        <div className={'popup_sign_in__btn'}>
          <Inpt 
            isType={'submit'}
            isOnClick={getUser}
          />
        </div>

      </>))
    }

  </form>


  const Popup = PopupHoc();

  return <Popup 
    close={closeOpen} 
    componentt={authorization}
    isClassNamePopupBG={'popup_bg__authorization'}
    isClassNamePopup={'popup__authorization'}
  /> 
}