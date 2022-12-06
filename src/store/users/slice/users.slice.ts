import { createSlice } from "@reduxjs/toolkit";
import { Users } from "src/types/users/users";
import { FiveDays } from "src/types/weather/fiveDays";
import { getUsersActions } from "../actions/users.action";



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
    }
  },
  loading: boolean;
}


const initialState: InitialState = {     
  main: {
    "name": "",
    "password": "",
    "email": "",
    "age": 0,
    "dateRegistration": "",
    "coords": {
      "latitude": 0,
      "longitude": 0,
      "city": ""
    },
  },
  loading: false,
}


export const ussersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    numberPlus(state, action) {
      /*
      без редюсера синхронного не срабатывает ассинхронный редюсер
      */
    }
  },
  extraReducers: {
    [getUsersActions.fulfilled.type]: (state, action) => {
      state.main = {...action.payload};
      state.loading = false;
    },
    [getUsersActions.pending.type]: (state, action)=> {
      state.loading = true
    },
    [getUsersActions.rejected.type]: (state, action) => console.log('error')
  }
})


export default ussersSlice.reducer;