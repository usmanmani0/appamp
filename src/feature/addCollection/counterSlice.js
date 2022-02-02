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
import Secreen1 from "../../assets/images/s1.png"
import Secreen2 from "../../assets/images/s2.png"
import Secreen3 from "../../assets/images/s3.png"
import Secreen4 from "../../assets/images/s4.png"
import Secreen66 from "../../assets/images/moreresult.png"
import Secreen5 from "../../assets/images/s5.png"
import Secreen6 from "../../assets/images/s6.png"
import Secreen7 from "../../assets/images/s7.png"
import Secreen111 from "../../assets/images/screen111.png"
import Secreen222 from "../../assets/images/screen222.png"
import Secreen333 from "../../assets/images/screen333.png"
import Secreen8 from "../../assets/images/s8.png"
import Secreen9 from "../../assets/images/s9.png"
import Secreen10 from "../../assets/images/s10.png"
import Secreen11 from "../../assets/images/s11.png"
import Secreen12 from "../../assets/images/s12.png"

const initialState = {
    searchView: "",
    show: false,
    show: false,
    upload: "",
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
    Playlist: [
        {
            id: 1,
            img: Secreen1,

        },

        {
            id: 2,
            img: Secreen2,

        },
        {
            id: 3,
            img: Secreen3,
            text: "Playing a song"
        },
        {
            id: 4,
            img: Secreen4,
            text: "Searching for a song"
        },
        {
            id: 5,
            img: Secreen5,
            text: "Sign Up"
        },
        {
            id: 6,
            img: Secreen111,

        },
        {
            id: 7,
            img: Secreen222,

        },
        {
            id: 8,
            img: Secreen333,

        },
        {
            id: 9,
            img: Secreen7,
            text: "Exploring Library (W..."
        },
        {
            id: 10,
            img: Secreen8,
            text: "Exploring Library"
        },
        {
            id: 11,
            img: Secreen9,
            text: "Exploring an Artist "
        },
        {
            id: 12,
            img: Secreen10,
            text: "Exploring an Artist "
        },
        {
            id: 13,
            img: Secreen111,

        },
        {
            id: 14,
            img: Secreen222,

        },
        {
            id: 15,
            img: Secreen333,

        },
        {
            id: 16,
            img: Secreen11,
            text: "Exploring an Artist "
        },
        {
            id: 17,
            img: Secreen12,
            text: "Exploring an Artist "
        },
        {
            id: 18,
            img: Secreen111,

        },
        {
            id: 19,
            img: Secreen222,

        },
        {
            id: 20,
            img: Secreen333,

        },
        ,
        {
            id: 21,
            img: Secreen7,
            text: "Exploring Library (W..."
        },
        {
            id: 22,
            img: Secreen8,
            text: "Exploring Library"
        },
        {
            id: 23,
            img: Secreen9,
            text: "Exploring an Artist "
        },
        {
            id: 24,
            img: Secreen10,
            text: "Exploring an Artist "
        },
        ,
        {
            id: 25,
            img: Secreen111,

        },
        {
            id: 26,
            img: Secreen222,

        },
        {
            id: 27,
            img: Secreen333,

        },
        {
            id: 28,
            img: Secreen7,
            text: "Exploring Library (W..."
        },
        {
            id: 29,
            img: Secreen8,
            text: "Exploring Library"
        },
        {
            id: 30,
            img: Secreen9,
            text: "Exploring an Artist "
        },
        {
            id: 31,
            img: Secreen10,
            text: "Exploring an Artist "
        },
        {
            id: 32,
            img: Secreen111,

        },
        {
            id: 33,
            img: Secreen222,

        },
        {
            id: 34,
            img: Secreen333,

        },
        {
            id: 35,
            img: Secreen11,
            text: "Exploring an Artist "
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
        handelUpload: (state, action) => {
            console.log("upload state", action.payload)
            state.upload = action.payload
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
export const { handelShow, uploadPick, collectionHeadingChange, handelUpload, incrementByAmount, addNewCollection, handelempty, handelOffModal, handelValue } = counterSlice.actions

export default counterSlice.reducer