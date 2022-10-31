import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../createApi";



const api = createAPI();


export const getUsersActions = createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => {

    
    let secondPartURL = `/products/`;

    try {
      const res = await api.get<any>(`${secondPartURL}`);
      return res.data;
    } catch (error) {
      console.log('getUsersAction');
      console.log('error ', error);
    };
      
    
  }
);