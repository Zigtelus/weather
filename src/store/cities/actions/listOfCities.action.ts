import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "../createApi";



const api = createAPI();


export const listOfCitiesAction = createAsyncThunk(
    'cities/listOfCities',
    async (_, thunkAPI) => {

        let secondPartURL = "/citys?city=%D0%BF%D0%B0%D0%BD";
        
        try {
            const res = await api.get<string>(`${secondPartURL}`);
            return res.data;
        } catch (error) {
            console.log('listOfCitiesAction')
            console.log('error ', error);
        };
        
    }
);