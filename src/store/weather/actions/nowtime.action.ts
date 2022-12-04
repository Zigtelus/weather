import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "src/hooks/redux";
import { Nowtime } from "src/types/weather/nowtime";
import { createAPI, dataUser, KEY } from "../createApi";
import { initialStateNT } from "../slices/nowtime.slice";


const api = createAPI();

const tttt = {
    "coord": {
        "lon": 0,
        "lat": 0,
    },
    "weather": [
        {
            "id": 0,
            "main": "",
            "description": "",
            "icon": ""
        }
    ],
    "base": "",
    "main": {
        "temp": 0,
        "feels_like": 0,
        "temp_min": 0,
        "temp_max": 0,
        "pressure": 0,
        "humidity": 0,
        "sea_level": 0,
        "grnd_level": 0,
    },
    "visibility": 0,
    "wind": {
        "speed": 0,
        "deg": 0,
        "gust": 0,
    },
    "clouds": {
        "all": 0,
    },
    "dt": 0,
    "sys": {
        "type": 0,
        "id": 0,
        "country": "ru",
        "sunrise": 0,
        "sunset": 0,
    },
    "timezone": 0,
    "id": 0,
    "name": "Москва",
    "cod": 0,
}

export const nowtimeAction = createAsyncThunk(
    'weather/nowtime',
    async (_, thunkAPI) => {

        // geo/1.0/reverse?lat=55.7522200&lon=37.6155600&appid=94d073c2667e3ab1d500b71c487bdf7c

        // realy
        let secondPartURL = `/data/2.5/weather?lat=${dataUser.lat}&lon=${dataUser.lon}&units=imperial&appid=${KEY}&lang=ru`;

        //pavlodar
        // let secondPartURL = `/data/2.5/weather?lat=52.2833300&lon=76.9666700&units=imperial&appid=${KEY}&lang=ru`;

        // moscow
        // let secondPartURL = `/data/2.5/weather?lat=55.7522200&lon=37.6155600&units=imperial&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru`;


        dataUser.main && (secondPartURL = `/data/2.5/weather?q=${dataUser.main.trim()}&appid=${KEY}&lang=ru`);
        // dataUser.main && (secondPartURL = `/data/2.5/weather?q=${dataUser.main.trim()}&appid=${KEY}&lang=ru`);


        try {
            const res = await api.get<string>(`${secondPartURL}`);
            return res.data;
        } catch (e) {
            // const qqq:Nowtime = useAppSelector(state=> state.nowtimeWeatherReducer.main)
            // return qqq
            return tttt
            // return initialStateNT.main
            console.log('nowtimeAction' + secondPartURL)
            console.log('error ', e);
        }
        
    }
);