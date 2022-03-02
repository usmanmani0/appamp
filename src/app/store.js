import { configureStore } from '@reduxjs/toolkit'
import hideShowReducer from "../feature/addCollection/counterSlice"
import hideShowModalReducer from "../feature/hideShowModal/hideshowModal"
import handleAppPageFillter from "../feature/HandleAppPagefillter/handleAppPageFillter"

export const store = configureStore({
    reducer: {
        hideShow: hideShowReducer,
        showModal: hideShowModalReducer,
        AppPageFillter: handleAppPageFillter
    },
})