import React, { useState, useEffect } from 'react'
import './appPage.css'
import "../SoundCloudVideoPlayer/soundcloudvideoplayer.css"
import 'bootstrap/dist/css/bootstrap.css';
import Videos from "../../assets/images/Videos.png"
import secreen from "../../assets/images/Screens.png"
import checkicon from "../../assets/soundcloudimages/Check.png";
import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import UiSecreenFilter from '../UiSecreenFilter';
import SelectByFeature from '../SelectByFeature';
import AppPageHeroSection from '../AppPageHeroSection';
import UxVideoSecreen from "../UxVideosSecreen"
import UiSecreenPlayList from "../UiSecreenPlayList"
import UiSecreenStream from '../UiSecreenStream';
import { useSelector, useDispatch } from 'react-redux';

import { changeColor } from "../../feature/hideShowModal/hideshowModal"

const AppPage = () => {
    // const [color, setColor] = useState(1)
    // const [checkdata, setCheckdata] = useState([
    //     {
    //         id: 1,
    //         checked: false,
    //         image: checkicon,
    //         Name: "Collection #",
    //     },
    //     {
    //         id: 1,
    //         checked: true,
    //         image: checkicon,
    //         Name: "Collection #",
    //     },
    //     {
    //         id: 1,
    //         checked: true,
    //         image: checkicon,
    //         Name: "Collection #",
    //     },
    // ]);
    const color = useSelector((state) => state.showModal.color)
    const dispatch = useDispatch()
    window.onscroll = function () {
        myFunction();
    };
    function myFunction() {
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    // const [show, setShow] = useState(false);
    // const handelShow = () => {
    //     setShow(!show);
    // };
    const chnageTabData2 = (val) => {
        dispatch(changeColor(val))
    };


    return (
        <>
            <Header />
            <div className='App_page_container'>
                <AppPageHeroSection />
                <div className='sound_cloud_filter_wrapper' id="myHeader">
                    <div className='hide_by_feature'>{color == 1 ? "" : <UiSecreenFilter />} </div>
                    <div className='filter_content_wrapper'>
                        <div className={color === 1 ? 'filter_active ui_vedio' : 'ui_vedio'}
                            onClick={() => chnageTabData2(1)}
                        ><div><img src={Videos} /></div>UX Videos</div>
                        <div className={color === 2 ? 'filter_active ui_vedio' : 'ui_vedio'}
                            onClick={() => chnageTabData2(2)}><div><img src={secreen} /></div>UI Screens</div>
                    </div>
                    <div className='hide_by_feature'>{color == 1 ? "" : <SelectByFeature />} </div>
                </div>
                {
                    color === 1 ?
                        <UxVideoSecreen />
                        : color === 2 ?
                            <>
                                <UiSecreenPlayList />
                                <UiSecreenStream />

                            </> : ""
                }
            </div>
            <Footer />
        </>
    )
}

export default AppPage
