import { createSlice } from "@reduxjs/toolkit";
import { nameCityAction } from "../actions/nameCity.action";



export type InitialState = {
  main: {
    country: string,
    lat: number,
    local_names: {
      ar: string,
      ascii: string,
      az: string,
      be: string,
      ca: string,
      cs: string,
      de: string,
      en: string,
      es: string,
      et: string,
      eu: string,
      fa: string,
      feature_name: string,
      fi: string,
      fr: string,
      hu: string,
      hy: string,
      is: string,
      ja: string,
      ka: string,
      lt: string,
      nl: string,
      pl: string,
      ru: string,
      sk: string,
      sr: string,
      uk: string,
    },
    lon: number,
    name: string,
    state: string,
  };
  loading?: boolean;
};


export const initialStateNC: InitialState = {
  main: {
    country: '',
    lat: 0,
    local_names: {
      ar: '',
      ascii: '',
      az: '',
      be: '',
      ca: '',
      cs: '',
      de: '',
      en: '',
      es: '',
      et: '',
      eu: '',
      fa: '',
      feature_name: '',
      fi: '',
      fr: '',
      hu: '',
      hy: '',
      is: '',
      ja: '',
      ka: '',
      lt: '',
      nl: '',
      pl: '',
      ru: '',
      sk: '',
      sr: '',
      uk: '',
    },
    lon: 0,
    name: '',
    state: '',
  },
  loading: false,
};


export const nameCitySlice = createSlice({
  name: 'nameCity',
  initialState: initialStateNC,
  reducers: {
      numberPlus(state, action){}
  },
  extraReducers: {
    [nameCityAction.fulfilled.type]: (state, action) => {
      state.main = {...action.payload};
      state.loading = false;
    },
    [nameCityAction.pending.type]: (state, action) => {
      state.loading = true;
    },
    [nameCityAction.rejected.type]: (state, action) => {
    }
  }
})



export default nameCitySlice.reducer