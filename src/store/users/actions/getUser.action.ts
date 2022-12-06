import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../createApi";

type Body = {
  "password": string,
  "email": string,
}

const api = createAPI();


export const getUserActions = (body: Body)=> createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => {

    
    const secondPartURL = `/users/getuser`;

    try {
      const res = await api.post<any>(`${secondPartURL}`, body);
      return res.data;
    } catch (error) {
    };
      
    
  }
);