import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listOfCitiesAction } from "../actions/listOfCities.action";

export type City = {
    "main": {
      "searchContext": {
      "contentType": string,
      "query": string,
      "withParent": string,
      "limit": number
      },
      "result": [
        {
          "id": string,
          "name": string,
          "zip": string,
          "type": string,
          "typeShort": string,
          "okato": string,
          "contentType": string
        },
        {
          "id": string,
          "name": string,
          "zip": number,
          "type": string,
          "typeShort": string,
          "okato": string,
          "contentType": string,
          "guid": string,
          "ifnsfl": string,
          "ifnsul": string,
          "oktmo": string,
          "parentGuid": string,
          "cadnum": string,
          "parents": [
            {
              "id": string,
              "name": string,
              "zip": number,
              "type": string,
              "typeShort": string,
              "okato": string,
              "contentType": string,
              "guid": string,
              "ifnsfl": string,
              "ifnsul": string,
              "oktmo": string,
              "parentGuid": string,
              "cadnum": string
            },
          ]
        }
      ]
    }
};

const initialState: City = {
  "main": {
    "searchContext": {
      "contentType": "city",
      "query": "панковка",
      "withParent": "1",
      "limit": 20
    },
    "result": [
      {
        "id": "Free",
        "name": "Бесплатная версия kladr-api.ru",
        "zip": "100000",
        "type": "",
        "typeShort": "",
        "okato": "",
        "contentType": "city"
      },
      {
        "id": "5300100002000",
        "name": "Панковка",
        "zip": 173526,
        "type": "Рабочий поселок",
        "typeShort": "рп",
        "okato": "49225552000",
        "contentType": "city",
        "guid": "3e9ce328-53de-4cf7-95c3-8cf5ef266826",
        "ifnsfl": "5300",
        "ifnsul": "5300",
        "oktmo": "49625152051",
        "parentGuid": "640b105e-1db1-4ada-9fcc-ec0902aa9a36",
        "cadnum": "",
        "parents": [
          {
            "id": "5300000000000",
            "name": "Новгородская",
            "zip": 173000,
            "type": "Область",
            "typeShort": "обл",
            "okato": "49000000000",
            "contentType": "region",
            "guid": "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            "ifnsfl": "5300",
            "ifnsul": "5300",
            "oktmo": "49000000",
            "parentGuid": "",
            "cadnum": ""
          },
        ]
      }
    ]
  }
};

export const listOfCitiesSlice = createSlice({
  name: 'listOfCities',
  initialState: initialState,
  reducers: {
    numberPlus(state, action) {
      /*
      без редюсера синхронного не срабатывает ассинхронный редюсер
      */
    }
  },
  extraReducers: {
    [listOfCitiesAction.fulfilled.type]: (state, action) => {
      state.main = {...action.payload};
    },
    [listOfCitiesAction.pending.type]: (state, action) => {
        
    },
    [listOfCitiesAction.rejected.type]: (state, action) => console.log('error')
  }
})


export default listOfCitiesSlice.reducer;