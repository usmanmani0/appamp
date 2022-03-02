import React, { useState } from 'react'
import "../HeroSection/searchpagehero.css"
import Search from "../../../assets/images/s.png"
import Cancel from "../../../assets/images/Cancel.png"
import Vedios from "../../../assets/images/Videos.png"
import { BiMobile } from "react-icons/bi";
import { BiPlayCircle } from "react-icons/bi";
import Header from "../../Header/Header"
import UxVideoSearch from "../UiVideosSearch"
import UiScreenSearch from '../UxScreenSearch'
import { useSelector, useDispatch } from 'react-redux';
import { handelValue, handelempty, chnageScreen } from "../../../feature/addCollection/counterSlice"
import SearchUiSecreenFilter from "../../UiSecreenFilter/searchPageFilter"
import SelectByFeature from '../../SelectByFeature'
import Footer from "../../Footer/Footer"
import Down from "../../../assets/images/downicon.png"
import MostRecent from "../../SelectByFeature/mostRecent"


const SearchResultHeroSection = (props) => {
    const [searchBtn, setSearchBtn] = useState(0)
    // const [searchView, setSearchView] = useState()
    const dispatch = useDispatch()
    const searchView = useSelector((state) => state.hideShow.searchView)
    const isActiveScreen = useSelector((state) => state.hideShow.isActiveScreen)
    const sendValue = (e) => {
        dispatch(handelValue(e.target.value))
    }
    const [DownArrow, SetDownArrow] = useState(false)
    const [UXSelect, setUXSelect] = useState("UX Videos")
    const handleScreenView = (value) => {

        dispatch(chnageScreen(value))
    }

    return (
        <>
            <Header />
            <div className='Searchresult_hero_section'>
                <div className='Searchresult_content_wrapper'>
                    <div className='Searchresult_box'>
                        <div className='Searchresult_hero_heading'>Search Results</div>
                        <div className='Searchresult_serach_section'>
                            <div className="search_img">   <img src={Search} /></div>
                            <div className="search_input_wrapper">
                                <input className='s_input' value={searchView} placeholder='Search Features or Components' onChange={sendValue} />
                            </div>
                            {searchView &&

                                <div className='search_cancel' onClick={() => dispatch(handelempty())} >
                                    <img src={Cancel} />
                                </div>}
                            <div className='serach_vertical_line'></div>
                            <div className='search_btn_wrapper'>
                                <div className={isActiveScreen == 1 ? 'search_ui_btn_bg' : 'search_ux_btn'} onClick={() => {
                                    handleScreenView("1")
                                }}><div>  <i className="icon_play">
                                    <BiPlayCircle
                                        className="icon"
                                        size="16px"
                                        style={{
                                            color:
                                                isActiveScreen === 1 ? "white" : "rgba(22, 22, 24, 1)",
                                        }}
                                    />
                                </i></div> UX Videos</div>
                                <div className={isActiveScreen == 2 ? 'search_ui_btn_bg' : 'search_ui_btn'} onClick={() => {
                                    handleScreenView("2")
                                }}><div>                      <i className="icon_play">
                                    <BiMobile
                                        className="icon"
                                        size="16px"
                                        style={{
                                            color:
                                                isActiveScreen === 2 ? "white" : "rgba(22, 22, 24, 1)",
                                        }}
                                    />
                                </i></div>UI Screens</div>
                            </div>
                            <div className='search_hero_mDropdown' onClick={() => SetDownArrow(!DownArrow)}>{UXSelect}<div><img src={Down} /></div></div>
                            <div className='search_dropdown_content' style={{ display: DownArrow == true ? "flex" : "none" }}>
                                <div className='search_dropdown_value' onClick={() => { setUXSelect(UXSelect === "UX Videos" ? "UI Screens" : "UX Videos", SetDownArrow(false)) }}>{UXSelect === "UX Videos" ? "UI Screens" : "UX Videos"}</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='search_page_fillter_wrapper'>
                <div >
                    <SearchUiSecreenFilter />
                </div>
                <div>
                    <MostRecent feature={true} />
                </div>
            </div>


            <div className='search_page_body_wrapper'>
                {
                    isActiveScreen == 1 ?
                        <UxVideoSearch moreResult={true} /> : ""}
                {
                    isActiveScreen == 2 ?
                        <UiScreenSearch moreResult={true} /> : ""}
                {
                    isActiveScreen === 0 ? <div>    <UxVideoSearch moreResult={true} />
                        <UiScreenSearch moreResult={true} /></div> : ""

                }

            </div>
            <div className='search_page_footer_wrapper'>   <Footer /></div>

        </>
    )
}

export default SearchResultHeroSection
