import './index.scss';
import { MutableRefObject, useEffect, useRef, useState } from "react";
import LoadingAnimation from "src/helpers/LoadingAnimation";
import inputTextHoc from "src/hocs/inputs/inputText";
import PopupHoc from "src/hocs/popup";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { addUsersAction } from "src/store/users/actions/addUser.action";
import { formValidation } from "src/store/users/actions/validationUser.action";
import ButtonHoc from 'src/hocs/button';







export default function PopupSignUp({closeOpen}: {closeOpen: ()=> void}): JSX.Element {

  const isUser = useAppSelector(state => state.ussersReducer);
  const formValidationc = useAppSelector(state => state.validationUserReduce.main);

  const dispatch = useAppDispatch();
  const InputText = inputTextHoc();
  const Btn = ButtonHoc();

  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [focus, setFocus] = useState('')

  const [validation, setValidation] = useState <boolean> (false);
  const [isLoading, setLoading] = useState <boolean> (false);

  const bodyUser = {
    "name": 'user.name',
    "password": 'user.password',
    "email": 'user.email',
    "dateRegistration": `${new Date()}`,
    "age": 1,
    "coords": {
        "latitude": 23432,
        "longitude": 23432,
        "city": "23432",
    },
    "role": "user",
  };

  const addUsers = ()=> {

    setLoading(true);


    dispatch(formValidation({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: nameRef.current.value,
    }));



    if (
      nameRef.current.value &&
      checkEmail(emailRef.current.value) &&
      passwordRef.current.value
    ) {

      addUsersAction({
        ...bodyUser, 
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((value)=> {
        setFocus('signup')
        setLoading(false);
      });

      dispatch(formValidation({
        email: '',
        password: '',
        name: '',
      }));

      
      setValidation(false);
    
    } else {
      setValidation(true);
      setLoading(false);
    }
  }

  const checkEmail = (email: string): string => {

    const indexPlace = email.indexOf(' ');
    if (indexPlace >= 0) return '';

    const indexDoge = email.indexOf('@');
    if (indexDoge <= 0) return '';

    const fromDoge = email.slice(indexDoge+1, email.length);
    const indexDote = fromDoge.indexOf('.');
    if (indexDote <= 0 || indexDote == fromDoge.length-1 ) return '';

    const fromDoteSecond = fromDoge.slice(indexDote+1, fromDoge.length);
    const indexDoteSecond = fromDoteSecond.indexOf('.');
    if (indexDoteSecond >= 0) return '';

    return email;
  }



  useEffect(()=> {
    !!nameRef.current && (nameRef.current.value = formValidationc.name)
    !!passwordRef.current && (passwordRef.current.value = formValidationc.password)
    !!emailRef.current && (emailRef.current.value = formValidationc.email)
  },[{...formValidationc}])
  


  const registration = <div className={'popup_sign_up__body'}>

    <h2 className={'popup_sign_up__title'}>registration</h2>

    <LoadingAnimation userLoading={isLoading} />
    
    {

      !isLoading &&

      focus === 'signup' ?

      <h3> вы зарегистрировались </h3> :
      
      (
        isLoading || 
        (
          !!isUser.main.password ?
          <p>вы уже авторизовались</p> :
          <>

            <div className={'popup_sign_up__write_places'}>
              <InputText
                isPlaceholder="name" 
                isRef={nameRef}
              />

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
              validation && 
              
              <div>
                {
                  (!!checkEmail(emailRef.current.value) || <p>неверно указана электронная почта</p>)
                }
                {
                  !!nameRef.current.value || <p>вы не указали имя</p>
                }
                {
                  !!passwordRef.current.value || <p>вы не указали пароль</p>
                }
              </div>
            }

            {
              focus === 'signup' &&
              <p>'регистрация прошла успешно'</p>
            }


            <div className={'popup_sign_up__btn'}>
              <Btn 
                isOnClick={()=> {
                  addUsers()
                  setFocus('')
                }}
                isText={'send'}
              />
            </div>
            
          </>
        )
      )
      
    }
  </div>


  const Popup = PopupHoc();

  return <Popup 
    close={()=> {
      closeOpen()
      setFocus('')
    }} 

    componentt={registration}
  /> 
}