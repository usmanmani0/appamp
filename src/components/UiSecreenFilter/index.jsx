import React, { useEffect, useState } from 'react'
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
import { handelShow } from '../../feature/addCollection/counterSlice';
// import RightArrow from "../../assets/images/right-arrow.png"
import counterSlice from '../../feature/addCollection/counterSlice';


const UiSecreenFilter = () => {
    const show = useSelector((state) => state.hideShow.show)
    console.log('show value=====>', show)
    const dispatch = useDispatch()
    // const [show, setShow] = useState(false);
    // const handelShow = () => {
    //     setShow(!show);
    // };
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [opt, setOpt] = useState()
    const [selectedFilter, SetSelectedFilter] = useState([]);
    const [list, setList] = useState([
        {
            id: 2,
            typeis: "Navigation Bar",
        },
        {
            id: 3,
            typeis: "Search Bar",
        },
        {
            id: 4,
            typeis: "Tool Bar",
        },
        {
            id: 5,
            typeis: "Navigation Bar",
        },

    ]);
    const enteringAutoComplete = (value) => {
        console.log("AUTOVALUE", value);
        SetSelectedFilter((preValue) => {
            return (
                value
            );

        });
    };
    const controlArray = [
        {
            id: 1,
            typeis: "Button"
        },
        {
            id: 2,
            typeis: "Carousal"
        },
        {
            id: 3,
            typeis: "Color Picker"
        },
        {
            id: 4,
            typeis: "Floating Action Button"
        },
        {
            id: 5,
            typeis: "Collections / Gallery"
        },
        {
            id: 6,
            typeis: "Loading Indicator"
        },
        {
            id: 7,
            typeis: "Multi & Single Select"
        },
        {
            id: 8,
            typeis: "Pin"
        },
        {
            id: 9,
            typeis: "Page Control"
        },
        {
            id: 10,
            typeis: "Progress Indicator"
        },
    ]
    const displayArray = [
        {
            id: 1,
            typeis: "Accordian"
        },
        {
            id: 2,
            typeis: "Badge"
        },
        {
            id: 3,
            typeis: "Banner"
        },
        {
            id: 4,
            typeis: "Card"
        },
        {
            id: 5,
            typeis: "Collections / Gallery"
        },
        {
            id: 6,
            typeis: "Divider"
        },
        {
            id: 7,
            typeis: "List"
        },
        {
            id: 8,
            typeis: "Pin"
        },
        {
            id: 9,
            typeis: "Sheets"
        },
        {
            id: 10,
            typeis: "Skeleton"
        },
    ]
    const feedbackArray = [
        {
            id: 1,
            typeis: "Accordian"
        },
        {
            id: 2,
            typeis: "Badge"
        },
        {
            id: 3,
            typeis: "Banner"
        },
        {
            id: 4,
            typeis: "Card"
        },
        {
            id: 5,
            typeis: "Collections / Gallery"
        },
        {
            id: 6,
            typeis: "Divider"
        },
        {
            id: 7,
            typeis: "List"
        },
        {
            id: 8,
            typeis: "Pin"
        },
        {
            id: 9,
            typeis: "Sheets"
        },
        {
            id: 10,
            typeis: "Skeleton"
        },
    ]
    const overlayArray = [
        {
            id: 1,
            typeis: "Animation & Video"
        },
        {
            id: 2,
            typeis: "App Icon"
        },
        {
            id: 3,
            typeis: "Avatar"
        },
        {
            id: 4,
            typeis: "Card"
        },
        {
            id: 5,
            typeis: "Hero Image"
        },
        {
            id: 6,
            typeis: "Icons"
        },
        {
            id: 7,
            typeis: "List"
        },
        {
            id: 8,
            typeis: "Illustrator"
        },
        {
            id: 9,
            typeis: "ShePhotoets"
        },
        {
            id: 10,
            typeis: "System Icons"
        },
    ]
    const iconsArray = [
        {
            id: 1,
            typeis: "Alerts"
        },
        {
            id: 2,
            typeis: "Dialog"
        },
        {
            id: 3,
            typeis: "Progress"
        },
        {
            id: 4,
            typeis: "Snackbar / Toast"
        },
        {
            id: 5,
            typeis: "Tooltip"
        },

    ]
    const handleClick = (e, name) => {
        // alert("JJ")
        const { id, checked } = e.target;
        let present = selectedFilter.find((data) => data == name);
        console.log("PRESENT", present);
        if (present) {
            SetSelectedFilter(selectedFilter.filter(item => item !== name));
        } else {
            SetSelectedFilter([...selectedFilter, name]);
        }
    };

    return (
        <>
            <div className='UiSecreen_filter'>
                <div className="filter_btn ">
                    <button
                        onClick={() => dispatch(handelShow())}
                        className="filter_button d-flex align-items-center"
                        type="button"
                    >
                        <i className="icon_filter">
                            <BsFilter className="icon" size="16px" color="black" sty
                            />

                        </i>
                        <span>Filter</span>
                    </button>
                </div>
                {show ? (
                    <div className="App_Page_filter_expand">

                        <div className="filter_input">
                            <img src={img1} className="search" />
                            <Stack spacing={1} style={{ width: "95%" }} >
                                <Autocomplete
                                    multiple
                                    id="tags-filled"
                                    value={selectedFilter}
                                    options={list.map((option) => option.typeis)}

                                    onChange={(e, v) => enteringAutoComplete(v)}
                                    renderTags={(value, getTagProps) => value.map((option, index) => (
                                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                    ))}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="filled"
                                            label=""
                                            placeholder="Search Elements" />
                                    )} />
                            </Stack>
                        </div>


                        <hr className="bottom_line"></hr>

                        <div className='d-flex justify-content-around' onMouseLeave={() => { setOpt(null) }}>

                            <div className='UiSecreen_app_categories_button'>

                                <div className="d-flex"
                                >Elements {selectedFilter.length == 0 ? "" : <div className="filter_count">{selectedFilter.length}</div>}</div>
                                <div>
                                    <img src={RightArrow} />
                                </div>


                            </div>

                            <div  >
                                <div className='option_data ' onMouseEnter={() => { setOpt(0) }}><div>Bars</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                <div className='option_data ' onMouseEnter={() => { setOpt(1) }}><div>Control</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                <div className='option_data ' onMouseEnter={() => { setOpt(2) }}><div>Display</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                <div className='option_data ' onMouseEnter={() => { setOpt(3) }}><div>Feedback</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                <div className='option_data ' onMouseEnter={() => { setOpt(4) }}><div>Icons & Images</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                <div className='option_data ' onMouseEnter={() => { setOpt(5) }}><div>Overlay</div><div><img src={RightArrow} className='option_right_arrow' /></div></div> </div>
                            <div className='Ui_Secreen_filter_checkbox'>

                                {list.map((data, index) => {
                                    return (
                                        <>
                                            <div className="appPage_checkbox_div" style={{ display: opt == 0 ? "block" : "none" }}>

                                                <input

                                                    key={data.id}
                                                    type="checkbox"
                                                    id={data.id}
                                                    onClick={(e) => handleClick(e, data.typeis)}
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
                                                    onClick={(e) => handleClick(e, data.typeis)}
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
                                                    onClick={(e) => handleClick(e, data.typeis)}
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
                                                    onClick={(e) => handleClick(e, data.typeis)}
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
                                                    onClick={(e) => handleClick(e, data.typeis)}
                                                    checked={selectedFilter.includes(`${data.typeis}`)} />
                                                <label className="label">{data.typeis}</label>{" "}
                                            </div>


                                        </>
                                    );
                                })}
                                {overlayArray.map((data, index) => {
                                    return (
                                        <>
                                            <div className="appPage_checkbox_div" style={{ display: opt == 5 ? "block" : "none" }}>

                                                <input

                                                    key={data.id}
                                                    type="checkbox"
                                                    id={data.id}
                                                    onClick={(e) => handleClick(e, data.typeis)}
                                                    checked={selectedFilter.includes(`${data.typeis}`)} />
                                                <label className="label">{data.typeis}</label>{" "}
                                            </div>


                                        </>
                                    );
                                })}


                            </div>

                        </div>



                    </div>
                ) : null}

            </div>
        </>
    )
}

export default UiSecreenFilter
