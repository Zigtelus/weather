import { createSlice } from "@reduxjs/toolkit";
import { Article } from "src/types/articles/articles";
import { articleAction } from "../actions/article.action";



export type InitialState = {
  "main": Article
}

const initialState: InitialState = {
  "main": {
    articleId: '',
    auter: '',
    title: '',
    article: '',
    description: '',
    cover: '',
    statistics: {
      likes: [],
      dislikes: [],
      views: []
    },
    dateLastEdit: {
      state: false,
      date: '',
    },
    datePublication: ''
  }
};

export const articlesSlice = createSlice({
  name: 'articlesSlice',
  initialState,
  reducers: {
    numberPlus(state, action) {
      /*
      без редюсера синхронного не срабатывает ассинхронный редюсер
      */
    }
  },
  extraReducers: {
    [articleAction.fulfilled.type]: (state, action) => {
      state.main = {...action.payload}
    },
    [articleAction.pending.type]: (state, action) => {
        
    },
    [articleAction.rejected.type]: (state, action) => console.log('error')
  }
})


export default articlesSlice.reducer;