import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../createApi";

type Body = {
  "name": string,
  "password": string,
  "email": string,
  "age": number,
  "dateRegistration": string,
  "coords": {
      "latitude": number,
      "longitude": number,
      "city": string,
  },
  
}

const api = createAPI();


export const addUserAction = createAsyncThunk(
  'users/addUser',
  async (body: Body, thunkAPI) => {
    console.log(body)
    const secondPartURL = `/users/`;
    const res = await api.post<string>(`${secondPartURL}`, body);
    return res.data;
  }
);