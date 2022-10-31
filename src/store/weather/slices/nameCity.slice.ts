import { createSlice } from "@reduxjs/toolkit";
import { nameCityAction } from "../actions/nameCity.action"



export type NameCity = {
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
    }
};


const initialState: any = {
  main: {}
};


export const nameCitySlice = createSlice({
  name: 'nameCity',
  initialState: initialState,
  reducers: {
      numberPlus(state, action){
      }
  },
  extraReducers: {
    [nameCityAction.fulfilled.type]: (state, action) => {
      state.main = {...action.payload};
    },
    [nameCityAction.pending.type]: (state, action) => {},
    [nameCityAction.rejected.type]: (state, action) => console.log('error')
  }
})



export default nameCitySlice.reducer