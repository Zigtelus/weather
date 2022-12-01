import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { getUsersActions } from "../actions/users.action";



type InitialState = {
  main: {
    "name": string;
    "password": string;
    "email": string;
  }
}


const initialState: InitialState = {     
  main: {
    "name": "",
    "password": "",
    "email": "",
  }
}


export const validationUsserSlice = createSlice({
  name: 'validationUsser',
  initialState: initialState,
  reducers: {
    formValidation(state, action) {
      console.log({...action.payload})
      state.main = {...action.payload}
    }
  },
  extraReducers: {
    [getUsersActions.fulfilled.type]: (state, action) => {
    },
    [getUsersActions.pending.type]: (state, action)=> {
    },
    [getUsersActions.rejected.type]: (state, action) => console.log('error')
  }
})


export const { formValidation } = validationUsserSlice.actions
export default validationUsserSlice.reducer;