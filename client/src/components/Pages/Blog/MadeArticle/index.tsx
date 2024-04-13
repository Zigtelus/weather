import { MouseEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import './index.scss'
import { base_url, protocol } from '../../../../constants';
import { addText } from '../../../../store/pushMessage/pushMessage.slice';
import { addArticle } from '../../../../store/articles/slices/articles.slice';

type Props = {
  idUser?: string;
  userName?: string;
  roleUser?: string;
  showForm: boolean;
  formRef: MutableRefObject<HTMLFormElement>;
  setHeightFormm: any;
};

function MadeArticle({idUser, userName, roleUser, showForm, formRef, setHeightFormm}: Props): JSX.Element {

  const adminOrNot = roleUser === 'admin' || roleUser === 'user';

  const [isWrong, setIsWrong] = useState<boolean>(false);

  const textRef   = useRef() as MutableRefObject<HTMLTextAreaElement>;
  const fileRef   = useRef() as MutableRefObject<HTMLInputElement>;
  const submitRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [textHeight, setTextHeight] = useState<string>('auto');
  const [form, setForm]             = useState<any>({
    title: '',
    description: '',
    image: '',
    "photo description": '',
    article: ''
  });

  useEffect(()=> {
    setHeightFormm(formRef.current.offsetHeight);
  }, [textHeight])

  const dispatch = useAppDispatch();
  
  const sendForm = (
    e: MouseEvent<HTMLInputElement>, auterId: string, auterName: string
  )=> {
    if (validationForm()) {
      setIsWrong(false);

      clearStateForm();
      e.preventDefault();
      const formCurrent: HTMLFormElement = formRef.current;
      const form = new FormData(formCurrent);
      form.append("auterId", auterId);
      form.append("auter", auterName);
  
  
      const URL = `${protocol}://${base_url}/main/api/article/upload`;
      getData(URL, 'POST', form)
      .then((response) => {
        return response;
      })
      .then((data: any) => {
        dispatch(addArticle(JSON.parse(data)))
      })
    } else {
      setIsWrong(true);
    }
  }

  async function getData(url: string, method: string, body: any) {
    return new Promise((res, req) => {
      const xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.onload = ()=> {
        res(xhr.response)
      }
      xhr.send(body)
    })

  }

  console.log(form);
  const changeStateForm =(e: any)=> {

    if (adminOrNot) {
      const {name, value} = e.target;
      setForm((prevState: any) => {
        return {
          ...prevState,
          [name]: value
        };
      });
    };
  };

  const clearStateForm =()=> {
    const clearStateForm: any = {};
    for (let item in form) {
      clearStateForm[`${item}`] = '';
    };

    setForm(()=> ({...clearStateForm}));
  }

  console.log('clearStateForm', form)
  return <>
    <form 
    style={{position: "relative"}}
      className={`new_article ${adminOrNot ? 'new_article--active' : 'new_article--notActive'}`}
      ref={formRef}
      // onClick={()=> adminOrNot || dispatch(addText.addText1('вы не администратор'))}
      onClick={()=> {
        console.log('555555')
        // dispatch(addText.changeNumberPush(numberPush))
        showWarning()
      }}
    >

      {/* {
        adminOrNot || <div style={{width: "100%", height: "100%", position: "absolute", left: "0px", top: "0px"}}></div>
      } */}


      <fieldset 
        className={'new_article__title'}
      >
        {/* <label htmlFor="pwd" > H1: </label> */}
        <input 
          name="title"
          type="text"
          placeholder="H1"
          onChange={changeStateForm}
          value={form.title}
        />
        {/* <textarea name="" cols=1" rows="1" placeholder="" /> */}
        <textarea 
          name="description" 
          cols={5} 
          rows={5}
          placeholder="Article description"
          style={{"margin": '15px 0 0'}}
          onChange={changeStateForm}
          value={form.description}
        />
      </fieldset>

      <fieldset className={'new_article__file'}>

          <label 
            htmlFor="file"

          >
            <span>Choose file</span>
            <span>{form.image || "Choose file"}</span>
          </label>
          <input 
            ref={fileRef}
            name="image"
            type="file"
            id="file"
            accept="image/*"
            onChange={changeStateForm}
            onClick={(event)=> {
              !adminOrNot && event.preventDefault();
            }}
            disabled={!adminOrNot}
            value={form.image}
          />

        <textarea 
          name="photo description" 
          cols={5} 
          rows={5}
          placeholder="Photo description"
          style={{"margin": '15px 0 0'}}
          onChange={changeStateForm}
          value={form['photo description']}
        />
      </fieldset>


      <fieldset className={'new_article__text'}>
        {/* <label htmlFor="pwd" > Text: </label> */}
        <textarea 
          name="article" 
          id="" 
          cols={100} 
          rows={10} 
          placeholder="Text"
          onKeyUp={()=> {
            setTextHeight(`${textRef.current.scrollHeight}px`);
          }}
          style={{height: textHeight}}
          ref={textRef}
          value={form.article}
          onChange={changeStateForm}
        />
      </fieldset>

      {isWrong && showMissingFieldsAlert()}

      {
        <input 
          className="new_article__submit"
          ref={submitRef}
          type="submit"
          onClick={(e)=> {
            // validationForm()
            e.preventDefault();
            if (adminOrNot) {
              !!userName && 
              !!idUser && 
              sendForm(e, idUser, userName);
            } else {
              e.preventDefault();
            }
          }}
        />
      }

    </form>

   {/* { !!statePush && <Push text={'вы не администратор'}/> } */}

  </>

  function showWarning() {
    adminOrNot || dispatch(addText.addText("You don't have enough rights"))
  }

  function showMissingFieldsAlert() {
    let str = '';

    for (let item in form) {
      if (!form[item]) {
        str += `<p>вы не указали ${item}</p>`
      };
    };

    const sanitizedHtml = { __html: str }; 
    return <div dangerouslySetInnerHTML={sanitizedHtml} ></div>;
  }

  function validationForm() {
    for (let item in form) {
      if (!form[item]) {
        return false;
      };
    };

    return true;
  }
}


export default MadeArticle;