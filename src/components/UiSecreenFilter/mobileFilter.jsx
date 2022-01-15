import React, { Component, useState } from 'react'
import './uisecreenfilter.css'
import "../Filter/filter.css"
import "./uisecreenfilter.css"
import { BsFilter } from "react-icons/bs";
import SelectByFeature from "../SelectByFeature"
import img1 from "../../assets/images/s.png"
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import ArrowRight from "../../assets/images/right-arrow.png"
import Close from "../../assets/images/Close.png";
import Feedback from 'react-bootstrap/esm/Feedback';
import ArrowLeft from "../../../src/assets/images/left-arrow.png"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handelShow } from '../../feature/addCollection/counterSlice';

const MobileFilter = () => {
    const [selectedFilter, SetSelectedFilter] = useState([]);
    const [searchbox, setSearchbox] = useState("")
    const show = useSelector((state) => state.hideShow.show)
    const [element, setElement] = useState("element")
    const [elementType, setElementType] = useState(null)
    const history = useNavigate()
    const dispatch = useDispatch()

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
    const Bars = [
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
    ]
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
    const ElementSelector = (x) => {
        switch (x) {
            case "element":
                return <Elements />
                break;
            case "content":
                return <ElementsContent />;
                break;
            case "selected":
                return <SelectedElement />;
                break;

            default:
                return "Out of Range";
                break;
        }
    }
    // .........Filter elements Component.......
    const ElementsContent = () => {

        const goToNext = (type) => {
            setElement("selected")
            setElementType(type)
        }

        return (
            <>
                <div className='elements_data' onClick={() => goToNext("Bars")}>
                    <div className='element_text'>Bars</div>
                    <div className='onHoverArrow'><img src={ArrowRight} /></div>
                </div>
                <div className='elements_data' onClick={() => goToNext("Control")}>
                    <div className='element_text'>Control</div>
                    <div className='onHoverArrow'><img src={ArrowRight} /></div>
                </div>
                <div className='elements_data' onClick={() => goToNext("Display")}>
                    <div className='element_text'>Display</div>
                    <div className='onHoverArrow'><img src={ArrowRight} /></div>
                </div>
                <div className='elements_data' onClick={() => goToNext("Feedback")}>
                    <div className='element_text'>Feedback</div>
                    <div className='onHoverArrow'><img src={ArrowRight} /></div>
                </div>
                <div className='elements_data' onClick={() => goToNext("Icons & Images")}>
                    <div className='element_text'>Icons & Images</div>
                    <div className='onHoverArrow'><img src={ArrowRight} /></div>
                </div>
                <div className='elements_data' onClick={() => goToNext("Overlay")}>
                    <div className='element_text'>Overlay</div>
                    <div className='onHoverArrow'><img src={ArrowRight} /></div>
                </div>

            </>
        )
    }
    // <=====Element Component========>
    const Elements = () => {

        const goToNext = () => {
            setElement("content")
        }

        return (
            <>
                <div className='mobile_fillter_element_tag'
                    onClick={goToNext}
                >
                    <div>Elements</div>
                    <div className='onHoverArrow' ><img src={ArrowRight} /></div>
                </div>
            </>
        )
    }
    // <===========Selected element coponents========>
    const SelectedElement = () => {
        const goBack = () => {
            setElement("content")
        }

        const List = (props) => {
            return (
                props.arr.map((data) => {
                    return (
                        <>
                            <div className='selected_opt_checkbox'>
                                <div className="app_page_checkbox_with_search">
                                    <div>
                                        <input

                                            key={data.id}
                                            type="checkbox"
                                            id={data.id}
                                            onClick={(e) => handleClick(e, data.typeis)}
                                            checked={selectedFilter.includes(`${data.typeis}`)} />
                                        <label className="Mlabel">{data.typeis}</label>{" "}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            )
        }

        return (
            <>
                <div className='mobile_fillter_element_return_tag'
                    onClick={goBack}
                >
                    <div className='onHoverArrow'><img src={ArrowLeft} /></div>
                    <div className='selected_opt'> {elementType && elementType} {selectedFilter.length == 1 ? <span className='m_total_filter_count'>{selectedFilter.length}</span> : ""} </div>

                </div>

                {
                    elementType &&
                        elementType == "Overlay" ?
                        <List arr={overlayArray} />
                        :
                        elementType == "Icons & Images" ?
                            <List arr={iconsArray} />
                            :
                            elementType == "Feedback" ?
                                <List arr={feedbackArray} />
                                :
                                elementType == "Display" ?
                                    <List arr={displayArray} />
                                    :
                                    elementType == "Control" ?
                                        <List arr={controlArray} />
                                        :
                                        elementType == "Bars" ?
                                            <List arr={Bars} />
                                            :
                                            null
                }


            </>
        )
    }

    return (
        <>
            <div className='Mobile_FIlter'>
                <div className='mobile_filter_wrapper'>
                    <div className='filter_select_box mt-2'>
                        <div className='m_filter_btn'>
                            <i className="icon_filter">
                                <BsFilter className="icon" size="16px" color="black" sty
                                />
                            </i>
                            <div className='m_filter_tag'>Filter</div>
                        </div>
                        <div><SelectByFeature /></div>
                    </div>
                    <div className='m_ip_f'>
                        <div className='mobileInput_filter_wrapper'>
                            <img src={img1} className="search" />
                            <Stack open="false"

                                spacing={1} style={{ width: "90%", height: "100%" }}
                            >
                                <Autocomplete
                                    multiple
                                    popupIcon=""
                                    Popper="false"
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
                    </div>


                    {
                        searchbox ? <div>
                            <div className='search_result_wrapper'>
                                <div className='all_result'>All Results</div>
                                <hr className='m_filter_seprator' />

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
                                                    <label className="Mlabel">{data.typeis}</label>{" "}
                                                    <span className='Melement_tag_show'>App Categories</span></div>
                                            </div>
                                        </>
                                    )
                                })



                            }
                        </div> :

                            <div>
                                <hr className='mobile_element_seprator' />


                                {ElementSelector(element)}


                            </div>


                    }


                </div>
                <div className='cancel_apply_btn'>
                    <div className='mobile_f_cancel_btn'>Cancel</div>
                    <div className={element == "selected" ? 'apply_color' : 'mobile_f_apply_btn'} onClick={() => dispatch(handelShow())}>Apply</div>
                </div>
            </div>
        </>
    )
}

export default MobileFilter
