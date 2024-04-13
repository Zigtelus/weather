import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../createApi";



const api = createAPI();



export const commentsAction = createAsyncThunk(
  'comments',
  async (articleId: string, thunkAPI) => {

    let secondPartURL = `/comments/${articleId}`;
    
    try {
      const res = await api.get<string>(`${secondPartURL}`);
      return res.data;
    } catch (error) {
      console.log('error ', error);
    };
      
  }
);