import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    fullscreen: true,
    show: false,
    color: "1"
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
        // pre = () => {
        //     if (color <= 1) {
        //         setColor(asidedata.length);
        //     } else {
        //         setColor(color--);
        //     }
        // },
        // next = () => {
        //     if (color >= asidedata.length + 1) {
        //         setColor(1);
        //     } else {
        //         setColor(color++);
        //     }
        // }

    },
})

// Action creators are generated for each case reducer function
export const { changeSideBarContent, handleShowModal, changeColor } = hideShowModalSlice.actions

export default hideShowModalSlice.reducer