import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "src/hooks/redux";
import { FiveDays } from "src/types/weather/fiveDays";
import { createAPI, dataUser, KEY } from "../createApi";
import { initialStateFD } from "../slices/fiveDays.slice";



const api = createAPI();



export const fiveDaysAction = createAsyncThunk(
  'weather/fiveDays',
  async (_, thunkAPI) => {
    
    // https://api.openweathermap.org/data/2.5/weather?lat=55.9205309&lon=37.662618&units=imperial&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru
    // https://api.openweathermap.org/data/2.5/weather?lat=43.2659375&lon=76.9580137&units=imperial&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru
    // https://api.openweathermap.org/data/2.5/forecast?q=&appid=94d073c2667e3ab1d500b71c487bdf7c&lang=ru

    // realy
    let secondPartURL = `/data/2.5/forecast?lat=${dataUser.lat}&lon=${dataUser.lon}&appid=${KEY}&lang=en`;
    dataUser.main && (secondPartURL = `/data/2.5/forecast?q=${dataUser.main.trim()}&appid=${KEY}&lang=en`);

    // washington
    // dataUser.main.trim().toLowerCase() === 'washington' && (secondPartURL = `/data/2.5/forecast?lat=38.87729&lon=-77.05274&units=imperial&&appid=${KEY}&lang=en`);

    // ru
    // let secondPartURL = `/data/2.5/forecast?lat=55.7522200&lon=37.6155600&appid=${KEY}&lang=ru`;
    


    // let secondPartURL = `/data/2.5/forecast?lat=43.2659375&lon=76.9580137&appid=${KEY}&lang=ru`;
    try {
      const res = await api.get<string>(`${secondPartURL}`);
      return res.data;
    } catch (error) {
      console.log('error ', error);
    };
      
    
  }
);