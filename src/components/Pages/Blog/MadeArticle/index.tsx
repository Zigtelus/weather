import { MouseEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import { sendTextForPush } from 'src/helpers/sendPushMessage';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { addText } from 'src/store/pushMessage/pushMessage.slice';
import './index.scss'

type Props = {
  idUser?: string;
  userName?: string;
  roleUser?: string;
  showForm: boolean;
  formRef: MutableRefObject<HTMLFormElement>;
}

function MadeArticle({idUser, userName, roleUser, showForm, formRef}: Props): JSX.Element {

  const adminOrNot = roleUser === 'admin'

  const textRef = useRef() as MutableRefObject<HTMLTextAreaElement>
  const fileRef = useRef() as MutableRefObject<HTMLInputElement>
  const submitRef = useRef() as MutableRefObject<HTMLInputElement>

  const [textHeight, setTextHeight] = useState<string>('auto')
  const dispatch = useAppDispatch()

  // const Push = PusPopuphHoc()
  const [statePush, setStatePush] = useState<number>(0)
  
  useEffect(()=> {
    setStatePush(0)
  }, [showForm])
  

  const sendForm = (
    e: MouseEvent<HTMLInputElement>, auterId: string, auterName: string
  )=> {
    e.preventDefault()
    const formCurrent: HTMLFormElement = formRef.current
    const form = new FormData(formCurrent)
    form.append("auterId", auterId)
    form.append("auter", auterName)


    const URL = "http://localhost:3000/main/api/article/upload";
    getData(URL, 'POST', form)
    .then((response) => {
      return response;
    })
    .then((data: any) => {
      console.log(JSON.parse(data));
    });
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


  const numberPush = useAppSelector(state => state.pushMessageReducer.numberPush)
  // const sendTextForPush = (text: string, isNumber: number) => {
  //     type AddText = typeof addText;
  //     type TAddText = keyof AddText;
  //     const actions = (Object.keys(addText) as TAddText[])[isNumber]

  //     dispatch(addText[`${actions}`](text))
  // }

  return <>
    <form 
      className={`new_article ${adminOrNot ? 'new_article--active' : 'new_article--notActive'}`}
      ref={formRef}
      // onClick={()=> adminOrNot || dispatch(addText.addText1('вы не администратор'))}
      onClick={()=> {
        // dispatch(addText.changeNumberPush(numberPush))
        adminOrNot || 
        sendTextForPush(`You don't have enough rights`, numberPush, dispatch)
      }}
    >

      <fieldset className={'new_article__title'}>
        {/* <label htmlFor="pwd" > H1: </label> */}
        <input name="title" type="text" placeholder="H1" disabled={!adminOrNot} />
        {/* <textarea name="" cols=1" rows="1" placeholder="" /> */}
        <textarea 
          name="description" 
          cols={5} 
          rows={5}
          placeholder="Article description"
          style={{"margin": '15px 0 0'}}
          disabled={!adminOrNot}
        />
      </fieldset>

      <fieldset className={'new_article__file'}>
        {/* <label htmlFor="pwd" > H1: </label> */}
        <input 
          ref={fileRef}
          name="image"
          type="file"
          accept="image/*"
          onChange={(e: any)=> {
            if (!!fileRef.current.files) {
              const file = fileRef.current.files[0]
            }
          }}
          disabled={!adminOrNot}
        />

        <textarea 
          name="Photo_description" 
          cols={5} 
          rows={5}
          placeholder="Photo description"
          style={{"margin": '15px 0 0'}}
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
            setTextHeight(`${textRef.current.scrollHeight}px`)
          }}
          style={{height: textHeight}}
          ref={textRef}
          disabled={!adminOrNot}
        />
      </fieldset>

      {
        <input 
          className="new_article__submit"
          ref={submitRef}
          type="submit"
          onClick={(e)=> 
            !!userName && 
            !!idUser && 
            sendForm(e, idUser, userName)
          }
          disabled={!adminOrNot}
        />
      }

    </form>

   {/* { !!statePush && <Push text={'вы не администратор'}/> } */}

  </>
}


export default MadeArticle;