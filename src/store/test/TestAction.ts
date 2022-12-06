import { createAsyncThunk } from "@reduxjs/toolkit";
import { testCreateAPI } from "./TestCreateApi";



const api = testCreateAPI();


export const testAction = createAsyncThunk(
  'weather/getNameCity',
  async (_, thunkAPI) => {

    const secondPartURL = `/v2/pokemon/ditto`;

    try {
      const res = await api.get<string>(`${secondPartURL}`);
      return res.data;
    } catch (e) {
      console.log('error');
    };
      
  }
);