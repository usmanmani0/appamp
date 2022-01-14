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

const UiSecreenFilter = () => {
    const color = useSelector((state) => state.showModal.color)
    const show = useSelector((state) => state.hideShow.show)
    const dispatch = useDispatch()
    const [searchbox, setSearchbox] = useState("")
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [opt, setOpt] = useState()
    const [selectedFilter, SetSelectedFilter] = useState([]);
    const [list, setList] = useState([
        {
            id: 1,
            typeis: "Navigation Bar",
        },
        {
            id: 2,
            typeis: "Search Bar",
        },
        {
            id: 3,
            typeis: "Tool Bar",
        },
        {
            id: 4,
            typeis: "Navigation Bar",
        },

    ]);
    const enteringAutoComplete = (value) => {

        SetSelectedFilter((preValue) => {
            return (
                value
            );

        });
    };
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
            typeis: "Button"
        },
        {
            id: 22,
            typeis: "Carousal"
        },
        {
            id: 33,
            typeis: "Color Picker"
        },
        {
            id: 44,
            typeis: "Floating Action Button"
        },
        {
            id: 55,
            typeis: "Collections / Gallery"
        },
        {
            id: 66,
            typeis: "Loading Indicator"
        },
        {
            id: 77,
            typeis: "Multi & Single Select"
        },
        {
            id: 88,
            typeis: "Pin"
        },
        {
            id: 99,
            typeis: "Page Control"
        },
        {
            id: 100,
            typeis: "Progress Indicator"
        },
    ]
    const displayArray = [
        {
            id: 111,
            typeis: "Accordian"
        },
        {
            id: 222,
            typeis: "Badge"
        },
        {
            id: 333,
            typeis: "Banner"
        },
        {
            id: 444,
            typeis: "Card"
        },
        {
            id: 555,
            typeis: "Collections / Gallery"
        },
        {
            id: 666,
            typeis: "Divider"
        },
        {
            id: 777,
            typeis: "List"
        },
        {
            id: 888,
            typeis: "Pin"
        },
        {
            id: 999,
            typeis: "Sheets"
        },
        {
            id: 1000,
            typeis: "Skeleton"
        },
    ]
    const feedbackArray = [
        {
            id: 101,
            typeis: "Accordian"
        },
        {
            id: 202,
            typeis: "Badge"
        },
        {
            id: 303,
            typeis: "Banner"
        },
        {
            id: 404,
            typeis: "Card"
        },
        {
            id: 505,
            typeis: "Collections / Gallery"
        },
        {
            id: 606,
            typeis: "Divider"
        },
        {
            id: 707,
            typeis: "List"
        },
        {
            id: 808,
            typeis: "Pin"
        },
        {
            id: 909,
            typeis: "Sheets"
        },
        {
            id: 110,
            typeis: "Skeleton"
        },
    ]
    const overlayArray = [
        {
            id: 102,
            typeis: "Animation & Video"
        },
        {
            id: 201,
            typeis: "App Icon"
        },
        {
            id: 302,
            typeis: "Avatar"
        },
        {
            id: 403,
            typeis: "Card"
        },
        {
            id: 504,
            typeis: "Hero Image"
        },
        {
            id: 605,
            typeis: "Icons"
        },
        {
            id: 706,
            typeis: "List"
        },
        {
            id: 807,
            typeis: "Illustrator"
        },
        {
            id: 908,
            typeis: "ShePhotoets"
        },
        {
            id: 104,
            typeis: "System Icons"
        },
    ]
    const iconsArray = [
        {
            id: 303,
            typeis: "Alerts"
        },
        {
            id: 123,
            typeis: "Dialog"
        },
        {
            id: 124,
            typeis: "Progress"
        },
        {
            id: 125,
            typeis: "Snackbar / Toast"
        },
        {
            id: 126,
            typeis: "Tooltip"
        },

    ]
    let a = controlArray.concat(displayArray, displayArray, feedbackArray, overlayArray, iconsArray)

    var newArray = a.filter((data) => data.typeis.toLowerCase().includes(searchbox.toLowerCase()));

    const handleClick = (e, name) => {
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
                                            value={searchbox}
                                            placeholder="Search Elements"
                                            onChange={(e) => { setSearchbox(e.target.value) }}
                                        />
                                    )} />
                            </Stack>
                        </div>
                        <hr className="bottom_line"></hr>
                        {searchbox === "" ?
                            color == 1 ? <div className='d-flex justify-content-around' onMouseLeave={() => { setOpt(null) }}>

                                <div className='UiSecreen_app_categories_button'>

                                    <div className="d-flex"
                                    >Patterns {selectedFilter.length == 0 ? "" : <div className="filter_count">{selectedFilter.length}</div>}</div>
                                    <div>
                                        <img src={RightArrow} />
                                    </div>


                                </div>

                                <div  >
                                    <div className='option_data ' onMouseEnter={() => { setOpt(0) }}><div>Pattern Category 1 { }</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                    <div className='option_data ' onMouseEnter={() => { setOpt(1) }}><div>Pattern Category 2</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                    <div className='option_data ' onMouseEnter={() => { setOpt(2) }}><div>Pattern Category 3</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                    <div className='option_data ' onMouseEnter={() => { setOpt(3) }}><div>Pattern Category 4</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                    <div className='option_data ' onMouseEnter={() => { setOpt(4) }}><div>Pattern Category 5</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                    <div className='option_data ' onMouseEnter={() => { setOpt(5) }}><div>Pattern Category X</div><div><img src={RightArrow} className='option_right_arrow' /></div></div> </div>
                                <div className='Ui_Secreen_filter_checkbox'>

                                    {Pattern.map((data, index) => {

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
                                    {Pattern.map((data, index) => {
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
                                    {Pattern.map((data, index) => {
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
                                    {Pattern.map((data, index) => {
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
                                    {Pattern.map((data, index) => {
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
                                    {Pattern.map((data, index) => {
                                        return (
                                            <>
                                                <div className="appPage_checkbox_div" style={{ display: opt == 6 ? "block" : "none" }}>

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

                            </div> :
                                color == 2 ? <div className='d-flex justify-content-around' onMouseLeave={() => { setOpt(null) }}>

                                    <div className='UiSecreen_app_categories_button'>

                                        <div className="d-flex"
                                        >Elements {selectedFilter.length == 0 ? "" : <div className="filter_count">{selectedFilter.length}</div>}</div>
                                        <div>
                                            <img src={RightArrow} />
                                        </div>


                                    </div>

                                    <div  >
                                        <div className='option_data ' onMouseEnter={() => { setOpt(0) }}><div>Bars {selectedFilter.length > 0 ? <span className='each_filter_count'>{selectedFilter.filter((data) => list.some(li => li.typeis == data)).length}</span> : ""} </div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                        <div className='option_data ' onMouseEnter={() => { setOpt(1) }}><div>Control{selectedFilter.length > 0 ? <span className='each_filter_count'>{selectedFilter.filter((data) => controlArray.some(li => li.typeis == data)).length}</span> : null} <span></span></div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                        <div className='option_data ' onMouseEnter={() => { setOpt(2) }}><div>Display {selectedFilter.length > 0 ? <span className='each_filter_count'>{selectedFilter.filter((data) => displayArray.some(li => li.typeis == data)).length}</span> : null} <span></span></div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                        <div className='option_data ' onMouseEnter={() => { setOpt(3) }}><div>Feedback {selectedFilter.length > 0 ? <span className='each_filter_count'>{selectedFilter.filter((data) => feedbackArray.some(li => li.typeis == data)).length}</span> : null} <span></span></div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                        <div className='option_data ' onMouseEnter={() => { setOpt(4) }}><div>Icons & Images {selectedFilter.length > 0 ? <span className='each_filter_count'>{selectedFilter.filter((data) => overlayArray.some(li => li.typeis == data)).length}</span> : null} <span></span></div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                        <div className='option_data ' onMouseEnter={() => { setOpt(5) }}><div>Overlay {selectedFilter.length > 0 ? <span className='each_filter_count'>{selectedFilter.filter((data) => iconsArray.some(li => li.typeis == data)).length}</span> : null} <span></span></div><div><img src={RightArrow} className='option_right_arrow' /></div></div> </div>
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
                                        {iconsArray.map((data, index) => {
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

                                </div> : null
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
                ) : null}

            </div>
        </>
    )
}

export default UiSecreenFilter
