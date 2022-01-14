import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
}

export const counterSlice = createSlice({
    name: 'hideShow',
    initialState: initialState,
    reducers: {
        handelShow: (state, action) => {
            state.show = !state.show
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { handelShow, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer