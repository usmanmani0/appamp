import React, { useState, useEffect } from "react";
import 'react-edit-text/dist/index.css';
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { EditText, EditTextarea } from 'react-edit-text';
import { createGlobalStyle } from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import 'react-edit-text/dist/index.css'
import Plus from "../../../assets/images/plus.png";
import Copy from "../../../assets/images/copy.png";
import Down from "../../../assets/images/Download.png";
import Cloud from "../../../assets/images/cloud.png";
import option from "../../../assets/images/select.png";
import MPlus from "../../../assets/images/mplus.png"
import checkalert from "../../../assets/soundcloudimages/CheckAlert.png";
import Close from "../../../assets/images/Close.png";
import Search from "../../../assets/images/s.png";
import MCopy from "../../../assets/images/mcopy.png"
import MDownload from "../../../assets/images/mdownload.png"
import checkicon from "../../../assets/soundcloudimages/Check.png";
import plusiconsave from "../../../assets/soundcloudimages/plusiconsave.png";
import "../../MobileAddCollection/mobileaddcollection.css";
const UxVideoSearch = () => {
    const searchPageUxVideos = useSelector((state) => state.hideShow.searchPageUxVideos)
    const searchView = useSelector((state) => state.hideShow.searchView)
    const searchPageResultFilter = useSelector((state) => state.AppPageFillter.searchPageResultFilter)
    const patternFilterValue = useSelector((state) => state.AppPageFillter.patternFilterValue)
    const [mainArray, setMainArray] = useState([])
    const [selectBtn, setSelectBtn] = useState("select_btn");
    const [showPopover, setShowPopover] = useState({ open: true });
    const [tick, setTick] = useState([]);
    const [setSave, showSetSave] = useState(false);
    const [copy, setCopy] = useState(false);
    const [select, setSelect] = useState({ open: false });
    const [isSearch, setIsSearch] = useState("")
    const his = useNavigate()
    const [searchValue, setSearchValue] = useState("")
    const [checkdata, setCheckdata] = useState([
        {
            id: 1,
            checked: false,
            image: checkicon,
            Name: "Collection # 1",
        },
        {
            id: 2,
            checked: true,
            image: checkicon,
            Name: "Collection # 2",
        },
        {
            id: 3,
            checked: true,
            image: checkicon,
            Name: "Collection # 3",
        },
    ]);






    // <======used for tick the check box in add collection modal======>
    const checkTick = async (index) => {
        let findIndex = tick.find((data) => data === index);
        if (findIndex) {
            let removeIndex = await tick.filter((data) => data !== index);
            setTick(removeIndex);
        } else {
            setTick([...tick, index]);
        }
    };
    // <======used for showing add collection modal by click on add collection text========>
    const handelPopover = () => {
        setShowPopover(!showPopover);
    };
    // <====used for show snakBar for save collection functionality========>
    const saveCollection = () => {
        showSetSave(!setSave);

        setTimeout(() => {
            showSetSave(null);
        }, 5000);
    };

    // <====used for show snakBar for copy & share functionality========>
    const copyShare = () => {
        setCopy(!setSave);

        setTimeout(() => {
            setCopy(null);
        }, 5000);
    };

    // const vedioCard = [

    //     {
    //         id: 1,
    //         img: Card1,
    //         text: "Tab",
    //     },
    //     {
    //         id: 2,
    //         img: Card1,
    //         text: "Button",
    //     },
    //     {
    //         id: 3,
    //         img: Card1,
    //         text: "Button",
    //     },
    //     {
    //         id: 4,
    //         img: Card1,
    //         text: "Button",
    //     },
    //     {
    //         id: 5,
    //         img: Card1,
    //         text: "Button33333",
    //     },
    //     {
    //         id: 6,
    //         img: Card1,
    //         text: "Button",
    //     },
    //     {
    //         id: 7,
    //         img: Card1,
    //         text: "Button",
    //     },
    //     {
    //         id: 8,
    //         img: Card1,
    //         text: "Button",
    //     },
    //     {
    //         id: 9,
    //         img: Card1,
    //         text: "Button",
    //     },
    //     {
    //         id: 10,
    //         img: Card1,
    //         text: "Tab",
    //     },
    //     {
    //         id: 11,
    //         img: Card1,
    //         text: "Button",
    //     },
    //     {
    //         id: 12,
    //         img: Card1,
    //         text: "Tab",
    //     },
    // ];
    const addCollection = () => {
        let index = checkdata.length
        console.log("klkkl", index)
        let obj = {
            id: 1,
            checked: false,
            image: checkicon,
            // Name: `${"Collection # " + index}`,
            Name: `Collection #  ${index + 1}`,
        };
        checkdata.unshift(
            obj
        )


        setCheckdata([...checkdata]);
    };

    // <======used for edit the add to collection modal content text=======> 
    const changeDynamicText = (e, index) => {
        let data = [...checkdata];
        data[index].Name = e
        setCheckdata(data)
    }

    const IsMouseEnter = () => {
        setSelectBtn("cont2");
    }

    // <========used for searching app name and chpter name from landing page and filter on this page========>
    var newArray = mainArray.filter((data) => data.text.toLowerCase().includes(searchView.toLowerCase()) || data.chap.toLowerCase().includes(searchView.toLowerCase()))


    // <======used for searching in create Collection modal content==========>
    const filterAddCollection = (e) => {
        const result = e.target.value
        setSearchValue(result)
        const filtterArray = checkdata.filter((data) => data.Name.toLowerCase().includes(result.toLowerCase()))
        setIsSearch(filtterArray)
    }
    // <==========used for checking the search is chapterWise or not===========>
    const chaptername = newArray.map((data) => data.chap.toLowerCase() === searchView.toLowerCase())



    // <==========this useEffect hook is used to filter data through element from filter element checkbox========>
    useEffect(() => {
        if (searchPageResultFilter.length === 0) {
            setMainArray(searchPageUxVideos)
        } else {
            let temp = [];
            searchPageResultFilter.map((item) =>
                searchPageUxVideos.map((data) => {
                    if (data.text.toLowerCase() == item.toLowerCase()) {
                        temp.push(data);
                    }
                })
            );

            setMainArray(temp);
            temp = [];

        }

    }, [searchPageResultFilter]);
    // <==========this useEffect hook is used to set the redux state into local state========>
    useEffect(() => {
        setMainArray(searchPageUxVideos)
    }, [searchPageUxVideos])

    // <==========this useEffect hook is used to handle filter functionality through patern========>
    useEffect(() => {
        if (patternFilterValue.length === 0) {
            setMainArray(searchPageUxVideos)
        } else {
            var temp = [];


            patternFilterValue.map((item) =>
                newArray.map((data) => {
                    if (data.patern.toLowerCase() != item.toLowerCase()) {
                        temp = []
                        return
                    }
                    else {
                        temp.push(data);

                    }
                })
            );
            setMainArray(temp);
            temp = [];

        }
        if (patternFilterValue.length > 1) {
            setMainArray([]);
        }
    }, [patternFilterValue])


    return (
        <>
            <div className="soud_cloud_vedio_section">
                <div className="vedio_card_wrapper">
                    {newArray.map((data, index) => {
                        return (
                            <>
                                <div key={index}>

                                    <div className="vedio_card">

                                        {" "}
                                        <img src={data.img} className="img-fluid" alt="err" />
                                        {chaptername.find(element => element === true) ? <div className="chapterName">
                                            <div className="chpter_name_box">
                                                <div className="chap_text">Starts at</div>
                                                <div className="chap_time_name"><div className="chap_text">00:23</div>  <div className="chap_text">{data.chap}</div></div>
                                            </div>
                                        </div> : ""}

                                        <div className="UI_Secreen_add_collection">
                                            {showPopover ? (
                                                <div
                                                    className="UI_Secreen_popoover_wrapper"
                                                    style={{
                                                        display:
                                                            index === showPopover.open ? "block" : "none",
                                                    }}
                                                >
                                                    <div class="form-group Ui_Secreen_has-search ">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="form_control"
                                                            placeholder="Search Collections"
                                                            onChange={(e) => filterAddCollection(e)}
                                                        ></input>
                                                    </div>
                                                    {isSearch === "" ?
                                                        <>
                                                            {checkdata.map((data, index) => {
                                                                return (
                                                                    <div
                                                                        className="UI_Secreen_collection_checkbox_wrapper"
                                                                        key={index}
                                                                    >
                                                                        <div className="Ui_Secreen_collection_inner_wrapper">
                                                                            <div
                                                                                className={
                                                                                    tick.includes(`${index}`)
                                                                                        ? "Ui_Secreen_checkbox_wrapper_enable"
                                                                                        : "Ui_Secreen_checkbox_wrapper"
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
                                                                                    <EditText
                                                                                        type={"text"}
                                                                                        name={"Name"}
                                                                                        value={data.Name}
                                                                                        onChange={(e) =>
                                                                                            changeDynamicText(e, index)
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}


                                                        </> : <>

                                                            {isSearch.map((data, index) => {
                                                                return (
                                                                    <div
                                                                        className="UI_Secreen_collection_checkbox_wrapper"
                                                                        key={index}
                                                                    >
                                                                        <div className="Ui_Secreen_collection_inner_wrapper">
                                                                            <div
                                                                                className={
                                                                                    tick.includes(`${index}`)
                                                                                        ? "Ui_Secreen_checkbox_wrapper_enable"
                                                                                        : "Ui_Secreen_checkbox_wrapper"
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
                                                                                    <EditText
                                                                                        type={"text"}
                                                                                        name={"Name"}
                                                                                        value={data.Name}
                                                                                        onChange={(e) =>
                                                                                            changeDynamicText(e, index)
                                                                                        }
                                                                                    />
                                                                                </span>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}


                                                        </>


                                                    }

                                                    <div className="UI_Secreen_save_collection_btn_wrapper" >
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
                                                            onClick={
                                                                tick.length >= 1 ? () => saveCollection() : null
                                                            }
                                                        >
                                                            {" "}
                                                            <span
                                                                className="save_txt"
                                                                onClick={handelPopover}
                                                            >
                                                                Save
                                                            </span>{" "}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div
                                            className="share_copy"
                                            onClick={() => {
                                                setSelect({
                                                    open: select.open === index ? false : index,
                                                });
                                            }}
                                            style={{
                                                display: index === select.open ? "block" : "none",
                                            }}
                                        >
                                            <div className="select_content_wrapper_1">
                                                <div
                                                    className="d-flex align-items-center"
                                                    onClick={() => {
                                                        setShowPopover({
                                                            open: showPopover.open === index ? false : index,
                                                        });
                                                    }}
                                                >
                                                    <div>
                                                        <img src={Plus} alt="err" />
                                                    </div>
                                                    <div className="add_to_col">Add to Collection</div>
                                                </div>
                                                <div className="d-flex align-items-center mt-2">
                                                    <div>
                                                        <img src={Down} style={{ marginLeft: "-7px" }} alt="err" />
                                                    </div>
                                                    <div className="select_download">Download</div>
                                                </div>
                                                <div className="d-flex align-items-center mt-2">
                                                    <div>
                                                        <img src={Copy} alt="err" />
                                                    </div>
                                                    <div className="add_to_col" onClick={() => {
                                                        copyShare()
                                                    }}>Copy Share Link</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mobie_share_copy"
                                            onClick={() => {
                                                setSelect({
                                                    open: select.open === index ? false : index,
                                                });
                                            }}
                                            style={{
                                                display: index === select.open ? "block" : "none",
                                            }}>
                                            <div className="d-flex justify-content-center">
                                                <img src={MPlus} onClick={() => {
                                                    setShowPopover({
                                                        open: showPopover.open === index ? false : index,
                                                    });
                                                }} />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <img src={MDownload} />
                                            </div>
                                            <div className="d-flex justify-content-center" onClick={copyShare}>
                                                <img src={MCopy} />
                                            </div>
                                        </div>

                                        <div className="vedio_time">
                                            <div className="vedio_time_wrapper">12:40</div>
                                        </div>

                                        <div className="card_content">
                                            <div className="card_content_show">
                                                <Link to={`/soundcloudpage/${data.id}`

                                                }
                                                    state={{ moreResult: false, vedioScreen: true, vedio: true }}
                                                    className="extra1">
                                                    <div ></div>
                                                </Link>
                                                <div className="extra2">
                                                    <div className="d-flex">
                                                        <div>
                                                            {" "}
                                                            <img src={Cloud} className="onHoverImage" alt="err" />
                                                        </div>
                                                        <div className="onHoverText">{data.text}</div>
                                                    </div>
                                                    <div
                                                        className={selectBtn}
                                                        onMouseEnter={IsMouseEnter}
                                                        onClick={() => {
                                                            setSelect({
                                                                open: select.open === index ? false : index,
                                                            });
                                                        }}
                                                    >
                                                        <img src={option} alt="err" />{" "}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card_botom_text">{data.text}</div>
                                </div>
                                {
                                    setSave ? (
                                        <div className="UI_Secreen_confirmation_wrapper">
                                            <Image src={checkalert} />
                                            <span className="alert_txt">
                                                Video added to 2 Collections
                                            </span>
                                            <div className="undo_btn">
                                                <span className="undo_txt">Undo</span>
                                            </div>
                                        </div>
                                    ) :
                                        copy ? <div className="UI_Secreen_confirmation_wrapper">
                                            <div>
                                                <Image src={checkalert} />
                                                <span className="alert_txt">
                                                    Copy Link
                                                </span>
                                            </div>
                                            <div className="undo_btn">
                                                <span className="undo_txt">Undo</span>
                                            </div>
                                        </div> :


                                            null
                                }
                            </>
                        );
                    })}






                </div>
            </div>

            {
                showPopover.open ? null : (
                    <div className="m_add_collection">
                        <div className="add_collection_header">
                            <div>
                                <img
                                    src={Close}
                                    onClick={() => {
                                        setShowPopover({ open: true });

                                    }}
                                    alt="err"
                                />
                            </div>
                            <div className="m-add_collection_heading">Add to Collection</div>
                            <div></div>
                        </div>
                        <div className="m_add_collection_seprator"></div>
                        <div className="m_search_container">
                            <div className="m_search_wrapper">
                                <div>
                                    <img src={Search} className="m_search_icon" alt="err" />
                                </div>
                                <input
                                    className="search_input"
                                    placeholder="Search Collections"
                                />
                            </div>
                        </div>
                        {checkdata.map((data, index) => {
                            return (
                                <>
                                    <div className="m_checkbox_wrapper">
                                        <div
                                            className={
                                                tick.includes(`${index}`)
                                                    ? "m_checkbox_enable"
                                                    : "m_checkbox"
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
                                </>
                            );
                        })}

                        <div className="m_new_collectionAnd_save">
                            <div className="add_collection_btn" onClick={() => addCollection()}>
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
                                <Link to="/SoundCloudPage">
                                    {" "}
                                    <span className="save_txt">Save</span>
                                </Link>{" "}
                            </div>
                        </div>
                    </div>
                )
            }
            {
                newArray.length == 0 &&
                <div className="d-flex justify-content-center result_not_found" >
                    <div>No Results Found</div>
                </div>}
        </>
    );
};

export default UxVideoSearch;
