import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../createApi";



const api = createAPI();


export const getUsersActions = createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => {

    
    let secondPartURL = `/users/`;

    try {
      const res = await api.get<string>(`${secondPartURL}`);
      return res.data;
    } catch (error) {
      console.log('error ', error);
    };
      
    
  }
);