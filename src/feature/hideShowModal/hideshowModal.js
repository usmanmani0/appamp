import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    fullscreen: true,
    show: false,
    color: 1
}

export const hideShowModalSlice = createSlice({
    name: 'showModal',
    initialState: initialState,
    reducers: {
        handleShowModal(state, action) {
            state.show = action.payload
        },
        changeColor(state, action) {
            state.color = action.payload
        },
        changeSideBarContent(state, action) {
            state.color = action.payload
        },


    },
})

// Action creators are generated for each case reducer function
export const { changeSideBarContent, handleShowModal, changeColor } = hideShowModalSlice.actions

export default hideShowModalSlice.reducer