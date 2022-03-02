import { createSlice } from '@reduxjs/toolkit'
import Upload1 from "../../../src/assets/images/plus_upload.png"
import Upload2 from "../../../src/assets/images/plus_upload.png"
import Upload3 from "../../../src/assets/images/plus_upload.png"
import collection1 from "../../assets/images/collection_card.png"
import GoogleFit from "../../assets/images/image 85.png";
import Mint from "../../assets/images/image 79.png";
import TickTick from "../../assets/images/image 107.png";
import GoogleHome from "../../assets/images/image 91.png";
import Tidal from "../../assets/images/image 67.png";
import YouTubeMusic from "../../assets/images/image 66.png";
import Deezer from "../../assets/images/image 65.png";
import Spotify from "../../assets/images/image 68.png";
import Strava from "../../assets/images/image 86.png";
import SoundCloud from "../../assets/images/image 64.png";
import MarketPlace from "../../assets/images/image 93.png";
import Pinterest from "../../assets/images/image 89.png";
import Nextdoor from "../../assets/images/image 90.png";
import WhatsApp from "../../assets/images/image 69.png";
import Discord from "../../assets/images/image 71.png";
import Facebook from "../../assets/images/image 111.png";
import WeChat from "../../assets/images/image 72.png";
import Slack from "../../assets/images/image 73.png";
import SpikeEmail from "../../assets/images/image 78.png";
import Walmart from "../../assets/images/image 101.png";
import Flo from "../../assets/images/image 95.png";
import CreditKarma from "../../assets/images/image 81.png";
import LinkedIn from "../../assets/images/image 74.png";
import Quickbooks from "../../assets/images/image 76.png";
import Email from "../../assets/images/image 77.png";
import HomeWorkout from "../../assets/images/image 87.png";
import Docusign from "../../assets/images/image 106.png";
import Amazon from "../../assets/images/image 100.png";
import CVS from "../../assets/images/image 97.png";
import Weedmaps from "../../assets/images/image 94.png";
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
import Secreen5 from "../../assets/images/s5.png"
import Secreen6 from "../../assets/images/s6.png"
import Secreen7 from "../../assets/images/s7.png"
import Secreen8 from "../../assets/images/s8.png"
import Secreen9 from "../../assets/images/s9.png"
import Secreen10 from "../../assets/images/s10.png"
import Secreen11 from "../../assets/images/s11.png"
import FeatureArray from "../AllProductsArray/FeatureArray"

import Secreen12 from "../../assets/images/s12.png"
import searchPageUxVideos from "../AllProductsArray/searchPageUxVideos"

const initialState = {
    isActiveScreen: "1",
    searchView: "",
    landingPageFillterSearch: [],
    show: false,
    show: false,
    searchPageUxVideos,

    upload: "",
    Playlist: [
        {
            img: Secreen1,
            text: "Playing a song",
            date: new Date(2022, 2, 1, 20, 33, 30, 0),

        },
        {
            img: Secreen2,
            text: "Playing a song"
            ,
            date: new Date(2022, 1, 12, 10, 33, 30, 0),

        },
        {
            img: Secreen3,
            text: "Playing a song",
            date: new Date(2022, 3, 1, 10, 33, 30, 0),
        },
        {
            img: Secreen4,
            text: "Searching for a song",
            date: new Date(2022, 3, 1, 1, 12, 30, 0),
        },
        {
            img: Secreen5,
            text: "Sign Up",
            date: new Date(2022, 2, 21, 2, 33, 30, 0),
        },
        {
            img: Secreen6,
            text: "Exploring Settings",
            date: new Date(2022, 3, 1, 10, 33, 30, 0),
        },
        {
            img: Secreen7,
            text: "Exploring Library (W...",
            date: new Date(2022, 2, 5, 10, 33, 30, 0),
        },
        {
            img: Secreen8,
            text: "Exploring Library",
            date: new Date(2022, 2, 1, 11, 33, 30, 0),
        },
        {
            img: Secreen9,
            text: "Exploring an Artist ",
            date: new Date(2022, 1, 12, 10, 33, 30, 0),
        },
        {
            img: Secreen10,
            text: "Exploring an Artist ",
            date: new Date(2022, 1, 1, 10, 33, 30, 0),
        },
        {
            img: Secreen11,
            text: "Exploring an Artist ",
            date: new Date(2022, 3, 1, 10, 33, 30, 0),
        },
        {
            img: Secreen12,
            text: "Exploring an Artist ",
            date: new Date(2022, 2, 1, 5, 33, 30, 0),
        },


    ],
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
    FeatureArray,
    appCard: [
        {
            date: new Date(2022, 1, 24, 10, 33, 30, 0),
            img: GoogleFit,
            title: "Communication",
            sub: "Whats App",
        },
        {
            date: new Date(2022, 1, 22, 10, 33, 30, 0),

            img: Mint,
            title: "Communication",
            sub: "Discord",
        },
        {
            date: new Date(2022, 2, 24, 10, 33, 30, 0),

            img: TickTick,
            title: "Communication",
            sub: "Facebook",
        },
        {
            date: new Date(2022, 1, 2, 10, 33, 30, 0),

            img: GoogleHome,
            title: "Communication",
            sub: "Whats App",
        },
        {
            date: new Date(2022, 1, 14, 10, 33, 30, 0),

            img: Tidal,
            title: "Communication",
            sub: "Discord",
        },
        {
            date: new Date(2022, 2, 22, 10, 33, 30, 0),

            img: YouTubeMusic,
            title: "Communication",
            sub: "Facebook",
        },
        {
            date: new Date(2022, 2, 5, 10, 33, 30, 0),

            img: Deezer,
            title: "Communication",
            sub: "Whats App",
        },
        {
            date: new Date(2022, 2, 6, 10, 33, 30, 0),

            img: Spotify,
            title: "Communication",
            sub: "Discord",
        },
        {
            date: new Date(2022, 2, 10, 10, 33, 30, 0),

            img: Strava,
            title: "Communication",
            sub: "Facebook",
        },
        {
            date: new Date(2022, 2, 10, 10, 33, 30, 0),

            img: SoundCloud,
            title: "Communication",
            sub: "Whats App",
        },
        {
            date: new Date(2022, 2, 21, 10, 33, 30, 0),

            img: MarketPlace,
            title: "Communication",
            sub: "Discord",
        },
        {
            date: new Date(2022, 2, 26, 10, 33, 30, 0),

            img: Pinterest,
            title: "Communication",
            sub: "Facebook",
        },
        {
            date: new Date(2022, 2, 25, 10, 33, 30, 0),

            img: Nextdoor,
            title: "Communication",
            sub: "Whats App",
        },
        {
            date: new Date(2022, 2, 27, 10, 33, 30, 0),

            img: WhatsApp,
            title: "Communication",
            sub: "Discord",
        },
        {
            date: new Date(2022, 2, 28, 10, 33, 30, 0),

            img: Discord,
            title: "Communication",
            sub: "Facebook",
        },
        {
            date: new Date(2022, 3, 1, 10, 33, 30, 0),

            img: Facebook,
            title: "Communication",
            sub: "Whats App",
        },
        {
            date: new Date(2022, 3, 1, 10, 33, 30, 0),

            img: WeChat,
            title: "Communication",
            sub: "Discord",
        },
        {
            date: new Date(2022, 2, 8, 10, 33, 30, 0),

            img: Slack,
            title: "Communication",
            sub: "Facebook",
        },
        {
            date: new Date(2022, 3, 1, 10, 33, 30, 0),

            img: SpikeEmail,
            title: "Communication",
            sub: "Whats App",
        },
        {
            date: new Date(2022, 3, 1, 10, 33, 30, 0),

            img: Walmart,
            title: "Communication",
            sub: "Discord",
        },
        {
            date: new Date(2022, 2, 18, 10, 33, 30, 0),

            img: Flo,
            title: "Communication",
            sub: "Facebook",
        },
        {
            date: new Date(2022, 1, 24, 10, 33, 30, 0),

            img: CreditKarma,
            title: "Communication",
            sub: "Whats App",
        },
        {
            date: new Date(2022, 3, 1, 10, 33, 30, 0),

            img: LinkedIn,
            title: "Communication",
            sub: "Discord",
        },
        {
            date: new Date(2022, 3, 1, 10, 33, 30, 0),

            img: Quickbooks,
            title: "Communication",
            sub: "Facebook",
        },
        {
            date: new Date(2022, 2, 22, 10, 33, 30, 0),

            img: Email,
            title: "Communication",
            sub: "Whats App",
        },
        {
            date: new Date(2022, 2, 12, 10, 33, 30, 0),

            img: HomeWorkout,
            title: "Communication",
            sub: "Discord",
        },
        {
            date: new Date(2022, 1, 24, 10, 33, 30, 0),

            img: Docusign,
            title: "Communication",
            sub: "Facebook",
        },
        {
            date: new Date(2022, 3, 24, 10, 33, 30, 0),

            img: Amazon,
            title: "Communication",
            sub: "Whats App",
        },
        {
            date: new Date(2022, 3, 1, 10, 33, 30, 0),

            img: CVS,
            title: "Communication",
            sub: "Discord",
        },
        {
            date: new Date(2022, 3, 1, 10, 33, 30, 0),

            img: Weedmaps,
            title: "Communication",
            sub: "Facebook",
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

    ],
    createApp: [{
        id: 1,
        AppName: "",
        playstore: "",
        applogo: "",
        company: "",
        catogery: ""
    }],
    TotalCreateApps: [{
        id: 1,
        AppName: "",
        playstore: "",
        applogo: "",
        company: "",
    }
        ,
    {
        id: 2,
        AppName: "",
        playstore: "",
        applogo: "",
        company: "",
    }
        ,
    {
        id: 3,
        AppName: "",
        playstore: "",
        applogo: "",
        company: "",
    }
        ,
    {
        id: 4,
        AppName: "",
        playstore: "",
        applogo: "",
        company: "",
    }
        ,
    {
        id: 5,
        AppName: "",
        playstore: "",
        applogo: "",
        company: "",
    }
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

        SortRandomly: (state, action) => {

            let sortedAray = state.FeatureArray.sort(() => Math.random() - 0.5)
            state.FeatureArray = sortedAray


        },
        chnageScreen: (state, action) => {

            state.isActiveScreen = action.payload

        },
        isFillter: (state, action) => {


            let temaray = [...state.landingPageFillterSearch]
            let array;
            if (temaray.filter((data) => data === action.payload).length > 0) {
                array = temaray.filter((d) => d !== action.payload);
                temaray = array
            } else {
                temaray.push(action.payload)
            }
            state.landingPageFillterSearch = temaray
        },
        getAllProducts: (state, action) => {

            state.landingPageFillterSearch = action.payload
        },
        SortAlphabeticlay: (state, action) => {

            const arrangeData = state.appCard.sort(function (a, b) {
                if (a.sub.toLowerCase() < b.sub.toLowerCase())
                    return -1;
                if (a.sub.toLowerCase() > b.sub.toLowerCase())
                    return 1;
                return 0

            })

            state.appCard = arrangeData

        },
        SortRecentlyUpdate: (state, action) => {
            const sortByDate = state.appCard.sort(function (a, b) {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            })
            console.log("recentlyUpdate sort array", sortByDate)
            state.appCard = sortByDate

        },
        SortMostRecent: (state, action) => {

            if (state.isActiveScreen === "1") {

                const sortByDate = state.searchPageUxVideos.sort(function (a, b) {
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                })

                state.searchPageUxVideos = sortByDate
            }
            else {
                const sortByDateScreen = state.Playlist.sort(function (a, b) {
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                })

                state.Playlist = sortByDateScreen
            }



        },
        SortMostrelevent: (state, action) => {
            if (state.isActiveScreen === "1") {
                const arrangeData = state.searchPageUxVideos.sort(function (a, b) {
                    if (a.text.toLowerCase() < b.text.toLowerCase())
                        return -1;
                    if (a.text.toLowerCase() > b.text.toLowerCase())
                        return 1;
                    return 0

                })

                state.searchPageUxVideos = arrangeData
            }
            else {
                const arrangeDataPlaylist = state.Playlist.sort(function (a, b) {
                    if (a.text.toLowerCase() < b.text.toLowerCase())
                        return -1;
                    if (a.text.toLowerCase() > b.text.toLowerCase())
                        return 1;
                    return 0

                })

                state.Playlist = arrangeDataPlaylist
            }




        },
        SortAlphabeticlayFeature: (state, action) => {

            const arrangeData = state.FeatureArray.sort(function (a, b) {
                if (a.featureName.toLowerCase() < b.featureName.toLowerCase())
                    return -1;
                if (a.featureName.toLowerCase() > b.featureName.toLowerCase())
                    return 1;
                return 0

            })

            state.FeatureArray = arrangeData

        },
        handelShow: (state, action) => {

            state.show = !state.show
        },
        handleCreateNewApp: (state, action) => {

            state.TotalCreateApps = state.TotalCreateApps.push(action.payload)

        },
        handelUpload: (state, action) => {
            state.upload = action.payload
        },
        handelCreateAppValues: (state, action) => {

            state.createApp = { ...state.createApp, [action.payload.target.name]: action.payload.target.value }
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
export const { getAllProducts, SortMostrelevent, SortMostRecent, SortRecentlyUpdate, isFillter, SortAlphabeticlayFeature,
    chnageScreen, SortRandomly, SortAlphabeticlay, handleCreateNewApp,
    handelCreateAppValues, handelShow, uploadPick, collectionHeadingChange,
    handelUpload, incrementByAmount, addNewCollection, handelempty,
    handelOffModal, handelValue } = counterSlice.actions

export default counterSlice.reducer