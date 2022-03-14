import React, { useState, useEffect } from 'react'
import "../../UiSecreenPlayList/uisecreenplaylist.css"
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
import Close from "../../../assets/images/Close.png";
import { Link } from "react-router-dom"
import { EditText, EditTextarea } from 'react-edit-text';
import { Image } from "react-bootstrap";
import Footer from '../../Footer/Footer'
import { useSelector, } from 'react-redux'


const UiScreenSearch = (props) => {

    const Playlist = useSelector((state) => state.hideShow.Playlist)
    const isChanged = useSelector((state) => state.hideShow.isChanged)
    const searchView = useSelector((state) => state.hideShow.searchView)
    const searchPageResultFilter = useSelector((state) => state.AppPageFillter.searchPageResultFilter)
    const patternFilterValue = useSelector((state) => state.AppPageFillter.patternFilterValue)
    const [loader, setLoader] = useState(false)
    const [selectBtn, setSelectBtn] = useState("select_btn");
    const [more, setMore] = useState(5)
    const [mainArray, setMainArray] = useState([])
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

    // <=======slice the aray from 0 to 6 and then dynamicly==========>
    const newScreenArray = mainArray.slice(0, more)
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
    var newArray = newScreenArray.filter((data) => data.text.toLowerCase().includes(searchView.toLowerCase()));
    // ......................below code for filter functionalitly=============

    useEffect(() => {
        if (searchPageResultFilter.length === 0) {
            setMainArray(Playlist)
        } else {
            let temp = [];


            // for (let i = 0; i < searchPageResultFilter.length; i++) {
            //     for (let j = 0; j < Playlist.length; j++) {
            //         console.log("aaaaaaaaaaaaaaaaaaa=>", Playlist[j].text.toLowerCase() === searchPageResultFilter[i].toLowerCase())
            //         if (Playlist[j].text.toLowerCase() === searchPageResultFilter[i].toLowerCase()) {
            //             temp.push(Playlist[j]);
            //             return;
            //         } else {
            //             temp = [];
            //         }
            //         console.log("j", j)
            //     }
            //     console.log("i", i)
            // }

            // ...................NEWT SCRIPT,,,,,,,,,,,


            // Declare two array
            const array2 = ['a', 'b', 'c', 'd'];
            const array1 = ['a', 'x', 'c'];

            // Function definition with passing two arrays
            function findCommonElement(searchPageResultFilter, Playlist) { }

            // Loop for array1
            let chec = []
            for (let i = 0; i < searchPageResultFilter.length; i++) {
                let sb = false
                // Loop for array2
                for (let j = 0; j < Playlist.length; j++) {

                    // Compare the element of each and
                    // every element from both of the
                    // arrays

                    if (searchPageResultFilter[i].toLowerCase() === Playlist[j].text.toLowerCase()) {

                        // Return if common element found
                        chec[i] = true
                        sb = true
                    }
                }
                if (sb == false) {
                    chec[i] = false
                }
            }
            console.log("chec", chec)





            searchPageResultFilter.map((item, index) =>
                Playlist.map((data, pk) => {
                    if (data.text.toLowerCase() === item.toLowerCase()) {
                        temp.push(data)
                    }
                })
            );


            let somthing = false
            for (let i = 0; i < chec.length; i++) {
                if (chec[i] === false) {
                    somthing = true
                }
            }
            if (somthing) {
                setMainArray([]);
                temp = [];
            }
            else {
                setMainArray(temp);
                temp = [];
            }

        }
    }, [searchPageResultFilter]);
    useEffect(() => {
        setMainArray(Playlist)
    }, [Playlist, isChanged])
    useEffect(() => {
        if (patternFilterValue.length === 0) {
            setMainArray(Playlist)
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

            <div className='UI_Secreen_Streem'>
                <div className='Ui_heading'>
                    <div>
                        <div className='more_result_screen_search'>More Results in UI Screens</div>
                    </div>
                </div>
                <div className='UI_Secreen_vedio_card_wrapper'>
                    {
                        newArray.map((data, index) => {
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
                                            <Link to={`/soundcloudpage/${data.id}`} state={{ moreResult: false, vedioScreen: false, showVedio: true, screen: true }}>

                                                <img src={data.img} className='img-fluid' /></Link>
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
            {
                newArray.length == 0 &&
                <div className="d-flex justify-content-center result_not_found" >
                    <div>No Results Found</div>
                </div>}
            {/* {
                patternFilterValue.length > 1 &&

                <div className="d-flex justify-content-center result_not_found" >
                    <div>No Results Found</div>
                </div>} */}
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
