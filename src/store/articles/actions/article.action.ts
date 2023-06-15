import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../createApi";



const api = createAPI();



export const articleAction = createAsyncThunk(
    'article',
    async (articleId: string, thunkAPI) => {

        let secondPartURL = `/article/${articleId}`;
        
        try {
            const res = await api.get<string>(`${secondPartURL}`);
            return res.data;
        } catch (error) {
            console.log('error ', error);
        };
        
    }
);