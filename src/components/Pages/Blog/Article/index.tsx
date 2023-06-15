import './index.scss';
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import Pictures from "src/pictures";
import { commentsAction } from 'src/store/comments/actions/comments.action';
import Comment from '../Comment';
import axios from 'axios';
import { articleAction } from 'src/store/articles/actions/article.action';
import ReactGA from 'react-ga';
import { sendTextForPush } from 'src/helpers/sendPushMessage';
import inputHoc from 'src/hocs/inputs/inputHoc';
import { addComment } from 'src/store/comments/slices/comments.slice';


function Article(): JSX.Element {


  const {id} = useParams();
  const article = useAppSelector(state => state.articleReducer.main);
  const user = useAppSelector(state => state.ussersReducer.main);
  const numberPush = useAppSelector(state => state.pushMessageReducer.numberPush)
  // const article = selector.filter(item => item.articleId === id)[0];
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;
  
  const [showFullImg, setShowFullImg] = useState<boolean>(false);
  const [imgContainHeight, setImgContainHeight] = useState<number>(250);
  const imgRef = useRef() as MutableRefObject<HTMLImageElement>;

  const textRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const [textHeight, setTextHeight] = useState<string>('auto')

  const authorizationOrNot = user?.role === 'user' || user?.role === 'admin'
  const articleId = !!id ? id : '';

  const Inpt = inputHoc()

  

  setTimeout(()=> {
    !!imgRef.current && 
    imgRef.current.offsetHeight > 250 && 
    setImgContainHeight(imgRef.current.offsetHeight)

  },0)

  // console.log(ReactGA)
  

  const dispatch = useAppDispatch()
  const comments1 = useAppSelector(state => state.commentsReducer.main)

  if (!!id) {
    // commentsInArtics.articleId = id
    // articleLinks.articleId = id
  }

  
  useEffect(()=> {
    if (!!id) {
      dispatch(commentsAction(id))
      dispatch(articleAction(id))
    }

    ReactGA.pageview('https://zigtelus.github.io/weather/')
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])




  const URL: string = `https://weather-back-deploy.herokuapp.com/main/api/comments/comment/${id}`
  function sendForm(e: any, user: any) {

    e.preventDefault()
    const formCurrent: HTMLFormElement = formRef.current
    const formData: FormData = new FormData(formCurrent)

    sendAxios(URL, user, formData)
    .then((req)=> {
      if (!!req.data) {

        textRef.current.value = ''
        dispatch(addComment([req.data, ...comments1.comments]))
        !!id && dispatch(commentsAction(id))
      }
    })
  }

  async function sendAxios(
    URL1: string, user: {userId: string, name: string}, formData1: any
  ) {
    return await axios({
      method: "POST",
      url: URL1,
      data: {
        "auterId": user.userId,
        "text": formData1.get('text'),
        "name": user.name,
        "family": user.name
      },
    })
  }



  // function PreventDefault(
  //   e: MouseEvent<HTMLDivElement>, articleId: string, likeDislike: string, userId: string
  // ) {
  //   e.preventDefault()

  //   const form = {
  //     likes: [
  //     ],
  //     dislikes: [
  //     ],
  //     views: [
  //       userId
  //     ]
  //   } as {likes: string[], dislikes: string[], views: string[]}

  //   const form1 = {...form}

  //   const URL = `https://weather-back-deploy.herokuapp.com/main/api/article/${articleId}/statisctics`;


  //   likeDislike === 'likes' && form1.likes.push(userId)
  //   likeDislike === 'dislikes' && form1.dislikes.push(userId)

    
  //   fetchSend(URL, form1)
  //   .then((response) => response.json())
  //   .then((json) => json);
  // }

  // function fetchSend(URL: string, body: any) {
  //   return fetch(URL, {
  //     method: 'PATCH',
  //     body: JSON.stringify({
  //       likes: body.likes,
  //       dislikes: body.dislikes,
  //       views: body.views,
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  // }



  return <div className='blog'>
      <div className={'article'}>

        {/* <div className="article__statics-container">
          <div className="article__statics">
            <div
              className={"article__statics__likes"}
              onClick={(e)=> PreventDefault(e, articleId, 'likes')}
              onMouseEnter={(e)=> console.log('11')}
              onMouseLeave={(e)=> console.log('11')}
            // >likes {true ? item.statistics.likes.length : '+'}</div>
            >likes {article.statistics.likes.length}</div>
            <div
              className={"article__statics__views"}
            >views {article.statistics.views.length}</div>
            <div
              className={"article__statics__dislikes"}
              onClick={(e)=> PreventDefault(e, article.articleId, 'dislikes')}
            >dislikes {article.statistics.dislikes.length}</div>
          </div>
        </div> */}






        <h2>{article.title}</h2>

        <div className={'article__picture'}>
          <div 
            className={'article__picture_contain'}
            onMouseEnter={()=> {
              imgContainHeight > 200 && setShowFullImg(!showFullImg)
            }}
            onMouseLeave={()=> {
              imgContainHeight > 200 && setShowFullImg(!showFullImg)
            }}
            style={{height: `${showFullImg ? imgContainHeight : 250}px`}}
          >
            <Pictures isSrc={article.cover} isRef={imgRef}/>
          </div>
        </div>
        <p>{article.article}</p>
      </div>

      <form
        className={`article__made_comment ${authorizationOrNot ? '' : 'article__made_comment--not_active'}`}
        ref={formRef}
        onClick={()=> authorizationOrNot || sendTextForPush('you are not authorized', numberPush, dispatch)}
      >

        <fieldset>
        {/* <Inpt
          isName={'text'}
          isType={'text'}
        /> */}

        
        {/* <TxtareaHoc isRef={textRef} isName="text"/> */}
        
        <textarea 
          name="text" 
          id="" 
          cols={100} 
          rows={6} 
          placeholder="Text"
          onKeyUp={()=> {
            setTextHeight(`${textRef.current.scrollHeight}px`)
          }}
          style={{height: textHeight}}
          ref={textRef}
          disabled={!authorizationOrNot}
        />

        <Inpt
          isType={'submit'}
          isOnClick={(e)=> (!!user && sendForm(e, user))}
          isDisabled={!authorizationOrNot}
        />
        </fieldset>
      </form>

      {
        (!!comments1.articleId &&
        !!comments1.comments[0]) ? 
        comments1.comments.map(item => {
          return <Comment 
            key={item.commentId}
            articleId={articleId}
            userId={user?.userId}
            commentData={{...item}}
          />
        }) :
        <div>комментариев нет</div>
      }
    </div>
}

export default Article;