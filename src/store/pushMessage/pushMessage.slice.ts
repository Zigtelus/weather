import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export type InitialState = {
  "numberPush": number;
  "messages": {
    "text1": string;
    "text2": string;
    "text3": string;
    "text4": string;
    "text5": string;
    "text6": string;
    "text7": string;
    "text8": string;
    "text9": string;
    "text10": string;
    "text11": string;
    "text12": string;
    "text13": string;
    "text14": string;
    "text15": string;
    "text16": string;
    "text17": string;
    "text18": string;
    "text19": string;
    "text20": string;
  }
}

const initialState: InitialState = {
  "messages" : {
    "text1": '',
    "text2": '',
    "text3": '',
    "text4": '',
    "text5": '',
    "text6": '',
    "text7": '',
    "text8": '',
    "text9": '',
    "text10": '',
    "text11": '',
    "text12": '',
    "text13": '',
    "text14": '',
    "text15": '',
    "text16": '',
    "text17": '',
    "text18": '',
    "text19": '',
    "text20": ''
  },
  "numberPush": 0,
};

export const pushMessage = createSlice({
  name: 'pushMessage',
  initialState,
  reducers: {
    addText1(state, action) {
      state.messages.text1 = action.payload;
    },
    addText2(state, action) {
      state.messages.text2 = action.payload;
    },
    addText3(state, action) {
      state.messages.text3 = action.payload;
    },
    addText4(state, action) {
      state.messages.text4 = action.payload;
    },
    addText5(state, action) {
      state.messages.text5 = action.payload;
    },
    addText6(state, action) {
      state.messages.text6 = action.payload;
    },
    addText7(state, action) {
      state.messages.text7 = action.payload;
    },
    addText8(state, action) {
      state.messages.text8 = action.payload;
    },
    addText9(state, action) {
      state.messages.text9 = action.payload;
    },
    addText10(state, action) {
      state.messages.text10 = action.payload;
    },
    addText11(state, action) {
      state.messages.text11 = action.payload;
    },
    addText12(state, action) {
      state.messages.text12 = action.payload;
    },
    addText13(state, action) {
      state.messages.text13 = action.payload;
    },
    addText14(state, action) {
      state.messages.text14 = action.payload;
    },
    addText15(state, action) {
      state.messages.text15 = action.payload;
    },
    addText16(state, action) {
      state.messages.text16 = action.payload;
    },
    addText17(state, action) {
      state.messages.text17 = action.payload;
    },
    addText18(state, action) {
      state.messages.text18 = action.payload;
    },
    addText19(state, action) {
      state.messages.text19 = action.payload;
    },
    addText20(state, action) {
      state.messages.text20 = action.payload;
    },
    changeNumberPush(state, action) {
      state.numberPush = action.payload;

      action.payload === 19 ? 
      state.numberPush = 0 : 
      state.numberPush = action.payload+1
    }
  }
})


export const addText = pushMessage.actions
export default pushMessage.reducer;