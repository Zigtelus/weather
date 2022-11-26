import { createSlice } from "@reduxjs/toolkit";
import { Users } from "src/types/users/users";
import { FiveDays } from "src/types/weather/fiveDays";
import { getUsersActions } from "../actions/users.action";



type InitialState = {
  main: {
    "name": string,
    "password": string,
    "email": string,
    "age": number,
    "coords": {
        "latitude": number,
        "longitude": number,
        "city": string,
    }
  }
}


const initialState: InitialState = {     
  main: {
    "name": "1",
    "password": "eeeee",
    "email": "e@qq.dadwedd",
    "age": 1,
    "coords": {
        "latitude": 1,
        "longitude": 1,
        "city": "1"
    }
  }
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
      console.log('action.payload')
      console.log(action.payload)
      state.main = {...action.payload};
    },
    [getUsersActions.pending.type]: (state, action)=> {},
    [getUsersActions.rejected.type]: (state, action) => console.log('error')
  }
})


export default ussersSlice.reducer;