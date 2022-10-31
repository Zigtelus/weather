import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI, dataUser, KEY } from "../createApi";



const api = createAPI();

export const nameCityAction = createAsyncThunk(
    'weather/nameCity',
    async (_, thunkAPI) => {
        
        // 
        // https://api.openweathermap.org/geo/1.0/reverse?lat=55.7522200&lon=37.6155600&appid=94d073c2667e3ab1d500b71c487bdf7c


        // realy
        const secondPartURL = `/geo/1.0/reverse?lat=${dataUser.lat}&lon=${dataUser.lon}&appid=${KEY}`;
         
        // const secondPartURL = `/geo/1.0/reverse?lat=55.7522200&lon=37.6155600&appid=94d073c2667e3ab1d500b71c487bdf7c`;

        // павлодар
        // const secondPartURL = `/geo/1.0/reverse?lat=52.2833300&lon=76.9666700&appid=94d073c2667e3ab1d500b71c487bdf7c`;

        // moscow
        // const secondPartURL = `/geo/1.0/reverse?lat=55.7522200&lon=37.6155600&appid=94d073c2667e3ab1d500b71c487bdf7c`;


        try {
            const res = await api.get<string>(`${secondPartURL}`);
            return res.data;
        } catch (e) {
            console.log('nameCityAction');
            console.log('error');
        };
        
    }
);