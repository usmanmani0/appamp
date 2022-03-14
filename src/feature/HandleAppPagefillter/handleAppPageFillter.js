import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    appPageFilterBoxValue: [],
    searchPageResultFilter: [],
    patternFilterValue: []

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
        },
        ResultPageFillter: (state, action) => {
            if (action.payload === false) {
                state.searchPageResultFilter = []
            } else {
                let temaray = [...state.searchPageResultFilter]
                let array;
                if (temaray.filter((data) => data === action.payload).length > 0) {
                    array = temaray.filter((d) => d !== action.payload);
                    temaray = array
                } else {
                    temaray.push(action.payload)
                }
                state.searchPageResultFilter = temaray
            }

        },

        PatternFilter: (state, action) => {
            let temaray = [...state.patternFilterValue]
            let array;
            if (temaray.filter((data) => data === action.payload).length > 0) {
                array = temaray.filter((d) => d !== action.payload);
                temaray = array
            } else {
                temaray.push(action.payload)
            }
            state.patternFilterValue = temaray
        },
    },
})

// Action creators are generated for each case reducer function
export const { PatternFilter, AppPageFillter, ResultPageFillter } = handleAppPageFillter.actions

export default handleAppPageFillter.reducer