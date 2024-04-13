import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../createApi";

type Body = {
  "password": string,
  "email": string,
};

const api = createAPI();

export const getUserActions = createAsyncThunk(
  'users/getUsers',
  async (body: Body, thunkAPI) => {
    const secondPartURL = `/users/getuser`;

    const res = await api.post<any>(`${secondPartURL}`, body);
    return res.data;
  }
);