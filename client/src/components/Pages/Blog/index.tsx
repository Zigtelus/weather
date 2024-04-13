import './index.scss';
import Articles from './Articles';
import { useAppSelector } from '../../../hooks/redux';
import MadeArticle from './MadeArticle';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

function Blog(): JSX.Element {
  const user       = useAppSelector(item => item.ussersReducer.main);
  const formRef    = useRef() as MutableRefObject<HTMLFormElement>;
  const heightForm = !!formRef.current && formRef.current.offsetHeight;
  const [heightFormm, setHeightFormm] = useState<number>(0);
  console.log('heightFormm', heightFormm);

  // setHeightFormm(heightForm)
  const [statusButton, setStatusButton] = useState<boolean>(false);

  useEffect(()=> {
    setHeightFormm(heightForm)
  }, [heightForm]);

  return <div className='blog'>

    <button
      style={{
        "color"           : "rgb(178, 177, 179)",
        "backgroundColor" : "rgb(85, 81, 88)",
        "padding"         : "15px",
        "width"           : "100%",
        "maxWidth"        : "320px",
        "marginBottom"    : "15px"
      }}
      onClick={()=> setStatusButton(!statusButton)}
    >{statusButton ? 'collapse' : 'expand'} the form for writing an article</button>
    {/* <Btn 
      isOnClick={()=> setStatusButton(!statusButton)}
      isText={statusButton ? 'свернуть форма для написания статьи' : 'развернуть форма для написания статьи'}
    /> */}
    { 
      // statusButton && 
      <div
        className={'blog__contain_form'}
        style={{height: `${statusButton ? heightFormm + 'px' : '0px'}`}}
        // style={{height: `${statusButton ? heightForm + 'px' : '0px'}`}}
      >
        {
          <MadeArticle 
            idUser   = {user?.userId} 
            userName = {user?.name} 
            roleUser = {user?.role}
            showForm = {statusButton} 
            formRef  = {formRef} 
            setHeightFormm = {setHeightFormm}
          />
        }
      </div>
    } 
    {/* {roleUser && <MadeArticle idUser={user.userId} />} */}
    <Articles />

  </div>
}

export default Blog;