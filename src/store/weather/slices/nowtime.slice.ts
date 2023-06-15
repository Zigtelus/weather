import { createSlice } from "@reduxjs/toolkit";
import { Nowtime } from "src/types/weather/nowtime";
import { nowtimeAction } from "../actions/nowtime.action";

type InitialState = {
  "main": Nowtime;
  "loading"?: boolean;
};


export const initialStateNT: InitialState = {
  "main": {
    "coord": {
    "lon": 0,
    "lat": 0,
    },
    "weather": [
    {
      "id": 0,
      "main": "",
      "description": "",
      "icon": "",
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
      "country": "",
      "sunrise": 0,
      "sunset": 0,
    },
    "timezone": 0,
    "id": 0,
    "name": "",
    "cod": 0,
  },
  "loading": false,
};


export const nowtimeSlice = createSlice({
  name: 'nowtime',
  initialState: initialStateNT,
  reducers: {
    numberPlus(state, action) {
      /*
      без редюсера синхронного не срабатывает ассинхронный редюсер
      */
    }
  },
  extraReducers: {
    [nowtimeAction.fulfilled.type]: (state, action) => {
      state.main = {...action.payload};
      state.loading = false;
    },
    [nowtimeAction.pending.type]: (state, action) => {
      state.loading = true;
    },
    [nowtimeAction.rejected.type]: (state, action) => {
    }
  }
});



export default nowtimeSlice.reducer;