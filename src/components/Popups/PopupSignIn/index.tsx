import './index.scss';
import { MutableRefObject, useRef, useState } from "react";
import LoadingAnimation from "src/helpers/LoadingAnimation";
import inputTextHoc from "src/hocs/inputs/inputText";
import PopupHoc from "src/hocs/popup";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getUserActions } from "src/store/users/actions/getUser.action";
import ButtonHoc from 'src/hocs/button';







export default function PopupSignIn({closeOpen}: {closeOpen: ()=> void}): JSX.Element {

  const isUser = useAppSelector(state => state.ussersReducer);
  const userLoading = isUser.loading;


  const dispatch = useAppDispatch();

  const InputText = inputTextHoc();
  const Btn = ButtonHoc()

  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [textAuthorization, setTextAuthorization] = useState <string> ('Введите логин и пароль для авторизации');


  // const getUser = ()=> {

  //   // axios({
  //   //   method: 'post',
  //   //   url: 'https://weather-back-deploy.herokuapp.com/main/api/users/getuser',
  //   //   headers: {}, 
  //   //   data: {
  //   //     email: emailRef.current.value,
  //   //     password: passwordRef.current.value
  //   //   }
  //   // })
  //   // .then(
  //   //   value=> {
  //   //     setStatusUser(!statusUser)
  //   //     setIsLoading(false)
  //   //     setTextAuthorization('вы авторизовались')
  //   //     dispatch(getUsersAction(value.data))
  //   //   },
  //   //   error => {
  //   //     setIsLoading(false)
  //   //     setTextAuthorization('данный пользователь не найден')
  //   //   }
    
  //   // );



  const getUser = ()=> {

    const body = {
      "password": passwordRef.current.value,
      "email": emailRef.current.value,
    };

    dispatch(getUserActions(body)());
    setTextAuthorization('авторизуется')
  }

  

  const authorization = <div className={'popup_sign_in__body'}>

      
  <h2 className={'popup_sign_in__title'}>authorization</h2>
  
  <p style={{"textAlign": "center", "width": "100%"}}>

    {
      !isUser.loading &&
      (
        !!isUser.main.password ?
        `вы авторизовались` :
        'Введите логин и пароль'
      )
    }
  </p>

  <LoadingAnimation userLoading={userLoading} />

  {
    !isUser.main.password && 
    (!userLoading &&
    (<>

      <div className={'popup_sign_in__write_places'}>
        <InputText 
          isPlaceholder="e-mail" 
          isRef={emailRef}
        />

        <InputText 
          isPlaceholder="password" 
          isRef={passwordRef}
        />
      </div>

      {
        textAuthorization === 'авторизуется' &&
        !isUser.main.password &&
        <p>пользователь не найден</p>
      }

      <div className={'popup_sign_in__btn'}>
        <Btn 
          isOnClick={getUser}
          isText={'send'}
        />
      </div>

    </>))
  }

  </div>


  const Popup = PopupHoc();

  return <Popup 
    close={closeOpen} 
    componentt={authorization}
  /> 
}