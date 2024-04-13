import { createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  "numberPush": number;
  "messages": {
    [key: string]: string;
  }
}

const initialState: InitialState = {
  "messages" : {},
  "numberPush": 1,
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
    addText21(state, action) {
      state.messages.text21 = action.payload;
    },
    addText22(state, action) {
      state.messages.text22 = action.payload;
    },
    addText23(state, action) {
      state.messages.text23 = action.payload;
    },
    addText24(state, action) {
      state.messages.text24 = action.payload;
    },
    addText25(state, action) {
      state.messages.text25 = action.payload;
    },
    addText26(state, action) {
      state.messages.text26 = action.payload;
    },
    addText27(state, action) {
      state.messages.text27 = action.payload;
    },
    addText28(state, action) {
      state.messages.text28 = action.payload;
    },
    addText29(state, action) {
      state.messages.text29 = action.payload;
    },
    addText30(state, action) {
      state.messages.text30 = action.payload;
    },
    addText31(state, action) {
      state.messages.text31 = action.payload;
    },
    addText32(state, action) {
      state.messages.text32 = action.payload;
    },
    addText33(state, action) {
      state.messages.text33 = action.payload;
    },
    addText34(state, action) {
      state.messages.text34 = action.payload;
    },
    addText35(state, action) {
      state.messages.text35 = action.payload;
    },
    addText36(state, action) {
      state.messages.text36 = action.payload;
    },
    addText37(state, action) {
      state.messages.text37 = action.payload;
    },
    addText38(state, action) {
      state.messages.text38 = action.payload;
    },
    addText39(state, action) {
      state.messages.text39 = action.payload;
    },
    addText40(state, action) {
      state.messages.text40 = action.payload;
    },
    addText41(state, action) {
      state.messages.text41 = action.payload;
    },
    addText42(state, action) {
      state.messages.text42 = action.payload;
    },
    addText43(state, action) {
      state.messages.text43 = action.payload;
    },
    addText44(state, action) {
      state.messages.text44 = action.payload;
    },
    addText45(state, action) {
      state.messages.text45 = action.payload;
    },
    addText46(state, action) {
      state.messages.text46 = action.payload;
    },
    addText47(state, action) {
      state.messages.text47 = action.payload;
    },
    addText48(state, action) {
      state.messages.text48 = action.payload;
    },
    addText49(state, action) {
      state.messages.text49 = action.payload;
    },
    addText50(state, action) {
      state.messages.text50 = action.payload;
    },
    changeNumberPush(state, action) {

      // console.log('state', state)

      // state.numberPush = action.payload;

      // action.payload === 19 ? 
      // state.numberPush = 0 : 
      // state.numberPush = action.payload+1
    },
    addText(state: any, action) {
      console.log('state.numberPush',state.numberPush)

      const currentTextKey = `text${state.numberPush}`;

      if (state.messages[currentTextKey] === action.payload) {
        state.messages[currentTextKey] = action.payload + ' 1';
      } else {
        state.messages[currentTextKey] = action.payload;
      }

      if (state.numberPush === 50) {
        state.numberPush = 1;
      } else {
        state.numberPush = state.numberPush + 1;
      }
    }
  }
})


export const addText = pushMessage.actions
export default pushMessage.reducer;