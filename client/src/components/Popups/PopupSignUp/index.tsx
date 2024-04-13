// modules
import { 
  MouseEvent, 
  MutableRefObject, 
  useEffect, 
  useRef, 
  useState 
} from "react";

// styles
import './index.scss';

// helpers
import LoadingAnimation from "../../../helpers/LoadingAnimation";

// actions
import { addUserAction } from "../../../store/users/actions/addUser.action";

// HOOKs
import { useAppDispatch, useAppSelector } from "src/hooks/redux";

// HOCs
import inputHoc from "src/hocs/inputs/inputHoc";
import PopupHoc from "src/hocs/popup";
import { addUser } from "src/store/users/slice/users.slice";


export default function PopupSignUp({closeOpen}: {closeOpen: ()=> void}): JSX.Element {

  const user = useAppSelector(state => state.ussersReducer);

  console.log(user)
  const isLoading    = user.addUser.loading;
  const errorConnect = user.addUser.errorConnect;
  const message      = user.addUser.message;

  const dispatch = useAppDispatch();

  const Popup = PopupHoc();
  const Input = inputHoc();


  const prevStoreStateRef = useRef(null);
  const formRef           = useRef() as MutableRefObject<HTMLFormElement>;
  const nameRef           = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef          = useRef() as MutableRefObject<HTMLInputElement>;
  const passwordRef       = useRef() as MutableRefObject<HTMLInputElement>;

  const [isOpenAndClose  , setOpenAndClose]   = useState <boolean> (false);
  const [isValidation    , setValidation]     = useState <boolean> (false);
  const [isLostConnection, setLostConnection] = useState <boolean> (false);
  const [formValidate    , setFormValidate]   = useState ({
    name     : "",
    password : "",
    email    : ""
  });
  
  // nameRef    .current.value = formValidate.name;
  // emailRef   .current.value = formValidate.email;
  // passwordRef.current.value = formValidate.password;

  const bodyUser = {
    "name": '',
    "password": '',
    "email": '',
    "dateRegistration": `${new Date()}`,
    "age": 1,
    "coords": {
        "latitude": 23432,
        "longitude": 23432,
        "city": "23432",
    },
    "role": "user",
  };

  const sendForm = (e: MouseEvent<HTMLInputElement>) => {
    dispatch(addUser(''));
    e.preventDefault();
    addUsers();
    setOpenAndClose(false);
  };

  // ДЕЛАЮ ОТОБРАЖЕНИЕ АВОТОРИЗАЦИИ или ОШИБКА
  // СРАВНИВАЮ СТАРЫЙ И НОВЫЙ СТОР
  // useEffect(()=> {
  //   const prevStoreState = prevStoreStateRef.current;
  //   if (prevStoreState !== undefined) {
  //     console.log('Предыдущее состояние стора:', prevStoreState);
  //     console.log('Текущее состояние стора:', user);
  //     // Выполняйте здесь нужные действия в зависимости от изменения стора
  //   }
  // }, [user]);

  const checkAutorization = isOpenAndClose && <h3> вы зарегистрировались </h3>;

  return <Popup 
    close={()=> {
      dispatch(addUser(''));
      closeOpen()
      setOpenAndClose(false)
    }}
    isClassNamePopupBG = {'popup_bg__signUp'}
    isClassNamePopup   = {'popup__signUp'}

    componentt={registration()}
  /> 

  function validation() {
    return <>{
      isValidation 
      && 
      <div>
        {(!!checkEmail(formValidate.email) || <p>неверно указана электронная почта</p>)}
        {!!formValidate.name               || <p>вы не указали имя</p>}
        {!!formValidate.password           || <p>вы не указали пароль</p>}
      </div>
    }</>;
  };
  
  function registration() {
    return <form
      className={'popup_sign_up__body'}
      ref={formRef}
    >
  
      <h2 className={'popup_sign_up__title'}>registration</h2>
  
      <LoadingAnimation userLoading={isLoading} />
      
      {
  
        !isLoading        &&
        checkAutorization ||
  
        (
          isLoading || 
          (
            <>
              {message     && <p>{message}</p>}
              {!!message || !!user.main && <p>вы уже авторизовались</p>}

              {
                !message && !user.main &&

                <>
              <div className={'popup_sign_up__write_places'}>
                <Input
                  isPlaceholder="name" 
                  isRef={nameRef}
                  isName={"name"}
                />
  
                <Input
                  isPlaceholder="e-mail" 
                  isRef={emailRef}
                  isType={"email"}
                  isName={"email"}
                />
  
                <Input
                  isPlaceholder="password" 
                  isRef={passwordRef}
                  isType={"password"}
                  isName={"password"}
                />
              </div>

              {
                validation()
              }
              
              {user.errorConnect  && <p>{user.errorConnect}</p>}
              {isLostConnection   && <p>ошибка соединения</p>}
              {isOpenAndClose     && <p>'регистрация прошла успешно'</p>}
              {errorConnect       && <p>{errorConnect}</p>}

  
  
              <div className={'popup_sign_up__btn'}>
  
                <Input 
                  isType={"submit"}
                  isOnClick={(e)=> sendForm(e)}
                />
                
              </div>
              </>
              
            }
            </>
          )
        )
        
      }
    </form>
  };

  function checkEmail (email: string): string {

    const indexPlace = email.indexOf(' ');
    if (indexPlace >= 0) return '';

    const indexDoge = email.indexOf('@');
    if (indexDoge <= 0) return '';

    const fromDoge = email.slice(indexDoge+1, email.length);
    const indexDote = fromDoge.indexOf('.');
    if (indexDote <= 0 || indexDote === fromDoge.length-1 ) return '';

    const fromDoteSecond = fromDoge.slice(indexDote+1, fromDoge.length);
    const indexDoteSecond = fromDoteSecond.indexOf('.');
    if (indexDoteSecond >= 0) return '';

    return email;
  };

  function addUsers () {

    const formCurrent: HTMLFormElement = formRef.current;
    const formData   : FormData        = new FormData(formCurrent);

    const formEmail    = formData.get('email')    as string;
    const formPassword = formData.get('password') as string;
    const formName     = formData.get('name')     as string;

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

      
      dispatch(addUserAction({
        ...bodyUser, 
        name: formName,
        email: formEmail,
        password: formPassword,
      }))
      // .then((value)=> {
      //   setOpenAndClose(true);
      // })
      // .catch(error => {
      //   setLostConnection(true);
      //   console.log('add user error');
      // })
      // .finally(() => {
      //   setLoading(false);
      // })

      setFormValidate({
        email: '',
        password: '',
        name: '',
      });
      
      setValidation(false);
    
    } else {
      setValidation(true);
    };
  };

}