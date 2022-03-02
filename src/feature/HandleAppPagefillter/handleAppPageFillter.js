import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    appPageFilterBoxValue: []

}

export const handleAppPageFillter = createSlice({
    name: 'AppPageFillter',
    initialState: initialState,
    reducers: {

        AppPageFillter: (state, action) => {


            let temaray = [...state.appPageFilterBoxValue]
            let array;
            if (temaray.filter((data) => data === action.payload).length > 0) {
                array = temaray.filter((d) => d !== action.payload);
                temaray = array
            } else {
                temaray.push(action.payload)
            }
            state.appPageFilterBoxValue = temaray
            console.log("filter============>appPage", state.appPageFilterBoxValue)
        },


    },
})

// Action creators are generated for each case reducer function
export const { AppPageFillter } = handleAppPageFillter.actions

export default handleAppPageFillter.reducer