import './index.scss';
import { MouseEvent, MutableRefObject, useEffect, useRef, useState } from "react";
import LoadingAnimation from "src/helpers/LoadingAnimation";
import inputHoc from "src/hocs/inputs/inputHoc";
import PopupHoc from "src/hocs/popup";
import { useAppSelector } from "src/hooks/redux";
import { addUsersAction } from "src/store/users/actions/addUser.action";







export default function PopupSignUp({closeOpen}: {closeOpen: ()=> void}): JSX.Element {

  const Inpt = inputHoc();

  const isUser = useAppSelector(state => state.ussersReducer);

  const [formValidate, setFormValidate] = useState({
    "name": "",
    "password": "",
    "email": ""
  })

  const formRef = useRef() as MutableRefObject<HTMLFormElement>;

  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;

  setTimeout(()=> {
    nameRef.current.value = formValidate.name
    emailRef.current.value = formValidate.email
    passwordRef.current.value = formValidate.password
  })


  const [openAndClose, setOpenAndClose] = useState<boolean> (false);
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

    const formCurrent: HTMLFormElement = formRef.current
    const formData: FormData = new FormData(formCurrent)

    const formEmail = formData.get('email') as string
    const formPassword = formData.get('password') as string
    const formName = formData.get('name') as string


    setLoading(true);

    
    setFormValidate({
      email: formEmail,
      password: formPassword,
      name: formName,
    });



    if (
      !!formName &&
      checkEmail(formEmail) &&
      !!formPassword
    ) {

      addUsersAction({
        ...bodyUser, 
        name: formName,
        email: formEmail,
        password: formPassword,
      })
      .then((value)=> {
        setOpenAndClose(true)
        setLoading(false);
      });

      setFormValidate({
        email: '',
        password: '',
        name: '',
      });

      
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


  const sendForm = (e: MouseEvent<HTMLInputElement>) => {
    e.preventDefault()

    addUsers()
    setOpenAndClose(false)

  }


  


  const registration = 
  <form
    className={'popup_sign_up__body'}
    ref={formRef}
  >

    <h2 className={'popup_sign_up__title'}>registration</h2>

    <LoadingAnimation userLoading={isLoading} />
    
    {

      !isLoading &&

      !!openAndClose ?

      <h3> вы зарегистрировались </h3> :
      
      (
        isLoading || 
        (
          !!isUser.main ?
          <p>вы уже авторизовались</p> :
          <>

            <div className={'popup_sign_up__write_places'}>
              <Inpt
                isPlaceholder="name" 
                isRef={nameRef}
                isName={"name"}
              />

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
              validation && 
              
              <div>
                {
                  (!!checkEmail(formValidate.email) || <p>неверно указана электронная почта</p>)
                }
                {
                  !!formValidate.name || <p>вы не указали имя</p>
                }
                {
                  !!formValidate.password || <p>вы не указали пароль</p>
                }
              </div>
            }

            {
              !!openAndClose &&
              <p>'регистрация прошла успешно'</p>
            }


            <div className={'popup_sign_up__btn'}>

              <Inpt 
                isType={"submit"}
                isOnClick={(e)=> sendForm(e)}
              />
              
            </div>
            
          </>
        )
      )
      
    }
  </form>


  const Popup = PopupHoc();

  return <Popup 
    close={()=> {
      closeOpen()
      setOpenAndClose(false)
    }} 
    isClassNamePopupBG={'popup_bg__signUp'}
    isClassNamePopup={'popup__signUp'}

    componentt={registration}
  /> 
}