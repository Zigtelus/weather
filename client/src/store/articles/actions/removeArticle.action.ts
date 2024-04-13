import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../createApi";



const api = createAPI();



export const removeArticle = createAsyncThunk(
    'article',
    async ({articleId, userId}: {articleId: string, userId: string}, thunkAPI) => {
        let secondPartURL = `/article/${articleId}/${userId}`;
        const res = await api.delete<string>(`${secondPartURL}`);
        return res.data;
    }
);