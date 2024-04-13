import { createSlice } from "@reduxjs/toolkit";
import { getUsersActions } from "../actions/users.action";
import { addUserAction } from "../actions/addUser.action";



type InitialState = {
  main: {
    "name": string;
    "password": string;
    "email": string;
    "age": number;
    "dateRegistration": string;
    "coords": {
        "latitude": number;
        "longitude": number;
        "city": string;
    },
    "role": string,
    "userId": string
  } | null,
  getUsers: {
    loading: boolean;
    errorConnect: undefined | string;
  };
  addUser: {
    loading: boolean;
    errorConnect: undefined | string;
    message: undefined | string
  };
  loading: boolean;
  errorConnect: undefined | string;
}


const initialState: InitialState = {     
  main: null,
  loading: false,
  errorConnect: undefined,

  getUsers: {
    loading: false,
    errorConnect: undefined
  },

  addUser: {
    loading: false,
    errorConnect: undefined,
    message: undefined
  },
}


export const ussersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    getUserFomLocalStorage(state, action) {
      state.main = action.payload;
    },
    addUser(state, action) {
      state.addUser.errorConnect = action.payload;
      state.addUser.message      = action.payload;
    }
  },
  extraReducers: {

    /**************** getUsers ****************************/
    [getUsersActions.fulfilled.type]: (state, action) => {
      console.log(action.payload)
      if (typeof action.payload === 'string') {
        state.errorConnect = action.payload;
      } else {
        state.main = action.payload;
        state.getUsers.errorConnect = '';
      };
      state.getUsers.loading = false;
    },
    [getUsersActions.pending.type]: (state, action)=> {
      state.getUsers.loading = true;
    },
    [getUsersActions.rejected.type]: (state, action) => {
      console.log('error seraching user');
      state.getUsers.loading = false;
      state.getUsers.errorConnect = '';
    },
    /******************************************************/


    /**************** getUsers ****************************/
    [addUserAction.fulfilled.type]: (state, action) => {

      console.log(action.payload)
      if (typeof action.payload === 'string') {
        state.addUser.errorConnect = action.payload;
      } else {
        state.addUser.message = 'вы успешно зарегистрировались';
        state.main = action.payload;
      };

      state.addUser.loading = false;
    },
    [addUserAction.pending.type]: (state, action)=> {
      state.addUser.loading = true;
      state.addUser.message = '';
      state.addUser.errorConnect = '';
    },
    [addUserAction.rejected.type]: (state, action) => {
      state.addUser.loading = false;

    }
    /******************************************************/
  }
})

export const {getUserFomLocalStorage, addUser} = ussersSlice.actions;
export default ussersSlice.reducer;