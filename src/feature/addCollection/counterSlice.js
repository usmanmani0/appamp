import { createSlice } from '@reduxjs/toolkit'
import Upload1 from "../../../src/assets/images/plus_upload.png"
import Upload2 from "../../../src/assets/images/plus_upload.png"
import Upload3 from "../../../src/assets/images/plus_upload.png"
import collection1 from "../../assets/images/collection_card.png"
import Card1 from "../../assets/images/card1.png";
import Card2 from "../../assets/images/card2.png";
import Card4 from "../../assets/images/card4.png";
import Card3 from "../../assets/images/card3.png";
import Card6 from "../../assets/images/card6.png";
import Card5 from "../../assets/images/card5.png";
import Card7 from "../../assets/images/card7.png";
import Card8 from "../../assets/images/card8.png";
import Card9 from "../../assets/images/card9.png";

const initialState = {
    searchView: "",
    show: false,
    show: false,
    vedioCard: [
        {
            id: 1,
            img: Card1,
            text: "Log Out",
        },
        {
            id: 2,
            img: Card2,
            text: "Onboarding",
        },
        {
            id: 3,
            img: Card3,
            text: "Playing a song",
        },
        {
            id: 4,
            img: Card4,
            text: "Searching for a song",
        },
        {
            id: 5,
            img: Card5,
            text: "Sign Up",
        },
        {
            id: 6,
            img: Card6,
            text: "Exploring Settings",
        },
        {
            id: 7,
            img: Card7,
            text: "Exploring Library (W...",
        },
        {
            id: 8,
            img: Card8,
            text: "Exploring Library",
        },
        {
            id: 9,
            img: Card9,
            text: "Exploring an Artist ",
        },
    ],

    createCollection: [
        {
            id: 1,
            img1: '',
            img2: "",
            img3: "",
            uplaodImg1: Upload1,
            uplaodImg2: Upload2,
            uplaodImg3: Upload3,
            text: "Tabs Designs",
            ux: "2 UX Videos",
            ui: "2 UI Screens",

        },

    ]
}

export const counterSlice = createSlice({
    name: 'hideShow',
    initialState: initialState,
    reducers: {
        addNewCollection: (state, action) => {
            let obj = {
                id: 1,
                img1: '',
                img2: "",
                img3: "",
                uplaodImg1: Upload1,
                uplaodImg2: Upload2,
                uplaodImg3: Upload3,
                text: "Tabs Designs",
                ux: "2 UX Videos",
                ui: "2 UI Screens",

            }
            state.createCollection.unshift(
                obj
            )

            state.createCollection = [...state.createCollection]


        },
        handelShow: (state, action) => {
            console.log("reduxF")
            state.show = !state.show
        },
        handelValue: (state, action) => {
            state.searchView = action.payload
        },
        handelempty: (state, action) => {
            state.searchView = ""
        },
        handelOffModal: (state, action) => {
            state.show = false
        },
        collectionHeadingChange: (state, action) => {

            state.createCollection[action.payload.index].text = action.payload.e
        },
        uploadPick: (state, action) => {
            console.log("index and position", action.payload)
            let array = [...state.createCollection]
            if (action.payload.position === 1) {
                array[action.payload.index].img1 = action.payload.objectUrl
            }
            if (action.payload.position === 2) {
                array[action.payload.index].img2 = action.payload.objectUrl
            }
            if (action.payload.position === 3) {
                array[action.payload.index].img3 = action.payload.objectUrl
            }

            state.createCollection = array
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { handelShow, uploadPick, collectionHeadingChange, incrementByAmount, addNewCollection, handelempty, handelOffModal, handelValue } = counterSlice.actions

export default counterSlice.reducer