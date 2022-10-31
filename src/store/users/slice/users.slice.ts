import { createSlice } from "@reduxjs/toolkit";
import { Users } from "src/types/users/users";
import { FiveDays } from "src/types/weather/fiveDays";
import { getUsersActions } from "../actions/users.action";



type InitialState = {
  main: Users
}


const initialState: InitialState = {     
  main: {
      "_id": "631dd4e5f3cfab6bf50e6b29",
    "title": "qwsddswqw",
    "price": 322,
    "id": "22122",
    "__v": 0
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
        state.main = {...action.payload};
    },
    [getUsersActions.pending.type]: (state, action)=> {},
    [getUsersActions.rejected.type]: (state, action) => console.log('error')
  }
})


export default ussersSlice.reducer;