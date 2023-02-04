import './index.scss';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { removeCommentsAction } from 'src/store/comments/actions/removeComment.action';
import month from 'src/helpers/months';
import { remakeCommentsAction } from 'src/store/comments/actions/remakeComment.action';
import { CommentArticle, removeComment } from 'src/store/comments/slices/comments.slice';
import { MutableRefObject, useRef, useState } from 'react';

type Props = {
  articleId: string;
  userId?: string;
  commentData: CommentArticle
}


function Comment(
  {articleId, userId, commentData}: Props
  // {text: string, commentId: string, articleId: string, name: string, dateCreation: string, auterId: string, userId: string}
):JSX.Element {

  const commentId = commentData.commentId
  const comments = useAppSelector(state => state.commentsReducer.main)
  const refTextComment = useRef() as MutableRefObject<HTMLTextAreaElement>
  const commentRef = useRef() as MutableRefObject<HTMLDivElement>

  // commentRef.current.innerHTML = 
  // const qqq = ()=> {
  //   const URL = 'https://weather-back-deploy.herokuapp.com/main/api/users/b1e741c5-46ba-4705-91e7-b754ec3df054'

  const [chengeComment, setChengeComment] = useState<boolean>(false)
  //   fetchSend(URL)
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  // }

  // function fetchSend(URL: string) {
  //   return fetch(URL, {
  //     method: 'GET'
  //   })
  // }


  const dispatch = useAppDispatch()


  // console.log(dateCreation)
  // console.log(new Date(dateCreation).getDate())
  const dateCreatin: Date = new Date(commentData.dateCreation)
  const monthCreation = dateCreatin.getMonth()
  const dateInMonth = dateCreatin.getDate()

  const sendForm =()=> {
    
    if (chengeComment) {
      commentData.text = refTextComment.current.value
      remakeCommentsAction({articleId, commentData})
    }
    setChengeComment(!chengeComment)
    
  }


  return <div 
    className={'article__comment'}
  >


    <div 
      className={'article__comment__top'}
      ref={commentRef}
    >
      <div>{commentData.name}</div>
      <div>
        <span>{dateInMonth} </span>
        <span>{month(monthCreation+1)}</span>
        <span></span>
      </div>
    </div>


    <span className={'article__comment__body'}>
    {
      chengeComment ? 
      <textarea
        ref={refTextComment}
        defaultValue={commentData.text}
      ></textarea> :
      commentData.text
    }
    </span>

    <div>
      {/* <span>likes {likes.length} </span>
      <span>dislikes {dislikes.length}</span> */}
    </div>
    {!!userId && commentData.auterId === userId && 
      <>
        <button
          onClick={()=> {
            removeCommentsAction({articleId, commentId, userId})
            .then(req => {
              console.log(req)
              if (!!req.articleId) {
                const q = comments.comments.filter(item => item.commentId !== commentId)
                dispatch(removeComment(q))
              }
            })
            .catch(req => {
              console.log('wwwww')
            })

          }}
        >delete</button>
        <button
          onClick={()=> sendForm()}
        >remake</button>
      </>
    
    }
  </div>
}


export default Comment;