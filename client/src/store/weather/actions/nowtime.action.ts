import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI, dataUser, KEY } from "../createApi";

const api = createAPI();

export const nowtimeAction = createAsyncThunk(
    'weather/nowtime',
    async (_, thunkAPI) => {

        // geo/1.0/reverse?lat=55.7522200&lon=37.6155600&appid=94d073c2667e3ab1d500b71c487bdf7c

        // realy
        let secondPartURL = `/data/2.5/weather?lat=${dataUser.lat}&lon=${dataUser.lon}&units=imperial&appid=${KEY}&lang=en`;
        dataUser.main && (secondPartURL = `/data/2.5/weather?q=${dataUser.main.trim()}&appid=${KEY}&lang=en`);

        // washington
        // dataUser.main.toLowerCase() === 'washington' && (secondPartURL = `/data/2.5/weather?lat=38.87729&lon=-77.05274&units=imperial&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru`);


        //pavlodar
        // let secondPartURL = `/data/2.5/weather?lat=52.2833300&lon=76.9666700&units=imperial&appid=${KEY}&lang=ru`;

        // moscow
        // let secondPartURL = `/data/2.5/weather?lat=55.7522200&lon=37.6155600&units=imperial&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru`;

        const res = await api.get<string>(`${secondPartURL}`);
        return res.data;
        
    }
);