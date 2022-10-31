import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI, dataUser, KEY } from "../createApi";



const api = createAPI();


export const fiveDaysAction = createAsyncThunk(
  'weather/fiveDays',
  async (_, thunkAPI) => {

    // https://api.openweathermap.org/data/2.5/weather?lat=55.9205309&lon=37.662618&units=imperial&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru
    // https://api.openweathermap.org/data/2.5/weather?lat=43.2659375&lon=76.9580137&units=imperial&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru
    // https://api.openweathermap.org/data/2.5/forecast?q=&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru

    // realy
    let secondPartURL = `/data/2.5/forecast?lat=${dataUser.lat}&lon=${dataUser.lon}&appid=${KEY}&lang=ru`;

    // ru
    // let secondPartURL = `/data/2.5/forecast?lat=55.7522200&lon=37.6155600&appid=${KEY}&lang=ru`;
    
    dataUser.main && (secondPartURL = `/data/2.5/forecast?q=${dataUser.main.trim()}&appid=${KEY}&lang=ru`);

    // let secondPartURL = `/data/2.5/forecast?lat=43.2659375&lon=76.9580137&appid=${KEY}&lang=ru`;
    
    console.log('fiveDaysAction')
    // console.log(secondPartURL)

    try {
      const res = await api.get<any>(`${secondPartURL}`);
      return res.data;
    } catch (error) {
      console.log('fiveDaysAction')
      console.log('error ', error);
    };
      
    
  }
);