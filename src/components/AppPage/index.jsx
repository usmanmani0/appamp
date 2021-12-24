import React, { useState, useEffect } from 'react'
import './appPage.css'
import "../SoundCloudVideoPlayer/soundcloudvideoplayer.css"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import "../Filter/filter.css";
import { BsChevronDown } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";

import img1 from "../../assets/images/s.png"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Sound from "../../assets/images/sound.png"
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
import Secreen12 from "../../assets/images/s12.png"
import Stream1 from "../../assets/images/st1.png"
import Stream2 from "../../assets/images/st2.png"
import Stream3 from "../../assets/images/st3.png"
import Stream4 from "../../assets/images/st4.png"
import Stream5 from "../../assets/images/st5.png"
import RightArrow from "../../assets/images/right-arrow.png"
// import Stream6 from "../../assets/images/st6.png"
import Stream7 from "../../assets/images/st7.png"
import Stream8 from "../../assets/images/st8.png"
import Stream9 from "../../assets/images/st9.png"
import aUp from "../../assets/images/arrowup.png"
import checkalert from "../../assets/soundcloudimages/CheckAlert.png";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Copy from "../../assets/images/copy.png"
import Down from "../../assets/images/Download.png"
import Videos from "../../assets/images/Videos.png"
import secreen from "../../assets/images/Screens.png"
import Filter from "../../assets/images/filter.png"
import downarrow from "../../assets/images/downicon.png"
import Card1 from "../../assets/images/card1.png"
import Card2 from "../../assets/images/card2.png"
import Card4 from "../../assets/images/card4.png"
import Card3 from "../../assets/images/card3.png"
import Card6 from "../../assets/images/card6.png"
import Card5 from "../../assets/images/card5.png"
import Card7 from "../../assets/images/card7.png"
import Card8 from "../../assets/images/card8.png"
import Card9 from "../../assets/images/card9.png"
import Cloud from "../../assets/images/cloud.png"
import Plus from "../../assets/images/plus.png"


import checkicon from "../../assets/soundcloudimages/Check.png";
import plusiconsave from "../../assets/soundcloudimages/plusiconsave.png";
import {

    Image,

} from "react-bootstrap";



import option from "../../assets/images/select.png"
import Header from '../Header/Header'
import ReactPlayer from 'react-player'
import Footer from "../Footer/Footer"
import $ from "jquery";

const AppPage = () => {
    const [opt, setOpt] = useState()
    const [color, setColor] = useState(1)
    const [select, setSelect] = useState({ open: false })
    const [arrow, setArrow] = useState(true)
    const [tick, setTick] = useState([]);
    const [setSave, showSetSave] = useState(false);
    const [showPopover, setShowPopover] = useState({ open: true });
    const [checkdata, setCheckdata] = useState([
        {
            id: 1,
            checked: false,
            image: checkicon,
            Name: "Collection #",
        },
        {
            id: 1,
            checked: true,
            image: checkicon,
            Name: "Collection #",
        },
        {
            id: 1,
            checked: true,
            image: checkicon,
            Name: "Collection #",
        },
    ]);

    const [age, setAge] = useState('afzal');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const checkTick = async (index) => {
        let findIndex = tick.find((data) => data == index);
        if (findIndex) {
            let removeIndex = await tick.filter((data) => data != index);
            setTick(removeIndex);
        } else {
            setTick([...tick, index]);
        }
    };

    const saveCollection = () => {
        showSetSave(!setSave);

        setTimeout(() => {
            showSetSave(null);
        }, 5000);
    };

    const handleShow = () => {
        setSelect(!select)
    }
    const hndleImage = () => {
        console.log("Click")
        setArrow(!arrow)
    }
    const handelPopover = () => {
        setShowPopover(!showPopover);
    };

    const addCollection = () => {
        let obj = {
            id: 1,
            checked: false,
            image: checkicon,
            Name: "Collection #",
        };

        setCheckdata([...checkdata, obj]);
    };
    const vedioCard = [
        {
            img: Card1,
            text: "Log Out"
        },
        {
            img: Card2,
            text: "Onboarding"
        },
        {
            img: Card3,
            text: "Playing a song"
        },
        {
            img: Card4,
            text: "Searching for a song"
        },
        {
            img: Card5,
            text: "Sign Up"
        },
        {
            img: Card6,
            text: "Exploring Settings"
        },
        {
            img: Card7,
            text: "Exploring Library (W..."
        },
        {
            img: Card8,
            text: "Exploring Library"
        },
        {
            img: Card9,
            text: "Exploring an Artist "
        },

    ]
    const Stream = [
        {
            img: Stream1,

        },
        {
            img: Stream2,

        },
        {
            img: Stream3,
            text: "Playing a song"
        },
        {
            img: Stream4,
            text: "Searching for a song"
        },
        {
            img: Stream5,
            text: "Sign Up"
        },

        {
            img: Stream7,
            text: "Exploring Library (W..."
        },
        {
            img: Stream8,
            text: "Exploring Library"
        },
        {
            img: Stream9,
            text: "Exploring an Artist "
        },


    ]
    const UxSecreen = [
        {
            img: Secreen1,

        },
        {
            img: Secreen2,

        },
        {
            img: Secreen3,
            text: "Playing a song"
        },
        {
            img: Secreen4,
            text: "Searching for a song"
        },
        {
            img: Secreen5,
            text: "Sign Up"
        },
        {
            img: Secreen6,
            text: "Exploring Settings"
        },
        {
            img: Secreen7,
            text: "Exploring Library (W..."
        },
        {
            img: Secreen8,
            text: "Exploring Library"
        },
        {
            img: Secreen9,
            text: "Exploring an Artist "
        },
        {
            img: Secreen10,
            text: "Exploring an Artist "
        },
        {
            img: Secreen11,
            text: "Exploring an Artist "
        },
        {
            img: Secreen12,
            text: "Exploring an Artist "
        },


    ]

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
    const [show, setShow] = useState(false);
    const handelShow = () => {
        setShow(!show);
    };

    // ..................for select checkbox....
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
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

    useEffect(() => {
        // setList(data);
    }, [list]);

    const handleSelectAll = e => {

        setIsCheckAll(!isCheckAll);
        SetSelectedFilter(list.map(li => `${li.typeis}`));
        if (isCheckAll) {
            SetSelectedFilter([]);
        }
    };


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
    const iconsArray = [
        {
            id: 1,
            typeis: "Action Menu"
        },
        {
            id: 2,
            typeis: "Bottom Sheet"
        },
        {
            id: 3,
            typeis: "Context Menu"
        },
        {
            id: 4,
            typeis: "Date & Time Picker"
        },
        {
            id: 5,
            typeis: "Dialog"
        },
        {
            id: 6,
            typeis: "Full-Screen Overlay"
        },
        {
            id: 7,
            typeis: "Side Sheet"
        },
        {
            id: 8,
            typeis: "Text Edit Menu"
        },

    ]
    return (
        <>
            <Header />
            <div className='App_page_container'>
                <div className='sound_cloud_wrapper'>
                    <div className='sound_cloud_content'>
                        <div className='hero_section_wraper'>
                            <div className='hero_section_content'>
                                <div>
                                    <img src={Sound} className='img-fluid' />
                                </div>
                                <div>
                                    <div className='sound_cloud_text'>
                                        <div className='d-flex align-items-center justify-content-center music_audio'>
                                            music & audio
                                        </div>
                                        <div className='sound_cloud_heading'>SoundCloud</div>
                                        <div className='d-flex'>
                                            <div className='ux10'>10 UX Videos</div>
                                            <div className='ui93'>93  UI Screens</div>
                                        </div>
                                        <div className='_copy'>© SoundCloud</div>
                                    </div>

                                </div>

                            </div>
                            <div className='copy_download'>
                                <div className='copy_wrap '>
                                    <OverlayTrigger
                                        delay={{ hide: 150, show: 300 }}
                                        overlay={(props) => (
                                            <Tooltip {...props}>
                                                Copy Share Link
                                            </Tooltip>
                                        )}
                                        placement="bottom"
                                    ><Button variant="">    <img src={Copy} /></Button>
                                    </OverlayTrigger>

                                </div>

                                <div className='download_wrap'>         <OverlayTrigger
                                    delay={{ hide: 150, show: 300 }}
                                    overlay={(props) => (
                                        <Tooltip {...props}>
                                            Download Video
                                        </Tooltip>
                                    )}
                                    placement="bottom"
                                ><Button variant="">    <img src={Down} /></Button>
                                </OverlayTrigger></div>
                            </div>

                        </div>
                    </div>
                </div>
                {

                }
                <div className='sound_cloud_filter_wrapper' id="myHeader">
                    <div className="filter_btn hide_by_feature">
                        <button
                            onClick={handelShow}
                            className="filter_button d-flex align-items-center"
                            type="button"
                        >
                            <i className="icon_filter" style={{ marginLeft: "5px" }}>
                                {selectedFilter.length == 0 ? <BsFilter className="icon" size="16px" color="black" /> : <div className="filter_count">{selectedFilter.length}</div>}

                            </i>
                            <span>Filter</span>
                        </button>
                    </div>
                    {show ? (
                        <div className="App_Page_filter_expand hide_by_feature">

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
                                <div >
                                    <div>
                                        <button className="app_categories_button" type="button">
                                            <span>Elements</span>
                                            <i className="icon_down">
                                                <BiChevronRight
                                                    className="icon"
                                                    size="16px"
                                                    color="black" />
                                            </i>
                                        </button>
                                    </div>
                                </div>
                                <div >
                                    <div className='option_data ' onMouseEnter={() => { setOpt(0) }}><div>Bars</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                    <div className='option_data ' onMouseEnter={() => { setOpt(1) }}><div>Control</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                    <div className='option_data ' onMouseEnter={() => { setOpt(2) }}><div>Display</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                    <div className='option_data ' onMouseEnter={() => { setOpt(3) }}><div>Feedback</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                    <div className='option_data ' onMouseEnter={() => { setOpt(4) }}><div>Icons & Images</div><div><img src={RightArrow} className='option_right_arrow' /></div></div>
                                    <div className='option_data ' onMouseEnter={() => { setOpt(5) }}><div>Overlay</div><div><img src={RightArrow} className='option_right_arrow' /></div></div> </div>
                                <div style={{ paddingRight: "10px" }}>

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

                    <div className='filter_content_wrapper'>
                        <div className={color == 1 ? 'filter_active ui_vedio' : 'ui_vedio'} onClick={() => {
                            setColor(1)
                        }}><div><img src={Videos} /></div>UX Videos</div>
                        <div className={color == 2 ? 'filter_active ui_vedio' : 'ui_vedio'} onClick={() => {
                            setColor(2)
                        }}><div><img src={secreen} /></div>UI Screens</div>
                    </div>

                    <div className='appPage_select hide_by_feature' >

                        <FormControl >

                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={age}
                                onChange={handleChange}
                                autoWidth
                                className='con'
                            >
                                <MenuItem value="afzal">
                                    <em>By Feature</em>
                                </MenuItem>
                                <MenuItem value={10}>By Feature</MenuItem>
                                <MenuItem value={21}>Random Order</MenuItem>

                            </Select>
                        </FormControl>
                    </div>
                </div>
                {setSave ? (
                    <div className="UI_Secreen_confirmation_wrapper">
                        <Image src={checkalert} />
                        <span className="alert_txt">Video added to 2 Collections</span>
                        <div className="undo_btn">
                            <span className="undo_txt">Undo</span>
                        </div>
                    </div>
                ) : null}

                {
                    color == 1 ? <div className='soud_cloud_vedio_section'>
                        <div className='vedio_card_wrapper'>
                            {
                                vedioCard.map((data, index) => {
                                    return (
                                        <>

                                            <div key={index}>
                                                <div className='vedio_card' >

                                                    <Link to="/soundcloudpage">  <img src={data.img} /></Link>
                                                    <div className='UI_Secreen_add_collection'>
                                                        {showPopover ? (
                                                            <div className="UI_Secreen_popoover_wrapper" style={{ display: index === showPopover.open ? "block" : "none" }}>
                                                                <div class="form-group has-search ">
                                                                    <input
                                                                        type="text"
                                                                        class="form-control"
                                                                        id="form_control"
                                                                        placeholder="Search Collections"
                                                                    ></input>
                                                                </div>
                                                                {checkdata.map((data, index) => {
                                                                    return (
                                                                        <div className="UI_Secreen_collection_checkbox_wrapper" key={index} >
                                                                            <div
                                                                                className={
                                                                                    tick.includes(`${index}`)
                                                                                        ? "checkbox_wrapper_enable"
                                                                                        : "checkbox_wrapper"
                                                                                }
                                                                                onClick={() => checkTick(`${index}`)}
                                                                            >
                                                                                {tick.includes(`${index}`) ? (
                                                                                    <Image src={data.image} />
                                                                                ) : (
                                                                                    ""
                                                                                )}
                                                                            </div>
                                                                            <div>
                                                                                <span className="collection_txt">
                                                                                    {data.Name + " " + [index + 1]}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })}

                                                                <div className="UI_Secreen_save_collection_btn_wrapper">
                                                                    <div
                                                                        className="add_collection_btn"
                                                                        onClick={() => addCollection()}
                                                                    >
                                                                        <Image src={plusiconsave} />
                                                                        <span className="nc_txt">New Collection</span>
                                                                    </div>
                                                                    <div
                                                                        className={
                                                                            tick.length >= 1
                                                                                ? "save_coll_enable_btn"
                                                                                : " save_collection_btn"
                                                                        }
                                                                        onClick={tick.length >= 1 ? () => saveCollection() : null}
                                                                    >
                                                                        {" "}
                                                                        <span className="save_txt" onClick={handelPopover}>Save</span>{" "}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : null}

                                                    </div>
                                                    <div className='share_copy' onClick={() => { setSelect({ open: select.open === index ? false : index }) }} style={{ display: index === select.open ? "block" : "none" }}>
                                                        <div className='select_content_wrapper_1'>
                                                            <div className='d-flex align-items-center'
                                                                onClick={() => { setShowPopover({ open: showPopover.open === index ? false : index }) }}
                                                            >
                                                                <div><img src={Plus} /></div>
                                                                <div className='add_to_col'>Add to Collection</div>
                                                            </div>
                                                            <div className='d-flex align-items-center mt-2'
                                                            >
                                                                <div><img src={Down} style={{ marginLeft: "-7px" }} /></div>
                                                                <div className='select_download'>Download</div>
                                                            </div>
                                                            <div className='d-flex align-items-center mt-2'
                                                            >
                                                                <div><img src={Copy} /></div>
                                                                <div className='add_to_col'>Copy Share Link</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='vedio_time'><div className='vedio_time_wrapper'>12:40</div></div>

                                                    <div className="card_content">
                                                        <div className='card_content_show'>
                                                            <div className='d-flex'><div> <img src={Cloud} className='onHoverImage' /></div><div className='onHoverText'>sound cloud</div></div>
                                                            <div className='select_btn' onClick={() => { setSelect({ open: select.open === index ? false : index }) }}><img src={option} /> </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='card_botom_text'>{data.text}</div>
                                            </div>

                                        </>
                                    )

                                })
                            }

                        </div>
                    </div> : color == 2 ?
                        <>
                            <div className='UI_Secreen_Streem'>
                                <div className='Ui_heading'>
                                    <div>
                                        <div className='create_play_list'>Create a Playlist</div>
                                        <div className='screens14'>14 screens</div>
                                    </div>

                                    <div className='line'></div>
                                </div>

                                <div className='UI_Secreen_vedio_card_wrapper'>
                                    {
                                        UxSecreen.map((data, index) => {
                                            return (
                                                <>
                                                    <div key={index}>
                                                        <div className='vedio_card'>
                                                            <div className='share_copy' onClick={() => { setSelect({ open: select.open === index ? false : index }) }} style={{ display: index === select.open ? "block" : "none" }} >
                                                                <div className='select_content_wrapper_1'>

                                                                    <div className='d-flex align-items-center'

                                                                    >
                                                                        <div><img src={Plus} /></div>
                                                                        <div className='add_to_col'>Add to Collection</div>
                                                                    </div>
                                                                    <div className='d-flex align-items-center mt-2'
                                                                    >
                                                                        <div><img src={Down} style={{ marginLeft: "-7px" }} /></div>
                                                                        <div className='select_download'>Download</div>
                                                                    </div>
                                                                    <div className='d-flex align-items-center mt-2'
                                                                    >
                                                                        <div><img src={Copy} /></div>
                                                                        <div className='add_to_col'>Copy Share Link</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* <div className='vedio_time'><div className='vedio_time_wrapper'>12:40</div></div> */}

                                                            <div className="card_content">
                                                                <div className='card_content_show'>
                                                                    <div className='d-flex'><div> <img src={Cloud} className='onHoverImage' /></div><div className='onHoverText'>sound cloud</div></div>
                                                                    <div className='select_btn' onClick={() => { setSelect({ open: select.open === index ? false : index }) }}><img src={option} /> </div>
                                                                </div>

                                                            </div>

                                                            <img src={data.img} />
                                                        </div>

                                                    </div>
                                                </>
                                            )

                                        })
                                    }

                                </div>


                            </div>
                            <div className='UI_Secreen'>
                                <div className='Ui_heading'>
                                    <div>
                                        <div className='create_play_list'>Exploring Stream</div>
                                        <div className='screens14'>9 screens</div>
                                    </div>

                                    <div className='line'></div>
                                </div>

                                <div className='UI_Secreen_vedio_card_wrapper'>
                                    {
                                        Stream.map((data, index) => {
                                            return (
                                                <>
                                                    <div key={index}>
                                                        <div className='vedio_card'>
                                                            <div className='share_copy' onClick={() => { setSelect({ open: select.open === index ? false : index }) }} style={{ display: index === select.open ? "block" : "none" }}>
                                                                <div className='select_content_wrapper_1'>
                                                                    <div className='d-flex align-items-center'
                                                                    >
                                                                        <div><img src={Plus} /></div>
                                                                        <div className='add_to_col'>Add to Collection</div>
                                                                    </div>
                                                                    <div className='d-flex align-items-center mt-2'
                                                                    >
                                                                        <div><img src={Down} style={{ marginLeft: "-7px" }} /></div>
                                                                        <div className='select_download'>Download</div>
                                                                    </div>
                                                                    <div className='d-flex align-items-center mt-2'
                                                                    >
                                                                        <div><img src={Copy} /></div>
                                                                        <div className='add_to_col'>Copy Share Link</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* <div className='vedio_time'><div className='vedio_time_wrapper'>12:40</div></div> */}

                                                            <div className="card_content">
                                                                <div className='card_content_show'>
                                                                    <div className='d-flex'><div> <img src={Cloud} className='onHoverImage' /></div><div className='onHoverText'>sound cloud</div></div>
                                                                    <div className='select_btn' onClick={() => { setSelect({ open: select.open === index ? false : index }) }}><img src={option} /> </div>
                                                                </div>

                                                            </div>

                                                            <img src={data.img} />
                                                        </div>

                                                    </div>
                                                </>
                                            )

                                        })
                                    }

                                </div>


                            </div>

                        </> : ""
                }


                {/* ..........................UI Secreen................ */}



            </div>
            <Footer />
        </>
    )
}

export default AppPage
