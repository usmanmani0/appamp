import React, { useEffect, useState, useRef } from "react";
import "./uisecreenfilter.css";
import "../Filter/filter.css";
import { BsFilter } from "react-icons/bs";
import img1 from "../../assets/images/s.png";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { BiChevronRight } from "react-icons/bi";
import RightArrow from "../../assets/images/right-arrow.png";
import counterSlice, {
    handelShow,
    handelOffModal, setOrignal
} from "../../feature/addCollection/counterSlice";
import {
    ResultPageFillter,
    PatternFilter,
} from "../../feature/HandleAppPagefillter/handleAppPageFillter";
import MobileFilter from "./mobileFilter";
import "./uisecreenfilter.css";

const SearchUiSecreenFilter = () => {
    const searchPageResultFilter = useSelector(
        (state) => state.AppPageFillter.searchPageResultFilter
    );
    const color = useSelector((state) => state.showModal.color);
    const show = useSelector((state) => state.hideShow.show);
    const Playlist = useSelector((state) => state.hideShow.Playlist);
    const [isOpen, setIsOpen] = useState()
    const [mainArray, setMainArray] = useState([]);
    const dispatch = useDispatch();
    const [searchbox, setSearchbox] = useState("");
    const [opt, setOpt] = useState();
    const [element, setElement] = useState();
    const [count, setCount] = useState([]);
    const [selectedFilter, SetSelectedFilter] = useState([]);
    const [list, setList] = useState([
        {
            id: 1,
            typeis: "Navigation Bar",
            flag: "bars",
            filtertype: "Element",
        },
        {
            id: 2,
            typeis: "Search Bar",

            flag: "bars",
            filtertype: "Element",
        },
        {
            id: 3,
            typeis: "Tab Bar",

            flag: "bars",
            filtertype: "Element",
        },
        {
            id: 4,
            typeis: "Tool Bar",
            flag: "bars",
            filtertype: "Element",
        },
        {
            id: 5,
            typeis: "Navigation Bar",
            flag: "bars",
            filtertype: "Element",
        },
    ]);
    // <==========This all arrays is used for filter checkbox===========?
    const controlArray = [
        {
            id: 11,
            typeis: "Button",
            flag: "control",
            filtertype: "Element",
        },
        {
            id: 22,
            typeis: "Carousal",
            flag: "control",
            filtertype: "Element",
        },
        {
            id: 33,
            typeis: "Color Picker",
            flag: "control",
            filtertype: "Element",
        },
        {
            id: 44,
            typeis: "Floating Action Button",
            flag: "control",
            filtertype: "Element",
        },
        {
            id: 55,
            typeis: "Collections / Gallery",
            flag: "control",
            filtertype: "Element",
        },
        {
            id: 66,
            typeis: "Loading Indicator",
            flag: "control",
            filtertype: "Element",
        },
        {
            id: 77,
            typeis: "Multi & Single Select",
            flag: "control",
            filtertype: "Element",
        },
        {
            id: 88,
            typeis: "Pin",
            flag: "control",
            filtertype: "Element",
        },
        {
            id: 99,
            typeis: "Page Control",
            flag: "control",
            filtertype: "Element",
        },
        {
            id: 100,
            typeis: "Progress Indicator",
            flag: "control",
            filtertype: "Element",
        },
    ];
    const displayArray = [
        {
            id: 111,
            typeis: "Accordian",
            flag: "display",
            filtertype: "Element",
        },
        {
            id: 222,
            typeis: "Badge",
            flag: "display",
            filtertype: "Element",
        },
        {
            id: 333,
            typeis: "Banner",
            flag: "display",
            filtertype: "Element",
        },
        {
            id: 444,
            typeis: "Card",
            flag: "display",
            filtertype: "Element",
        },
        {
            id: 555,
            typeis: "Collections / Gallery",
            flag: "display",
            filtertype: "Element",
        },
        {
            id: 666,
            typeis: "Divider",
            flag: "display",
            filtertype: "Element",
        },
        {
            id: 777,
            typeis: "List",
            flag: "display",
            filtertype: "Element",
        },
        {
            id: 888,
            typeis: "Pin",
            flag: "display",
            filtertype: "Element",
        },
        {
            id: 999,
            typeis: "Sheets",
            flag: "display",
            filtertype: "Element",
        },
        {
            id: 1000,
            typeis: "Skeleton",
            flag: "display",
            filtertype: "Element",
        },
    ];
    const feedbackArray = [
        {
            id: 101,
            typeis: "Accordian",
            flag: "feed",
            filtertype: "Element",
        },
        {
            id: 202,
            typeis: "Badge",
            flag: "feed",
            filtertype: "Element",
        },
        {
            id: 303,
            typeis: "Banner",
            flag: "feed",

            filtertype: "Element",
        },
        {
            id: 404,
            typeis: "Card",
            flag: "feed",
            filtertype: "Element",
        },
        {
            id: 505,
            typeis: "Collections / Gallery",
            flag: "feed",
            filtertype: "Element",
        },
        {
            id: 606,
            typeis: "Divider",
            flag: "feed",
            filtertype: "Element",
        },
        {
            id: 707,
            typeis: "List",
            flag: "feed",
            filtertype: "Element",
        },
        {
            id: 808,
            typeis: "Pin",
            flag: "feed",
            filtertype: "Element",
        },
        {
            id: 909,
            typeis: "Sheets",
            flag: "feed",
            filtertype: "Element",
        },
        {
            id: 110,
            typeis: "Skeleton",
            flag: "feed",
            filtertype: "Element",
        },
    ];
    const overlayArray = [
        {
            id: 102,
            typeis: "Animation & Video",
            flag: "over",
            filtertype: "Element",
        },
        {
            id: 201,
            typeis: "App Icon",
            flag: "over",
            filtertype: "Element",
        },
        {
            id: 302,
            typeis: "Avatar",
            flag: "over",
            filtertype: "Element",
        },
        {
            id: 403,
            typeis: "Card",
            flag: "over",
            filtertype: "Element",
        },
        {
            id: 504,
            typeis: "Hero Image",
            flag: "over",
            filtertype: "Element",
        },
        {
            id: 605,
            typeis: "Icons",
            flag: "over",
            filtertype: "Element",
        },
        {
            id: 706,
            typeis: "List",
            flag: "over",
            filtertype: "Element",
        },
        {
            id: 807,
            typeis: "Illustrator",
            flag: "over",
            filtertype: "Element",
        },
        {
            id: 908,
            typeis: "ShePhotoets",
            flag: "over",
            filtertype: "Element",
        },
        {
            id: 104,
            typeis: "System Icons",
            flag: "over",
            filtertype: "Element",
        },
    ];
    const iconsArray = [
        {
            id: 303,
            typeis: "Action Menu",
            flag: "icon",
            filtertype: "Element",
        },
        {
            id: 123,
            typeis: "Bottom Sheet",
            flag: "icon",
            filtertype: "Element",
        },
        {
            id: 124,
            typeis: "Context Menu",
            flag: "icon",
            filtertype: "Element",
        },
        {
            id: 125,
            typeis: "Date & Time Picker",
            flag: "icon",
            filtertype: "Element",
        },
        {
            id: 126,
            typeis: "Dialog",
            flag: "icon",
            filtertype: "Element",
        },
        {
            id: 126,
            typeis: "Full-Screen Overlay",
            flag: "icon",
            filtertype: "Element",
        },
        {
            id: 126,
            typeis: "Side Sheet",
            flag: "icon",
            filtertype: "Element",
        },
        {
            id: 126,
            typeis: "Text Edit Menu",
            flag: "icon",
            filtertype: "Element",
        },
    ];
    const PG1 = [
        {
            id: 3030,
            typeis: "Pattern 1a",
            flag: "Paterna",
            filtertype: "Pattern",
        },
        {
            id: 30302,
            typeis: "Pattern 2a",
            flag: "Paterna",
            filtertype: "Pattern",
        },
        {
            id: 30303,
            typeis: "Pattern 3a",
            flag: "Paterna",
            filtertype: "Pattern",
        },
        {
            id: 30304,
            typeis: "Pattern 4a",
            flag: "Paterna",
            filtertype: "Pattern",
        },
        {
            id: 30305,
            typeis: "Pattern 5a",
            flag: "Paterna",
            filtertype: "Pattern",
        },
    ];
    const PG2 = [
        {
            id: 3032,
            typeis: "Pattern 1b",

            flag: "Paternb",
            filtertype: "Pattern",
        },
        {
            id: 30322,
            typeis: "Pattern 2b",
            flag: "Paternb",
            filtertype: "Pattern",
        },
        {
            id: 30323,
            typeis: "Pattern 3b",
            flag: "Paternb",
            filtertype: "Pattern",
        },
        {
            id: 30324,
            typeis: "Pattern 4b",
            flag: "Paternb",
            filtertype: "Pattern",
        },
        {
            id: 30325,
            typeis: "Pattern 5b",
            flag: "Paternb",
            filtertype: "Pattern",
        },
    ];
    const PG3 = [
        {
            id: 3033,
            typeis: "Pattern 1c",

            flag: "Paternc",
            filtertype: "Pattern",
        },
        {
            id: 30332,
            typeis: "Pattern 2c",
            flag: "Paternc",
            filtertype: "Pattern",
        },
        {
            id: 30333,
            typeis: "Pattern 3c",
            flag: "Paternc",
            filtertype: "Pattern",
        },
        {
            id: 30334,
            typeis: "Pattern 4c",
            flag: "Paternc",
            filtertype: "Pattern",
        },
        {
            id: 30335,
            typeis: "Pattern 5c",
            flag: "Paternc",
            filtertype: "Pattern",
        },
    ];
    const PG4 = [
        {
            id: 3043,
            typeis: "Pattern 1d",

            flag: "Paternd",
            filtertype: "Pattern",
        },
        {
            id: 30342,
            typeis: "Pattern 2d",
            flag: "Paternd",
            filtertype: "Pattern",
        },
        {
            id: 30343,
            typeis: "Pattern 3d",
            flag: "Paternd",
            filtertype: "Pattern",
        },
        {
            id: 30344,
            typeis: "Pattern 4d",
            flag: "Paternd",
            filtertype: "Pattern",
        },
        {
            id: 30345,
            typeis: "Pattern 5d",
            flag: "Paternd",
            filtertype: "Pattern",
        },
    ];
    const PG5 = [
        {
            id: 3053,
            typeis: "Pattern 1e",

            flag: "Paterne",
            filtertype: "Pattern",
        },
        {
            id: 30352,
            typeis: "Pattern 2e",
            flag: "Paterne",
            filtertype: "Pattern",
        },
        {
            id: 30353,
            typeis: "Pattern 3e",
            flag: "Paterne",
            filtertype: "Pattern",
        },
        {
            id: 30354,
            typeis: "Pattern 4e",
            flag: "Paterne",
            filtertype: "Pattern",
        },
        {
            id: 30355,
            typeis: "Pattern 5e",
            flag: "Paterne",
            filtertype: "Pattern",
        },
    ];
    let a = controlArray.concat(
        displayArray,
        displayArray,
        feedbackArray,
        overlayArray,
        iconsArray
    );
    // <========This filter is used for search and filtering array from seach bar===========?
    var newArray = a.filter((data) =>
        data.typeis.toLowerCase().includes(searchbox.toLowerCase())
    );

    // <============This function is used to get checkbox box value through filter=======>
    const handleClick = (e, name, data) => {
        const { id, checked } = e.target;
        if (data.filtertype === "Element") {
            dispatch(ResultPageFillter(name));
        }
        if (data.filtertype === "Pattern") {
            dispatch(PatternFilter(name));
        }
        console.log("selectedFilter", selectedFilter);
        let present = selectedFilter.find((data) => data == name);
        console.log("PRESENT", present);
        if (present) {
            SetSelectedFilter(selectedFilter.filter((item) => item != name));
            setCount(count.filter((item) => item.typeis != name));
        } else {
            setCount([...count, data]);
            SetSelectedFilter([...selectedFilter, name]);
        }
    };

    // <========This Function is used to remove input fillter tags========>
    const enteringAutoComplete = (e, value, r, d) => {
        if (r === "clear") {
            SetSelectedFilter([]);
            setCount([]);
            dispatch(setOrignal(Playlist))
            dispatch(ResultPageFillter(false))
            return;
        }
        let present = selectedFilter.find((data) => data == d.option);
        console.log("PRESENT", present);
        if (present) {
            SetSelectedFilter(selectedFilter.filter((item) => item != d.option));
            setCount(count.filter((item) => item.typeis != d.option));
        }
        dispatch(ResultPageFillter(d.option));
        SetSelectedFilter((preValue) => {
            return value;
        });
    };
    useEffect(() => {
        setMainArray(Playlist);
    }, [Playlist]);


    // ........open and close filter ========
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
            <div className="UiSecreen_filter" ref={ref}>
                <div className="filter_btn ">
                    <div
                        onClick={() => setIsMenuOpen(oldState => !oldState)}
                        className="filter_button d-flex align-items-center"
                        type="button"
                    >
                        <i className="icon_filter">
                            <BsFilter className="icon" />
                        </i>
                        <div>Filter</div>
                    </div>
                </div>
                {isMenuOpen ? (
                    <div>
                        <div className="mobile_filter_view">
                            <MobileFilter />
                        </div>
                        <div className="App_Page_filter_expand" id="filterOpen">
                            <div className="fillter_box">
                                <div className="filter_input_element">
                                    <div className="search_icon_wrapper">
                                        {" "}
                                        <img src={img1} className="search" />
                                    </div>
                                    <Stack spacing={1} style={{ width: "95%" }}>
                                        <Autocomplete
                                            multiple
                                            popupIcon=""
                                            id="tags-filled"
                                            value={selectedFilter}
                                            options={list.map((option) => option.typeis)}
                                            onChange={(e, v, r, d) =>
                                                enteringAutoComplete(e, v, r, d)
                                            }
                                            renderTags={(value, getTagProps) =>
                                                value.map((option, index) => (
                                                    <Chip
                                                        variant="outlined"
                                                        label={option}
                                                        {...getTagProps({ index })}
                                                    />
                                                ))
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="filled"
                                                    label=""
                                                    value={searchbox}
                                                    placeholder="Search Elements"
                                                    onChange={(e) => {
                                                        setSearchbox(e.target.value);
                                                    }}
                                                />
                                            )}
                                        />
                                    </Stack>
                                </div>
                            </div>
                            <hr className="bottom_line"></hr>
                            {searchbox === "" ? (
                                <div
                                    className="d-flex"
                                    onMouseLeave={() => {
                                        setOpt(null);
                                    }}
                                >
                                    <div className="search_filter_opt_wrapper">
                                        <div className="search_page_appCateg">App Categories</div>
                                        <div
                                            className="UiSecreen_app_categories_button"
                                            onClick={() => {
                                                setElement(0);
                                            }}
                                        >
                                            <div className="d-flex">Elements </div>
                                            <div className="search_page_filter_arow">
                                                <img src={RightArrow} />
                                            </div>
                                        </div>
                                        <div
                                            className="UiSecreen_app_categories_button"
                                            style={{ marginTop: "8px" }}
                                            onClick={() => {
                                                setElement(1);
                                            }}
                                        >
                                            <div className="d-flex">Patterns </div>
                                            <div className="search_page_filter_arow">
                                                <img src={RightArrow} />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="filter_elements_data"
                                        style={{ display: element == 0 ? "block" : "none" }}
                                    >
                                        <div
                                            className="option_data "
                                            onMouseEnter={() => {
                                                setOpt(0);
                                            }}
                                        >
                                            <div className="d-flex flter_data">
                                                Bars{" "}
                                                {count.filter((item) => item.flag === "bars").length >
                                                    0 ? (
                                                    <div
                                                        className="each_filter_count"
                                                        style={{
                                                            display:
                                                                count.filter((item) => item.flag === "bars")
                                                                    .length === 0
                                                                    ? "none"
                                                                    : "block",
                                                        }}
                                                    >
                                                        {
                                                            selectedFilter.filter((data) =>
                                                                list.some((li) => li.typeis == data)
                                                            ).length
                                                        }
                                                    </div>
                                                ) : (
                                                    ""
                                                )}{" "}
                                            </div>
                                            <div>
                                                <img src={RightArrow} className="option_right_arrow" />
                                            </div>
                                        </div>
                                        <div
                                            className="option_data "
                                            onMouseEnter={() => {
                                                setOpt(1);
                                            }}
                                        >
                                            <div className="d-flex flter_data">
                                                Control
                                                {count.filter((item) => item.flag === "control")
                                                    .length > 0 ? (
                                                    <div className="each_filter_count">
                                                        {
                                                            selectedFilter.filter((data) =>
                                                                controlArray.some((li) => li.typeis == data)
                                                            ).length
                                                        }
                                                    </div>
                                                ) : null}{" "}
                                                <span></span>
                                            </div>
                                            <div>
                                                <img src={RightArrow} className="option_right_arrow" />
                                            </div>
                                        </div>
                                        <div
                                            className="option_data "
                                            onMouseEnter={() => {
                                                setOpt(2);
                                            }}
                                        >
                                            <div className="d-flex flter_data">
                                                Display{" "}
                                                {count.filter((item) => item.flag === "display")
                                                    .length > 0 ? (
                                                    <div className="each_filter_count">
                                                        {
                                                            selectedFilter.filter((data) =>
                                                                displayArray.some((li) => li.typeis == data)
                                                            ).length
                                                        }
                                                    </div>
                                                ) : null}{" "}
                                                <span></span>
                                            </div>
                                            <div>
                                                <img src={RightArrow} className="option_right_arrow" />
                                            </div>
                                        </div>
                                        <div
                                            className="option_data "
                                            onMouseEnter={() => {
                                                setOpt(3);
                                            }}
                                        >
                                            <div className="d-flex flter_data">
                                                Feedback{" "}
                                                {count.filter((item) => item.flag === "feed").length >
                                                    0 ? (
                                                    <div className="each_filter_count">
                                                        {
                                                            selectedFilter.filter((data) =>
                                                                feedbackArray.some((li) => li.typeis == data)
                                                            ).length
                                                        }
                                                    </div>
                                                ) : null}{" "}
                                                <span></span>
                                            </div>
                                            <div>
                                                <img src={RightArrow} className="option_right_arrow" />
                                            </div>
                                        </div>
                                        <div
                                            className="option_data "
                                            onMouseEnter={() => {
                                                setOpt(4);
                                            }}
                                        >
                                            <div className="d-flex flter_data">
                                                Icons & Images{" "}
                                                {count.filter((item) => item.flag === "icon").length >
                                                    0 ? (
                                                    <div className="each_filter_count">
                                                        {
                                                            selectedFilter.filter((data) =>
                                                                iconsArray.some((li) => li.typeis == data)
                                                            ).length
                                                        }
                                                    </div>
                                                ) : null}{" "}
                                                <span></span>
                                            </div>
                                            <div>
                                                <img src={RightArrow} className="option_right_arrow" />
                                            </div>
                                        </div>
                                        <div
                                            className="option_data "
                                            onMouseEnter={() => {
                                                setOpt(5);
                                            }}
                                        >
                                            <div className="d-flex flter_data">
                                                Overlay{" "}
                                                {count.filter((item) => item.flag === "over").length >
                                                    0 ? (
                                                    <div className="each_filter_count">
                                                        {
                                                            selectedFilter.filter((data) =>
                                                                overlayArray.some((li) => li.typeis == data)
                                                            ).length
                                                        }
                                                    </div>
                                                ) : null}{" "}
                                                <span></span>
                                            </div>
                                            <div>
                                                <img src={RightArrow} className="option_right_arrow" />
                                            </div>
                                        </div>{" "}
                                    </div>

                                    <div
                                        className="filter_elements_data"
                                        style={{ display: element == 1 ? "block" : "none" }}
                                    >
                                        <div
                                            className="option_data "
                                            onMouseEnter={() => {
                                                setOpt(6);
                                            }}
                                        >
                                            <div className="d-flex flter_data">
                                                Pattern Category 1
                                                {count.filter((item) => item.flag === "Paterna")
                                                    .length > 0 ? (
                                                    <div className="each_filter_count">
                                                        {
                                                            selectedFilter.filter((data) =>
                                                                PG1.some((li) => li.typeis == data)
                                                            ).length
                                                        }
                                                    </div>
                                                ) : null}{" "}
                                                <span></span>
                                            </div>
                                            <div>
                                                <img src={RightArrow} className="option_right_arrow" />
                                            </div>
                                        </div>
                                        <div
                                            className="option_data "
                                            onMouseEnter={() => {
                                                setOpt(7);
                                            }}
                                        >
                                            <div className="d-flex flter_data">
                                                Pattern Category 2
                                                {count.filter((item) => item.flag === "Paternb")
                                                    .length > 0 ? (
                                                    <div className="each_filter_count">
                                                        {
                                                            selectedFilter.filter((data) =>
                                                                PG2.some((li) => li.typeis == data)
                                                            ).length
                                                        }
                                                    </div>
                                                ) : null}{" "}
                                                <span></span>
                                            </div>
                                            <div>
                                                <img src={RightArrow} className="option_right_arrow" />
                                            </div>
                                        </div>
                                        <div
                                            className="option_data "
                                            onMouseEnter={() => {
                                                setOpt(8);
                                            }}
                                        >
                                            <div className="d-flex flter_data">
                                                Pattern Category 3
                                                {count.filter((item) => item.flag === "Paternc")
                                                    .length > 0 ? (
                                                    <div className="each_filter_count">
                                                        {
                                                            selectedFilter.filter((data) =>
                                                                PG3.some((li) => li.typeis == data)
                                                            ).length
                                                        }
                                                    </div>
                                                ) : null}{" "}
                                                <span></span>
                                            </div>
                                            <div>
                                                <img src={RightArrow} className="option_right_arrow" />
                                            </div>
                                        </div>
                                        <div
                                            className="option_data "
                                            onMouseEnter={() => {
                                                setOpt(9);
                                            }}
                                        >
                                            <div className="d-flex flter_data">
                                                Pattern Category 4
                                                {count.filter((item) => item.flag === "Paternd")
                                                    .length > 0 ? (
                                                    <div className="each_filter_count">
                                                        {
                                                            selectedFilter.filter((data) =>
                                                                PG4.some((li) => li.typeis == data)
                                                            ).length
                                                        }
                                                    </div>
                                                ) : null}{" "}
                                                <span></span>
                                            </div>
                                            <div>
                                                <img src={RightArrow} className="option_right_arrow" />
                                            </div>
                                        </div>
                                        <div
                                            className="option_data "
                                            onMouseEnter={() => {
                                                setOpt(10);
                                            }}
                                        >
                                            <div className="d-flex flter_data">
                                                Pattern Category 5
                                                {count.filter((item) => item.flag === "Paterne")
                                                    .length > 0 ? (
                                                    <div className="each_filter_count">
                                                        {
                                                            selectedFilter.filter((data) =>
                                                                PG5.some((li) => li.typeis == data)
                                                            ).length
                                                        }
                                                    </div>
                                                ) : null}{" "}
                                                <span></span>
                                            </div>
                                            <div>
                                                <img src={RightArrow} className="option_right_arrow" />
                                            </div>
                                        </div>{" "}
                                    </div>
                                    <div
                                        className="Ui_Secreen_filter_checkbox"
                                        onMouseLeave={() => setOpt(null)}
                                    >
                                        {list.map((data, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="appPage_checkbox_div"
                                                        style={{ display: opt == 0 ? "flex" : "none" }}
                                                    >
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>
                                                </>
                                            );
                                        })}
                                        {PG1.map((data, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="appPage_checkbox_div"
                                                        style={{ display: opt == 6 ? "block" : "none" }}
                                                    >
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>
                                                </>
                                            );
                                        })}
                                        {PG2.map((data, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="appPage_checkbox_div"
                                                        style={{ display: opt == 7 ? "block" : "none" }}
                                                    >
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>
                                                </>
                                            );
                                        })}
                                        {PG3.map((data, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="appPage_checkbox_div"
                                                        style={{ display: opt == 8 ? "block" : "none" }}
                                                    >
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>
                                                </>
                                            );
                                        })}
                                        {PG4.map((data, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="appPage_checkbox_div"
                                                        style={{ display: opt == 9 ? "block" : "none" }}
                                                    >
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>
                                                </>
                                            );
                                        })}
                                        {PG5.map((data, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="appPage_checkbox_div"
                                                        style={{ display: opt == 10 ? "block" : "none" }}
                                                    >
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>
                                                </>
                                            );
                                        })}
                                        {controlArray.map((data, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="appPage_checkbox_div"
                                                        style={{ display: opt == 1 ? "block" : "none" }}
                                                    >
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>
                                                </>
                                            );
                                        })}
                                        {displayArray.map((data, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="appPage_checkbox_div"
                                                        style={{ display: opt == 2 ? "block" : "none" }}
                                                    >
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>
                                                </>
                                            );
                                        })}
                                        {feedbackArray.map((data, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="appPage_checkbox_div"
                                                        style={{ display: opt == 3 ? "block" : "none" }}
                                                    >
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>
                                                </>
                                            );
                                        })}
                                        {iconsArray.map((data, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="appPage_checkbox_div"
                                                        style={{ display: opt == 4 ? "block" : "none" }}
                                                    >
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>
                                                </>
                                            );
                                        })}
                                        {iconsArray.map((data, index) => {
                                            return (
                                                <>
                                                    <div
                                                        className="appPage_checkbox_div"
                                                        style={{ display: opt == 5 ? "block" : "none" }}
                                                    >
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="search_result_wrapper">
                                        <div className="all_result">All Results</div>

                                        <div
                                            className="clear_result"
                                            onClick={() => {
                                                setSearchbox("");
                                            }}
                                        >
                                            Clear Search Results
                                        </div>
                                    </div>

                                    {newArray.map((data) => {
                                        return (
                                            <>
                                                <div className="app_page_checkbox_with_search">
                                                    <div>
                                                        <input
                                                            className="checkbox_input_icon"
                                                            key={data.id}
                                                            type="checkbox"
                                                            id={data.id}
                                                            onClick={(e) => handleClick(e, data.typeis, data)}
                                                            checked={selectedFilter.includes(
                                                                `${data.typeis}`
                                                            )}
                                                        />
                                                        <label className="label">{data.typeis}</label>{" "}
                                                        <span className="element_tag_show">Elements</span>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default SearchUiSecreenFilter;
