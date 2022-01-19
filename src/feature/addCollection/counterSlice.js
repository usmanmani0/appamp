import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
}

export const counterSlice = createSlice({
    name: 'hideShow',
    initialState: initialState,
    reducers: {
        handelShow: (state, action) => {
            console.log("reduxF")
            state.show = !state.show
        },
        handelOffModal: (state, action) => {
            state.show = false
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { handelShow, incrementByAmount, handelOffModal } = counterSlice.actions

export default counterSlice.reducer