import React, { useState } from 'react'
import "../../UiSecreenPlayList/uisecreenplaylist.css"
import Secreen1 from "../../../assets/images/s1.png"
import Secreen2 from "../../../assets/images/s2.png"
import Secreen3 from "../../../assets/images/s3.png"
import MPlus from "../../../assets/images/mplus.png"
import Secreen4 from "../../../assets/images/s4.png"
import Secreen66 from "../../../assets/images/moreresult.png"
import Secreen5 from "../../../assets/images/s5.png"
import Secreen6 from "../../../assets/images/s6.png"
import Secreen7 from "../../../assets/images/s7.png"
import Secreen111 from "../../../assets/images/screen111.png"
import Secreen222 from "../../../assets/images/screen222.png"
import Secreen333 from "../../../assets/images/screen333.png"
import Secreen8 from "../../../assets/images/s8.png"
import checkicon from "../../../assets/soundcloudimages/Check.png";
import Search from "../../../assets/images/s.png";
import Secreen9 from "../../../assets/images/s9.png"
import Secreen10 from "../../../assets/images/s10.png"
import Secreen11 from "../../../assets/images/s11.png"
import Secreen12 from "../../../assets/images/s12.png"
import Copy from "../../../assets/images/copy.png"
import Down from "../../../assets/images/Download.png"
import MCopy from "../../../assets/images/mcopy.png"
import MDownload from "../../../assets/images/mdownload.png"
import plusiconsave from "../../../assets/soundcloudimages/plusiconsave.png";

import Cloud from "../../../assets/images/cloud.png"
import Plus from "../../../assets/images/plus.png"
import option from "../../../assets/images/select.png"
// import UiSecreenFilter from "../UiSecreenFilter"
// import SelectByFeature from '../SelectByFeature'
import Close from "../../../assets/images/Close.png";
import { Link } from "react-router-dom"
import { EditText, EditTextarea } from 'react-edit-text';
import { Image } from "react-bootstrap";
import Footer from '../../Footer/Footer'


const UiScreenSearch = () => {
    const [selectBtn, setSelectBtn] = useState("select_btn");
    const [more, setMore] = useState(5)
    const [loader, setLoader] = useState(false)
    const xyz = () => {
        console.log("onMouse ebter fn")
        setSelectBtn("cont2");
    }
    const [showPopover, setShowPopover] = useState({ open: true });
    const [tick, setTick] = useState([]);
    const [checkdata, setCheckdata] = useState([
        {
            id: 1,
            checked: false,
            image: checkicon,
            Name: "Collection #",
        },
        {
            id: 2,
            checked: true,
            image: checkicon,
            Name: "Collection #",
        },
        {
            id: 3,
            checked: true,
            image: checkicon,
            Name: "Collection #",
        },
    ]);
    const checkTick = async (index) => {
        let findIndex = tick.find((data) => data === index);
        if (findIndex) {
            let removeIndex = await tick.filter((data) => data !== index);
            setTick(removeIndex);
        } else {
            setTick([...tick, index]);
        }
    };

    const [select, setSelect] = useState({ open: false })
    const [setSave, showSetSave] = useState(false);
    const [copy, setCopy] = useState(false);

    const Playlist = [
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
            img: Secreen111,

        },
        {
            img: Secreen222,

        },
        {
            img: Secreen333,

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
            img: Secreen111,

        },
        {
            img: Secreen222,

        },
        {
            img: Secreen333,

        },
        {
            img: Secreen11,
            text: "Exploring an Artist "
        },
        {
            img: Secreen12,
            text: "Exploring an Artist "
        },
        {
            img: Secreen111,

        },
        {
            img: Secreen222,

        },
        {
            img: Secreen333,

        },
        ,
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
        ,
        {
            img: Secreen111,

        },
        {
            img: Secreen222,

        },
        {
            img: Secreen333,

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
            img: Secreen111,

        },
        {
            img: Secreen222,

        },
        {
            img: Secreen333,

        },
        {
            img: Secreen11,
            text: "Exploring an Artist "
        },


    ]
    const newScreenArray = Playlist.slice(0, more)
    const handelPopover = () => {
        setShowPopover(!showPopover);
    };
    const saveCollection = () => {
        showSetSave(!setSave);

        setTimeout(() => {
            showSetSave(null);
        }, 5000);
    };
    const copyShare = () => {
        setCopy(!setSave);

        setTimeout(() => {
            setCopy(null);
        }, 5000);
    };
    const addCollection = () => {
        let obj = {
            id: 1,
            checked: false,
            image: checkicon,
            Name: "Collection #",
        };
        checkdata.unshift(
            obj
        )
        // console.log("ssssssss");

        setCheckdata([...checkdata]);
    };
    const MoreResult = () => {

        setLoader(true)
        setTimeout(() => { setLoader(false); setMore(Playlist.length) }, 1000);







    }
    return (
        <>
            {/* <div className='mobile_View_Filter_section'>
                <div><UiSecreenFilter /></div>
                <div><SelectByFeature /></div>
            </div> */}
            <div className='UI_Secreen_Streem'>
                <div className='Ui_heading'>
                    <div>
                        <div className='more_result_screen_search'>More Results in UI Screens</div>
                        {/* <div className='screens14'>14 screens</div> */}
                    </div>
                    {/* <div className='line'></div> */}
                </div>
                <div className='UI_Secreen_vedio_card_wrapper'>
                    {
                        newScreenArray.map((data, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <div className='vedio_card'>

                                            {/* <div className='share_copy'
                                                onClick={() => { setSelect({ open: select.open === index ? false : index }) }} style={{ display: index === select.open ? "block" : "none" }} >
                                                <div className='select_content_wrapper_1'>

                                                    <div className='d-flex align-items-center'
                                                        onClick={() => {
                                                            setShowPopover({
                                                                open: showPopover.open === index ? false : index,
                                                            });
                                                        }}
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
                                            </div> */}
                                            {/* <div className="mobie_share_copy"
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
                                            </div> */}

                                            {/* <div className="card_content">
                                                <div className="card_content_show">
                                                    <Link to="" className="extra1">
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
                                                            onMouseEnter={xyz}
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
                                            </div> */}

                                            <img src={data.img} className='img-fluid' />
                                        </div>
                                    </div>
                                </>
                            )

                        })
                    }
                    {newScreenArray.length == 5 ? <div className='vedio_card' onClick={MoreResult}>

                        {/* <div className='share_copy'
onClick={() => { setSelect({ open: select.open === index ? false : index }) }} style={{ display: index === select.open ? "block" : "none" }} >
<div className='select_content_wrapper_1'>

<div className='d-flex align-items-center'
onClick={() => {
setShowPopover({
open: showPopover.open === index ? false : index,
});
}}
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
</div> */}
                        {/* <div className="mobie_share_copy"
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
</div> */}

                        {/* <div className="card_content">
<div className="card_content_show">
<Link to="" className="extra1">
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
onMouseEnter={xyz}
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
</div> */}

                        <img src={Secreen66} className='img-fluid' />
                    </div> : ""}
                </div>

            </div>
            {/* {showPopover.open ? null : (
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
            )} */}
            {loader == true ?
                <div className="d-flex justify-content-center py-1 loader loader_set" >
                    <div class="spinner-border text-secondary" role="status">

                    </div>
                    <span class="sr-only"> &nbsp;&nbsp; Loading...</span>
                </div> : ""
            }


        </>
    )
}

export default UiScreenSearch
