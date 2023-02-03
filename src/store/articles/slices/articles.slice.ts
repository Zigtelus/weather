import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "src/types/articles/articles";
import { articlesAction } from "../actions/articles.action";



export type InitialState = {
  "main": Article[]
}

const initialState: InitialState = {
  "main": [ 
    {
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
  ]
};

export const articlesSlice = createSlice({
  name: 'articlesSlice',
  initialState,
  reducers: {
    articles(state, action) {
      // state.main = [...action.payload].reverse();
    },
    article(state, action) {
      // state.main = {...action.payload}
    }
  },
  extraReducers: {
    [articlesAction.fulfilled.type]: (state, action) => {
      state.main = [...action.payload].reverse();
    },
    [articlesAction.pending.type]: (state, action) => {
        
    },
    [articlesAction.rejected.type]: (state, action) => console.log('error'),
  }
})


export const {articles, article} = articlesSlice.actions
export default articlesSlice.reducer;