import './index.scss';
import { MouseEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { articlesAction } from "src/store/articles/actions/articles.action";
import { NavLink } from 'react-router-dom';
import { removeArticle } from 'src/store/articles/actions/removeArticle.action';
import { sendTextForPush } from 'src/helpers/sendPushMessage';




function Articles(): JSX.Element {

  const dispatch = useAppDispatch();
  const selection = useAppSelector(state => state.articlesReducer.main);
  const user = useAppSelector(state => state.ussersReducer.main);

  useEffect(()=> {
    dispatch(articlesAction(''))
  },[0]);
  

  const adminOrNot = user?.role === 'admin'


  function fetchSend(URL: string, body: any) {
    return fetch(URL, {
      method: 'PATCH',
      body: JSON.stringify({
        likes: body.likes,
        dislikes: body.dislikes,
        views: body.views,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }


  const deleteArticle =()=> {
    // dispatch(removeArticle(selection))
  }




  const numberPush = useAppSelector(state => state.pushMessageReducer.numberPush)
  return  <div className='blog__articles'>
      {
        !!selection[0].article &&
        selection.map((item, index) => 
        <NavLink 
          key={index}
          to={`/blog/${item.articleId}`} 
          className='articles__item'
          style={{"backgroundImage": `url(http://localhost:3000/uploads/${item.cover})`}}
        >
          {
            !!user &&
            adminOrNot &&
            <button
              className={"articles__item__delete"}
              onClick={(e)=> {
                e.preventDefault()

                item.articleId === user.userId ?
                dispatch(removeArticle({articleId: item.articleId, userId: user.userId})) :
                sendTextForPush(`Вы не тот администратор`, numberPush, dispatch)
              }}
            >delete</button>
          }

          <h4>{item.title}</h4>
          <div><p>{item.description}</p></div>

          {/* <div className='articles__statics'>
            <div>likes {item.statistics.likes.length}</div>
            <div>views {item.statistics.views.length}</div>
            <div>dislikes {item.statistics.dislikes.length}</div>
          </div> */}
          
          {/* {
            !!item.cover
            && 
            <img 
              style={{width: '100%', position: "absolute", top: '0px', left: '0px', opacity: '0.1'}}
              src={`http://localhost:3000/uploads/${item.cover}`}
              alt="" 
            />
          } */}
        </NavLink>
        )
      }
    </div>
}

export default Articles;