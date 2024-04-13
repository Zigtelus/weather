import { createSlice } from "@reduxjs/toolkit";
import { commentsAction } from "../actions/comments.action";



export type CommentArticle = {
  commentId: string;
  auterId: string;
  name: string;
  family: string;
  text: string;
  likes: string[];
  dislikes: string[];
  dateCreation: string;
  dateLastEdit: {
    state: boolean;
    date: string;
  };
}

export type CommentsArticle = {
  articleId: string;
  commentsId: string;
  comments: CommentArticle[];
}

export type InitialState = {
  "main": CommentsArticle;
}

const initialState: InitialState = {
  "main": {
    articleId: '',
    commentsId: '',
    comments: [{
      commentId: '',
      auterId: '',
      name: '',
      family: '',
      text: '',
      likes: [],
      dislikes: [],
      dateCreation: '',
      dateLastEdit: {
        state: false,
        date: ''
      },
    }]
  }
};

export const commentsSlice = createSlice({
  name: 'commentsSlice',
  initialState,
  reducers: {
    addComment(state, action) {
      // state.main.comments = [...state.main.comments, {...action.payload}]
      state.main.comments = action.payload
    },
    removeComment(state, action) {
      console.log(action.payload)
      state.main.comments = action.payload
      
    }
  },
  extraReducers: {
    [commentsAction.fulfilled.type]: (state, action) => {
      state.main = {...action.payload}
      if (!!action.payload.comments) {
        state.main.comments = [...action.payload.comments.reverse()]
      } else {
        state.main.comments = []
      }
    },
    [commentsAction.pending.type]: (state, action) => {
        
    },
    [commentsAction.rejected.type]: (state, action) => console.log('error')
  }
})

export const { addComment, removeComment } = commentsSlice.actions
export default commentsSlice.reducer;