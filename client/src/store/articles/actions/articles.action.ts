import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../createApi";

const api = createAPI();

export const articlesAction = createAsyncThunk(
    'articles',
    async (articleId:string, thunkAPI) => {

        let secondPartURL = `/article/${articleId}`;
        const res = await api.get<string>(`${secondPartURL}`);
        return res.data;
    }
);