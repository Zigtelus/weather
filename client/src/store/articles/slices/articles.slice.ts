import { createSlice } from "@reduxjs/toolkit";
import { Article } from "src/types/articles/articles";
import { articlesAction } from "../actions/articles.action";
import { removeArticle } from "../actions/removeArticle.action";



export type InitialState = {
  "main": Article[] | null;
  "loading": boolean;
};

const initialState: InitialState = {
  "main": null,
  "loading": false
};

export const articlesSlice = createSlice({
  name: 'articlesSlice',
  initialState,
  reducers: {
    articles(state, action) {
      // state.main = [...action.payload].reverse();
    },
    addArticle(state, action) {
      if (state.main) {
        state.main = [...state.main.reverse(), action.payload].reverse();
      } else {
        state.main = [action.payload];
      }
      // state.main = {...action.payload}
    }
  },
  extraReducers: {
    [articlesAction.fulfilled.type]: (state, action) => {
      console.log(action.payload)
      state.main = [...action.payload].reverse();
      state.loading = false;
    },
    [articlesAction.pending.type]: (state, action) => {
      state.loading = true;
    },
    [articlesAction.rejected.type]: (state, action) => {
      state.loading = false;
    },


    [removeArticle.fulfilled.type]: (state, action) => {
      console.log('rrrr', action);
      const stateMain = state.main?.filter(article => article.articleId !== action.payload.articleId)

      if (stateMain) {
        state.main = stateMain
      }
    },
    [removeArticle.pending.type]: (state, action) => {
    },
    [removeArticle.rejected.type]: (state, action) => {
    }
  }
})


export const {articles, addArticle} = articlesSlice.actions
export default articlesSlice.reducer;