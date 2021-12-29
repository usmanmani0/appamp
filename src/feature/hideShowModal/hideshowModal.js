import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    fullscreen: true,
    show: false

}

export const hideShowModalSlice = createSlice({
    name: 'hideShowModal',
    initialState: initialState,
    reducers: {
        handleShowModal(state, action) {
            state.show = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { handleShowModal } = hideShowModalSlice.actions

export default hideShowModalSlice.reducer