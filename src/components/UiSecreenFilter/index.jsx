import React, { useEffect, useRef, useState } from 'react'
import "./uisecreenfilter.css"
import "../Filter/filter.css";
import { BsFilter } from "react-icons/bs";
import img1 from "../../assets/images/s.png"
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { BiChevronRight } from "react-icons/bi";
import RightArrow from "../../assets/images/right-arrow.png"
import { useSelector, useDispatch } from 'react-redux';
import counterSlice, { handelShow, handelOffModal } from '../../feature/addCollection/counterSlice';
import MobileFilter from './mobileFilter';
import { AppPageFillter } from "../../feature/HandleAppPagefillter/handleAppPageFillter"
import './uisecreenfilter.css'

const UiSecreenFilter = () => {
    const color = useSelector((state) => state.showModal.color)
    const show = useSelector((state) => state.hideShow.show)
    const dispatch = useDispatch()
    const [searchbox, setSearchbox] = useState("")
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [opt, setOpt] = useState()
    const [count, setCount] = useState([])
    const [selectedFilter, SetSelectedFilter] = useState([]);
    const [list, setList] = useState([
        {
            id: 1,
            typeis: "Navigation Bar",
            flag: "bars"
        },
        {
            id: 2,
            typeis: "Search Bar",

            flag: "bars"
        },
        {
            id: 3,
            typeis: "Tab Bar",

            flag: "bars"
        },
        {
            id: 4,
            typeis: "Tool Bar",
            flag: "bars"
        },
        {
            id: 5,
            typeis: "Navigation Bar",
            flag: "bars"
        },

    ]);

    const Pattern = [
        {
            id: 1,
            typeis: "Pattern Type 1"
        },
        {
            id: 1,
            typeis: "Pattern Type 2"
        },
        {
            id: 1,
            typeis: "Pattern Type 3"
        },
        {
            id: 1,
            typeis: "Pattern Type 4"
        },
        {
            id: 1,
            typeis: "Pattern Type 5"
        },
    ]
    const controlArray = [
        {
            id: 11,
            typeis: "Button",
            flag: "control"
        },
        {
            id: 22,
            typeis: "Carousal",
            flag: "control"
        },
        {
            id: 33,
            typeis: "Color Picker",
            flag: "control"
        },
        {
            id: 44,
            typeis: "Floating Action Button",
            flag: "control"
        },
        {
            id: 55,
            typeis: "Collections / Gallery",
            flag: "control"
        },
        {
            id: 66,
            typeis: "Loading Indicator",
            flag: "control"
        },
        {
            id: 77,
            typeis: "Multi & Single Select",
            flag: "control"
        },
        {
            id: 88,
            typeis: "Pin",
            flag: "control"
        },
        {
            id: 99,
            typeis: "Page Control",
            flag: "control"
        },
        {
            id: 100,
            typeis: "Progress Indicator",
            flag: "control"
        },
    ]
    const displayArray = [
        {
            id: 21,
            typeis: "Accordian",
            flag: "display"
        },
        {
            id: 31,
            typeis: "Badge"
            ,
            flag: "display"
        },
        {
            id: 41,
            typeis: "Banner"
            ,
            flag: "display"
        },
        {
            id: 51,
            typeis: "Card"
            ,
            flag: "display"
        },
        {
            id: 61,
            typeis: "Collections / Gallery"
            ,
            flag: "display"
        },
        {
            id: 71,
            typeis: "Divider"
            ,
            flag: "display"
        },
        {
            id: 81,
            typeis: "List"
            ,
            flag: "display"
        },
        {
            id: 91,
            typeis: "Pin"
            ,
            flag: "display"
        },
        {
            id: 92,
            typeis: "Sheets"
            ,
            flag: "display"
        },
        {
            id: 93,
            typeis: "Skeleton"
            ,
            flag: "display"
        },
    ]
    const feedbackArray = [
        {
            id: 101,
            typeis: "Accordian",
            flag: "feed",
        },
        {
            id: 202,
            typeis: "Badge",
            flag: "feed",
        },
        {
            id: 303,
            typeis: "Banner",
            flag: "feed",
        },
        {
            id: 404,
            typeis: "Card",
            flag: "feed",
        },
        {
            id: 505,
            typeis: "Collections / Gallery",
            flag: "feed",
        },
        {
            id: 606,
            typeis: "Divider",
            flag: "feed",
        },
        {
            id: 707,
            typeis: "List",
            flag: "feed",
        },
        {
            id: 808,
            typeis: "Pin",
            flag: "feed",
        },
        {
            id: 909,
            typeis: "Sheets",
            flag: "feed",
        },
        {
            id: 110,
            typeis: "Skeleton",
            flag: "feed",
        },
    ]
    const overlayArray = [
        {
            id: 102,
            typeis: "Animation & Video",
            flag: "over",
        },
        {
            id: 201,
            typeis: "App Icon",
            flag: "over",
        },
        {
            id: 302,
            typeis: "Avatar",
            flag: "over",
        },
        {
            id: 403,
            typeis: "Card",
            flag: "over",
        },
        {
            id: 504,
            typeis: "Hero Image",
            flag: "over",
        },
        {
            id: 605,
            typeis: "Icons",
            flag: "over",
        },
        {
            id: 706,
            typeis: "List",
            flag: "over",
        },
        {
            id: 807,
            typeis: "Illustrator",
            flag: "over",
        },
        {
            id: 908,
            typeis: "ShePhotoets",
            flag: "over",
        },
        {
            id: 104,
            typeis: "System Icons",
            flag: "over",
        },
    ]
    const iconsArray = [
        {
            id: 303,
            typeis: "Action Menu",
            flag: "icon",
        },
        {
            id: 123,
            typeis: "Bottom Sheet",
            flag: "icon",
        },
        {
            id: 124,
            typeis: "Context Menu",
            flag: "icon",
        },
        {
            id: 125,
            typeis: "Date & Time Picker",
            flag: "icon",
        },
        {
            id: 126,
            typeis: "Dialog",
            flag: "icon",
        },
        {
            id: 126,
            typeis: "Full-Screen Overlay",
            flag: "icon",
        },
        {
            id: 126,
            typeis: "Side Sheet",
            flag: "icon",
        },
        {
            id: 126,
            typeis: "Text Edit Menu",
            flag: "icon",
        },

    ]
    let a = controlArray.concat(displayArray, displayArray, feedbackArray, overlayArray, iconsArray)
    var newArray = a.filter((data) => data.typeis.toLowerCase().includes(searchbox.toLowerCase()));
    const handleClick = (e, name, data) => {
        const { id, checked } = e.target;
        dispatch(AppPageFillter(name))
        let present = selectedFilter.find((data) => data == name);
        if (present) {
            SetSelectedFilter(selectedFilter.filter(item => item != name));
            setCount(count.filter(item => item.typeis != name))
        } else {
            setCount([...count, data])
            SetSelectedFilter([...selectedFilter, name]);
        }
    };
    const enteringAutoComplete = (e, value, r, d) => {
        // console.log("data.optio@@@@@@@@@@@@", d.option)

        if (r === "clear") {
            SetSelectedFilter([])
            setCount([])
        }
        dispatch(AppPageFillter(d.option))
        let present = selectedFilter.find((data) => data == d.option);
        if (present) {
            SetSelectedFilter(selectedFilter.filter(item => item != d.option));
            setCount(count.filter(item => item.typeis != d.option))
        }
        SetSelectedFilter((preValue) => {
            return (
                value
            );

        });
    };
    // .....................handle filter open & close====
    const ref = useRef()

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])

    return (
        <>
            <div className='UiSecreen_filter' ref={ref}>
                <div className="filter_btn " >
                    <div
                        onClick={() => setIsMenuOpen(oldState => !oldState)}
                        className="filter_button d-flex align-items-center"
                        type="button"
                    >
                        <i className="icon_filter" >
                            <BsFilter className="icon"
                            />
                        </i>
                        <div>Filter</div>
                    </div>
                </div>
                {isMenuOpen ? (

                    <div>
                        <div className='mobile_filter_view'>
                            <MobileFilter />
                        </div>
                        <div className="App_Page_filter_expand" id="filterOpen">
                            <div className='fillter_box'>
                                <div className="filter_input_element">
                                    <div className='search_icon_wrapper'>  <img src={img1} className="search" /></div>
                                    <Stack spacing={1} style={{ width: "95%" }} >
                                        <Autocomplete
                                            multiple
                                            popupIcon=""
                                            id="tags-filled"
                                            value={selectedFilter}
                                            options={list.map((option) => option.typeis)}

                                            onChange={(e, v, r, d) => enteringAutoComplete(e, v, r, d)}
                                            renderTags={(value, getTagProps) => value.map((option, index) => (
                                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                            ))}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="filled"
                                                    label=""
                                                    value={searchbox}
                                                    placeholder="Search Elements"
                                                    onChange={(e) => { setSearchbox(e.target.value) }}
                                                />
                                            )} />
                                    </Stack>
                                </div>
                            </div>
                            <hr className="bottom_line"></hr>
                            {searchbox === "" ?

                                <div className='d-flex justify-content-around' onMouseLeave={() => { setOpt(null) }}>

                                    <div className='UiSecreen_app_categories_button'>

                                        <div className="d-flex"
                                        >Elements {selectedFilter.length == 0 ? "" : <div className="filter_count">{selectedFilter.length}</div>}</div>
                                        <div>
                                            <img src={RightArrow} />
                                        </div>
                                    </div>


                                    <div className='filter_elements_data' >
                                        <div className='option_data ' onMouseEnter={() => { setOpt(0) }}><div className='d-flex flter_data'>Bars {count.filter((item) => item.flag === "bars").length > 0 ? <div className='each_filter_count' style={{
                                            display:
                                                count.filter((item) => item.flag === "bars").length === 0 ? "none" : "block",
                                        }}  >{selectedFilter.filter((data) => list.some(li => li.typeis == data)).length}</div> : ""} </div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                        <div className='option_data ' onMouseEnter={() => { setOpt(1) }}><div className='d-flex flter_data'>Control{count.filter((item) => item.flag === "control").length > 0 ? <div className='each_filter_count'>{selectedFilter.filter((data) => controlArray.some(li => li.typeis == data)).length}</div> : null} <span></span></div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                        <div className='option_data ' onMouseEnter={() => { setOpt(2) }}><div className='d-flex flter_data'>Display {count.filter((item) => item.flag === "display").length > 0 ? <div className='each_filter_count'>{selectedFilter.filter((data) => displayArray.some(li => li.typeis == data)).length}</div> : null} <span></span></div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                        <div className='option_data ' onMouseEnter={() => { setOpt(3) }}><div className='d-flex flter_data'>Feedback {count.filter((item) => item.flag === "feed").length > 0 ? <div className='each_filter_count'>{selectedFilter.filter((data) => feedbackArray.some(li => li.typeis == data)).length}</div> : null} <span></span></div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                        <div className='option_data ' onMouseEnter={() => { setOpt(4) }}><div className='d-flex flter_data'>Icons & Images {count.filter((item) => item.flag === "icon").length > 0 ? <div className='each_filter_count'>{selectedFilter.filter((data) => iconsArray.some(li => li.typeis == data)).length}</div> : null} <span></span></div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                        <div className='option_data ' onMouseEnter={() => { setOpt(5) }}><div className='d-flex flter_data'>Overlay {count.filter((item) => item.flag === "over").length > 0 ? <div className='each_filter_count'>{selectedFilter.filter((data) => overlayArray.some(li => li.typeis == data)).length}</div> : null} <span></span></div><div><img src={RightArrow} className='option_right_arrow' /></div></div> </div>
                                    <div className='Ui_Secreen_filter_checkbox'>

                                        {list.map((data, index) => {
                                            return (
                                                <>
                                                    <div className="appPage_checkbox_div" style={{ display: opt == 0 ? "block" : "none" }}>

                                                        <input

                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(`${data.typeis}`)} />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>


                                                </>
                                            );
                                        })}
                                        {controlArray.map((data, index) => {
                                            return (
                                                <>
                                                    <div className="appPage_checkbox_div" style={{ display: opt == 1 ? "block" : "none" }}>

                                                        <input

                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(`${data.typeis}`)} />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>


                                                </>
                                            );
                                        })}
                                        {displayArray.map((data, index) => {
                                            return (
                                                <>
                                                    <div className="appPage_checkbox_div" style={{ display: opt == 2 ? "block" : "none" }}>

                                                        <input

                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(`${data.typeis}`)} />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>


                                                </>
                                            );
                                        })}
                                        {feedbackArray.map((data, index) => {
                                            return (
                                                <>
                                                    <div className="appPage_checkbox_div" style={{ display: opt == 3 ? "block" : "none" }}>

                                                        <input

                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(`${data.typeis}`)} />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>


                                                </>
                                            );
                                        })}
                                        {iconsArray.map((data, index) => {
                                            return (
                                                <>
                                                    <div className="appPage_checkbox_div" style={{ display: opt == 4 ? "block" : "none" }}>

                                                        <input

                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(`${data.typeis}`)} />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>


                                                </>
                                            );
                                        })}
                                        {iconsArray.map((data, index) => {
                                            return (
                                                <>
                                                    <div className="appPage_checkbox_div" style={{ display: opt == 5 ? "block" : "none" }}>

                                                        <input

                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(`${data.typeis}`)} />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>


                                                </>
                                            );
                                        })}


                                    </div>

                                </div>
                                :
                                <div>
                                    <div className='search_result_wrapper'>
                                        <div className='all_result'>All Results</div>

                                        <div className='clear_result' onClick={() => {
                                            setSearchbox("")
                                        }}>Clear Search Results</div>
                                    </div>

                                    {
                                        newArray.map((data) => {
                                            return (
                                                <>
                                                    <div className="app_page_checkbox_with_search">
                                                        <div>
                                                            <input

                                                                key={data.id}
                                                                type="checkbox"
                                                                id={data.id}
                                                                onClick={(e) => handleClick(e, data.typeis)}
                                                                checked={selectedFilter.includes(`${data.typeis}`)} />
                                                            <label className="label">{data.typeis}</label>{" "}
                                                            <span className='element_tag_show'>Elements</span></div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            }
                        </div>
                    </div>
                ) : null}

            </div>

        </>
    )
}

export default UiSecreenFilter
