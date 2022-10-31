import { createSlice } from "@reduxjs/toolkit";
import { testAction } from "./TestAction";



const NameCity: any = {
    main: {}
};

export const testSlice = createSlice({
    name: 'testSlice',
    initialState: NameCity,
    reducers: {
        numberPlus(state, action) {
            /*
            без редюсера синхронного не срабатывает ассинхронный редюсер
            */
        }
    },
    extraReducers: {
        [testAction.fulfilled.type]: (state, action) => {
            state.main = {...action.payload};
            
        },
        [testAction.pending.type]: (state, action) => {
        },
        [testAction.rejected.type]: (state, action) => console.log('error')
    }
})

export const testActions = testSlice.actions;

export default testSlice.reducer