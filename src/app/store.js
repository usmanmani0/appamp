import { configureStore } from '@reduxjs/toolkit'
import hideShowReducer from "../feature/addCollection/counterSlice"

export const store = configureStore({
    reducer: {
        hideShow: hideShowReducer,
    },
})