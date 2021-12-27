import React, { useState } from 'react'
import Card1 from "../../assets/images/card1.png"
import Card2 from "../../assets/images/card2.png"
import Card4 from "../../assets/images/card4.png"
import Card3 from "../../assets/images/card3.png"
import Card6 from "../../assets/images/card6.png"
import Card5 from "../../assets/images/card5.png"
import Card7 from "../../assets/images/card7.png"
import Card8 from "../../assets/images/card8.png"
import Card9 from "../../assets/images/card9.png"
import Plus from "../../assets/images/plus.png"
import Copy from "../../assets/images/copy.png"
import Down from "../../assets/images/Download.png"
import Cloud from "../../assets/images/cloud.png"
import option from "../../assets/images/select.png"
import checkalert from "../../assets/soundcloudimages/CheckAlert.png";
import Close from "../../assets/images/Close.png"
import Search from "../../assets/images/s.png"
import checkicon from "../../assets/soundcloudimages/Check.png";
import { Image } from "react-bootstrap";
import plusiconsave from "../../assets/soundcloudimages/plusiconsave.png";

import { Link } from "react-router-dom"
import "../MobileAddCollection/mobileaddcollection.css"
const UxVideoSecreen = () => {
    const [showPopover, setShowPopover] = useState({ open: true });
    const [tick, setTick] = useState([]);
    const [setSave, showSetSave] = useState(false);
    const [select, setSelect] = useState({ open: false })
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
    const checkTick = async (index) => {
        let findIndex = tick.find((data) => data == index);
        if (findIndex) {
            let removeIndex = await tick.filter((data) => data != index);
            setTick(removeIndex);
        } else {
            setTick([...tick, index]);
        }
    };
    const handelPopover = () => {
        setShowPopover(!showPopover);
    };

    const saveCollection = () => {
        showSetSave(!setSave);

        setTimeout(() => {
            showSetSave(null);
        }, 5000);
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
    const addCollection = () => {
        let obj = {
            id: 1,
            checked: false,
            image: checkicon,
            Name: "Collection #",
        };
        // console.log("ssssssss");
        setCheckdata([...checkdata, obj]);
    };



    return (
        <>

            <div className='soud_cloud_vedio_section'>
                <div className='vedio_card_wrapper'>
                    {
                        vedioCard.map((data, index) => {
                            return (
                                <>

                                    <div key={index}>
                                        <div className='vedio_card' >

                                            <Link to="/soundcloudpage">  <img src={data.img} /></Link>
                                            <div className='UI_Secreen_add_collection'>

                                                {showPopover ?

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
                                                    : null}

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
                                    {setSave ? (
                                        <div className="UI_Secreen_confirmation_wrapper">
                                            <Image src={checkalert} />
                                            <span className="alert_txt">Video added to 2 Collections</span>
                                            <div className="undo_btn">
                                                <span className="undo_txt">Undo</span>
                                            </div>
                                        </div>
                                    ) : null}

                                </>
                            )

                        })
                    }

                </div>
            </div>
            {showPopover.open ? null : <div className='m_add_collection'>
                <div className='add_collection_header'>
                    <div><img src={Close} onClick={() => { setShowPopover({ open: true }) }} /></div>
                    <div className='m-add_collection_heading'>Add to Collection</div>
                    <div></div>
                </div>
                <div className='m_add_collection_seprator'></div>
                <div className='m_search_container'>
                    <div className='m_search_wrapper'>
                        <div><img src={Search} className='m_search_icon' /></div>
                        <input className='search_input' placeholder='Search Collections' />
                    </div>
                </div>
                {
                    checkdata.map((data, index) => {
                        return (
                            <>
                                <div className='m_checkbox_wrapper'>
                                    <div className={
                                        tick.includes(`${index}`)
                                            ? "m_checkbox_enable"
                                            : "m_checkbox"
                                    }
                                        onClick={() => checkTick(`${index}`)}>
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
                        )
                    })
                }

                <div className='m_new_collectionAnd_save'>
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
                        <Link to="/SoundCloudPage"> <span className="save_txt">Save</span></Link>{" "}
                    </div>
                </div>


            </div>}
        </>
    )
}

export default UxVideoSecreen
