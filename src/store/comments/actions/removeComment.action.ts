import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../createApi";



const api = createAPI();



export const removeCommentsAction = 
  async ({articleId, commentId, userId}: {articleId: string, commentId: string, userId: string}) => {

    let secondPartURL = `/comment/${articleId}/${commentId}`;
    
    try {
      const res = await api.post(`${secondPartURL}`, {
        "userId": userId
      });
      return res.data;
    } catch (error) {
      console.log('error ', error);
    };
      
  }