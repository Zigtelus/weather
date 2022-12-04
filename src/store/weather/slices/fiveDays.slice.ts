import { createSlice } from "@reduxjs/toolkit";
import { FiveDays } from "src/types/weather/fiveDays";
import { fiveDaysAction } from "../actions/fiveDays.action";



type InitialState = {
  main: FiveDays;
  loading?: boolean;
}


export const initialStateFD: InitialState = {     
  "main": {
    "cod": "",
    "message": 0,
    "cnt": 0,
    "list": [
      {
        "dt": 0,
        "main": {
          "temp": 0,
          "feels_like": 0,
          "temp_min": 0,
          "temp_max": 0,
          "pressure": 0,
          "sea_level": 0,
          "grnd_level": 0,
          "humidity": 0,
          "temp_kf": 0,
        },
        "weather": [
          {
            "id": 0,
            "main": "",
            "description": "",
            "icon": "",
          }
        ],
        "clouds": {
          "all": 0,
        },
        "wind": {
          "speed": 0,
          "deg": 0,
          "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
          "pod": "",
        },
        "dt_txt": "",
      },
      {
        "dt": 0,
        "main": {
          "temp": 0,
          "feels_like": 0,
          "temp_min": 0,
          "temp_max": 0,
          "pressure": 0,
          "sea_level": 0,
          "grnd_level": 0,
          "humidity": 0,
          "temp_kf": 0,
        },
        "weather": [
          {
            "id": 0,
            "main": "",
            "description": "",
            "icon": "",
          }
        ],
        "clouds": {
          "all": 0,
        },
        "wind": {
          "speed": 0,
          "deg": 0,
          "gust": 0,
        },
        "visibility": 0,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "",
      },
    ],
    "city": {
      "id": 0,
      "name": "",
      "coord": {
        "lat": 0,
        "lon": 0,
      },
      "country": "ru",
      "population": 0,
      "timezone": 0,
      "sunrise": 0,
      "sunset": 0,
    }
  },
  "loading": false,
}


export const fiveDaySlice = createSlice({
  name: 'fiveDays',
  initialState: initialStateFD,
  reducers: {
    getLoading(state, action) {
      console.log('getLoading false')
      state.loading = action.payload
    }
  },
  extraReducers: {
    [fiveDaysAction.fulfilled.type]: (state, action) => {
      state.main = {...action.payload};
      state.loading = false;
    },
    [fiveDaysAction.pending.type]: (state, action)=> {
      state.loading = true;
    },
    [fiveDaysAction.rejected.type]: (state, action) => {
    }
  }
})


export const {getLoading} = fiveDaySlice.actions
export default fiveDaySlice.reducer;