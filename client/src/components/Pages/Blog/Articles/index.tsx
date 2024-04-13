import './index.scss';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { articlesAction } from "../../../../store/articles/actions/articles.action";
import { NavLink } from 'react-router-dom';
import { removeArticle } from '../../../../store/articles/actions/removeArticle.action';
import LoadingAnimation from '../../../../helpers/LoadingAnimation';
import { base_url, protocol } from '../../../../constants';
import { addText } from '../../../../store/pushMessage/pushMessage.slice';




function Articles(): JSX.Element {

  const dispatch  = useAppDispatch();
  const selection = useAppSelector(state => state.articlesReducer.main);
  const loading   = useAppSelector(state => state.articlesReducer.loading);
  const user      = useAppSelector(state => state.ussersReducer.main);

  useEffect(()=> {
    dispatch(articlesAction(''));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[0]);
  

  const adminOrNot = user?.role === 'admin';

  return <>
    {
      loading
      ? 
      <div style={{'display': 'flex', justifyContent: 'center'}}><LoadingAnimation userLoading={loading} /></div> 
      :
      <div className='blog__articles'>
        {
          !!selection
          ?
          madeArticles(selection) // статьи
          :
          <div>соединение было разорвано</div>
        }
      </div>
    }
  </>;

  function madeArticles(selection: any) {
    return selection.length
    ?
    selection.map((item: any, index: any) => console.log('item auterId userId', user) as any ||
    <NavLink 
      key={index}
      to={`/blog/${item.articleId}`} 
      className='articles__item'
      style={{"backgroundImage": `url(${protocol}://${base_url}/uploads/${item.cover})`}}
    >
      {
        checkArticleOwnership(user, item) && 
        // adminOrNot &&

        //
        <button
          className={"articles__item__delete"}
          onClick={(e)=> {
            e.preventDefault();

            if (user?.email === "admin@admin.admin") {
              dispatch(removeArticle({articleId: item.articleId, userId: item.auterId}));
            } else {
              dispatch(removeArticle({articleId: item.articleId, userId: user!.userId}));
            }
            // item.articleId === user.userId ?
            // dispatch(removeArticle({articleId: item.articleId, userId: user.userId})) :

            // dispatch(addText.addText('Вы не тот администратор'))
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
          src={`https://weather-back-deploy.herokuapp.com/uploads/${item.cover}`}
          alt="" 
        />
      } */}
    </NavLink>
    )
    :
    <div>нет ни одной статьи</div>
  };


  function checkArticleOwnership(user: any, article: any) {
    if (user) {
      if (user.email === "admin@admin.admin") {
        return true;
      } else {
        return user.userId === article.auterId;
      }
    } else {
      return false;
    }
  }
}

export default Articles;