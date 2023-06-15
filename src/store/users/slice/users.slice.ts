import { createSlice } from "@reduxjs/toolkit";
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
    },
    "role": string,
    "userId": string
  } | null,
  loading: boolean;
}


const initialState: InitialState = {     
  main: null,
  loading: false,
}


export const ussersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    getUserFomLocalStorage(state, action) {
      state.main = action.payload;
    }
  },
  extraReducers: {
    [getUsersActions.fulfilled.type]: (state, action) => {
      state.main = action.payload;
      state.loading = false;
    },
    [getUsersActions.pending.type]: (state, action)=> {
      state.loading = true
    },
    [getUsersActions.rejected.type]: (state, action) => console.log('error')
  }
})

export const {getUserFomLocalStorage} = ussersSlice.actions;
export default ussersSlice.reducer;