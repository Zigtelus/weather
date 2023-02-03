import { createAPI } from "../createApi";
import { CommentArticle } from "../slices/comments.slice";



const api = createAPI();



export const remakeCommentsAction = 
  async ({articleId, commentData}: {articleId: string, commentData: CommentArticle}) => {

    let secondPartURL = `/comment/${articleId}`;
    try {
      const res = await api.patch(`${secondPartURL}`, {
        ...commentData
      });
      return res.data;
    } catch (error) {
      console.log('error ', error);
    };
      
  }