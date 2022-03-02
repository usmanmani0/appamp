import React, { useState } from "react";
import "./uisecreenplaylist.css";
import Secreen1 from "../../assets/images/s1.png";
import Secreen2 from "../../assets/images/s2.png";
import Secreen3 from "../../assets/images/s3.png";
import MPlus from "../../assets/images/mplus.png";
import Secreen4 from "../../assets/images/s4.png";
import Secreen5 from "../../assets/images/s5.png";
import Secreen6 from "../../assets/images/s6.png";
import Secreen7 from "../../assets/images/s7.png";
import Secreen8 from "../../assets/images/s8.png";
import checkicon from "../../assets/soundcloudimages/Check.png";
import Search from "../../assets/images/s.png";
import Secreen9 from "../../assets/images/s9.png";
import Secreen10 from "../../assets/images/s10.png";
import Secreen11 from "../../assets/images/s11.png";
import Secreen12 from "../../assets/images/s12.png";
import Copy from "../../assets/images/copy.png";
import Down from "../../assets/images/Download.png";
import MCopy from "../../assets/images/mcopy.png";
import MDownload from "../../assets/images/mdownload.png";
import plusiconsave from "../../assets/soundcloudimages/plusiconsave.png";

import Cloud from "../../assets/images/cloud.png";
import Plus from "../../assets/images/plus.png";
import option from "../../assets/images/select.png";
import UiSecreenFilter from "../UiSecreenFilter";
import SelectByFeature from "../SelectByFeature";
import Close from "../../assets/images/Close.png";
import { Link } from "react-router-dom";
import { EditText, EditTextarea } from "react-edit-text";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppPageFillter } from "../../feature/HandleAppPagefillter/handleAppPageFillter";
const UiSecreenPlayList = () => {
    const Playlist = useSelector((state) => state.hideShow.Playlist);
    const FeatureArray = useSelector((state) => state.hideShow.FeatureArray);
    const getFiltterValue = useSelector((state) => state.AppPageFillter.appPageFilterBoxValue);
    const [selectBtn, setSelectBtn] = useState("select_btn");

    const xyz = () => {
        setSelectBtn("cont2");
    };

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

    const [select, setSelect] = useState({ open: false });
    const [setSave, showSetSave] = useState(false);
    const [copy, setCopy] = useState(false);

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
        checkdata.unshift(obj);
        // console.log("ssssssss");

        setCheckdata([...checkdata]);
    };
    const changeDynamicText = (e, index) => {
        console.log("kkkk", e, index);
        let data = [...checkdata];
        data[index].Name = e;
        setCheckdata(data);
    };
    const [isSearch, setIsSearch] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const filterAddCollection = (e) => {
        const result = e.target.value;
        setSearchValue(result);
        const filtterArray = checkdata.filter((data) =>
            data.Name.toLowerCase().includes(result.toLowerCase())
        );
        setIsSearch(filtterArray);
    };

    let ab = [...FeatureArray]
    var newArray = []

    let abc = getFiltterValue.map((item) =>
        ab.map((data, key) => {
            let final = []
            console.log(data, "data===================>")
            for (let i = 0; i < data.values.length; i++) {
                if (data.values[i].text.toLowerCase() == item.toLowerCase()) {
                    final.push(data.values[i])

                }
            }
            let obj = { ...data, values: final }
            console.log("final", obj, final);
            ab[key] = obj


        }));
    newArray = ab



    return (
        <>
            <div className="mobile_View_Filter_section">
                <div>
                    <UiSecreenFilter />
                </div>
                <div>
                    <SelectByFeature />
                </div>
            </div>

            {newArray.length === "" ?
                <div>{

                    FeatureArray.map((ParentData, Pindex) => {
                        return (
                            <>
                                <div className="UI_Secreen_Streem" key={Pindex}>
                                    {ParentData?.values.length == 0 ? null :
                                        <div className="Ui_heading">
                                            <div>
                                                <div className="create_play_list">
                                                    {ParentData?.featureName}
                                                </div>
                                                <div className="screens14">14 screens</div>
                                            </div>
                                            <div className="line"></div>
                                        </div>}
                                    <div className="UI_Secreen_vedio_card_wrapper">

                                        {ParentData?.values.map((ChaildData) => {
                                            return (
                                                <>
                                                    <div key={ChaildData.id}>
                                                        <div className="vedio_card">
                                                            <div className="UI_Secreen_add_collection">
                                                                {showPopover ? (
                                                                    <div
                                                                        className="UI_Secreen_popoover_wrapper"
                                                                        style={{
                                                                            display:
                                                                                ChaildData.id === showPopover.open
                                                                                    ? "block"
                                                                                    : "none",
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

                                                                        {isSearch === "" ? (
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
                                                                                                    onClick={() =>
                                                                                                        checkTick(`${index}`)
                                                                                                    }
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
                                                                        ) : (
                                                                            <>
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
                                                                                                    onClick={() =>
                                                                                                        checkTick(`${index}`)
                                                                                                    }
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
                                                                        )}
                                                                        {/* {
                                                                            isSearch.length === 0 &&
                                                                            <div className="d-flex justify-content-center align-items-center " >
                                                                                <div>No Results Found</div>
                                                                            </div>} */}

                                                                        <div className="UI_Secreen_save_collection_btn_wrapper">
                                                                            <div
                                                                                className="add_collection_btn"
                                                                                onClick={() => addCollection()}
                                                                            >
                                                                                <Image src={plusiconsave} />
                                                                                <span className="nc_txt">
                                                                                    New Collection
                                                                                </span>
                                                                            </div>
                                                                            <div
                                                                                className={
                                                                                    tick.length >= 1
                                                                                        ? "save_coll_enable_btn"
                                                                                        : " save_collection_btn"
                                                                                }
                                                                                onClick={
                                                                                    tick.length >= 1
                                                                                        ? () => saveCollection()
                                                                                        : null
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
                                                                        open:
                                                                            select.open === ChaildData.id
                                                                                ? false
                                                                                : ChaildData.id,
                                                                    });
                                                                }}
                                                                style={{
                                                                    display:
                                                                        ChaildData.id === select.open
                                                                            ? "block"
                                                                            : "none",
                                                                }}
                                                            >
                                                                <div className="select_content_wrapper_1">
                                                                    <div
                                                                        className="d-flex align-items-center"
                                                                        onClick={() => {
                                                                            setShowPopover({
                                                                                open:
                                                                                    showPopover.open === ChaildData.id
                                                                                        ? false
                                                                                        : ChaildData.id,
                                                                            });
                                                                        }}
                                                                    >
                                                                        <div>
                                                                            <img src={Plus} />
                                                                        </div>
                                                                        <div className="add_to_col">
                                                                            Add to Collection
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center mt-2">
                                                                        <div>
                                                                            <img
                                                                                src={Down}
                                                                                style={{ marginLeft: "-7px" }}
                                                                            />
                                                                        </div>
                                                                        <div className="select_download">Download</div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center mt-2">
                                                                        <div>
                                                                            <img src={Copy} />
                                                                        </div>
                                                                        <div className="add_to_col">
                                                                            Copy Share Link
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="mobie_share_copy"
                                                                onClick={() => {
                                                                    setSelect({
                                                                        open:
                                                                            select.open === ChaildData.id
                                                                                ? false
                                                                                : ChaildData.id,
                                                                    });
                                                                }}
                                                                style={{
                                                                    display:
                                                                        ChaildData.id === select.open
                                                                            ? "block"
                                                                            : "none",
                                                                }}
                                                            >
                                                                <div className="d-flex justify-content-center">
                                                                    <img
                                                                        src={MPlus}
                                                                        onClick={() => {
                                                                            setShowPopover({
                                                                                open:
                                                                                    showPopover.open === ChaildData.id
                                                                                        ? false
                                                                                        : ChaildData.id,
                                                                            });
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="d-flex justify-content-center">
                                                                    <img src={MDownload} />
                                                                </div>
                                                                <div
                                                                    className="d-flex justify-content-center"
                                                                    onClick={copyShare}
                                                                >
                                                                    <img src={MCopy} />
                                                                </div>
                                                            </div>

                                                            <div className="card_content">
                                                                <div className="card_content_show">
                                                                    <Link to="" className="extra1">
                                                                        <div></div>
                                                                    </Link>
                                                                    <div className="extra2">
                                                                        <div className="d-flex">
                                                                            <div>
                                                                                {" "}
                                                                                <img
                                                                                    src={Cloud}
                                                                                    className="onHoverImage"
                                                                                    alt="err"
                                                                                />
                                                                            </div>
                                                                            <div className="onHoverText">
                                                                                {ChaildData.text}
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className={selectBtn}
                                                                            onMouseEnter={xyz}
                                                                            onClick={() => {
                                                                                setSelect({
                                                                                    open:
                                                                                        select.open === ChaildData.id
                                                                                            ? false
                                                                                            : ChaildData.id,
                                                                                });
                                                                            }}
                                                                        >
                                                                            <img src={option} alt="err" />{" "}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <img src={ChaildData.img} className="img-fluid" />
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
                            </>
                        );
                    })
                }</div> :
                <div>
                    {
                        newArray.map((ParentData, Pindex) => {
                            return (
                                <>
                                    <div className="UI_Secreen_Streem" key={Pindex}>
                                        {ParentData.values.length === 0 ? null :
                                            <div className="Ui_heading">
                                                <div>
                                                    <div className="create_play_list">
                                                        {ParentData.featureName}
                                                    </div>
                                                    <div className="screens14">14 screens</div>
                                                </div>
                                                <div className="line"></div>
                                            </div>}
                                        <div className="UI_Secreen_vedio_card_wrapper">
                                            {ParentData.values.map((ChaildData) => {
                                                return (
                                                    <>
                                                        <div key={ChaildData.id}>
                                                            <div className="vedio_card">
                                                                <div className="UI_Secreen_add_collection">
                                                                    {showPopover ? (
                                                                        <div
                                                                            className="UI_Secreen_popoover_wrapper"
                                                                            style={{
                                                                                display:
                                                                                    ChaildData.id === showPopover.open
                                                                                        ? "block"
                                                                                        : "none",
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

                                                                            {isSearch === "" ? (
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
                                                                                                        onClick={() =>
                                                                                                            checkTick(`${index}`)
                                                                                                        }
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
                                                                            ) : (
                                                                                <>
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
                                                                                                        onClick={() =>
                                                                                                            checkTick(`${index}`)
                                                                                                        }
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
                                                                            )}
                                                                            {/* {
                                                                                        isSearch.length === 0 &&
                                                                                        <div className="d-flex justify-content-center align-items-center " >
                                                                                            <div>No Results Found</div>
                                                                                        </div>} */}

                                                                            <div className="UI_Secreen_save_collection_btn_wrapper">
                                                                                <div
                                                                                    className="add_collection_btn"
                                                                                    onClick={() => addCollection()}
                                                                                >
                                                                                    <Image src={plusiconsave} />
                                                                                    <span className="nc_txt">
                                                                                        New Collection
                                                                                    </span>
                                                                                </div>
                                                                                <div
                                                                                    className={
                                                                                        tick.length >= 1
                                                                                            ? "save_coll_enable_btn"
                                                                                            : " save_collection_btn"
                                                                                    }
                                                                                    onClick={
                                                                                        tick.length >= 1
                                                                                            ? () => saveCollection()
                                                                                            : null
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
                                                                            open:
                                                                                select.open === ChaildData.id
                                                                                    ? false
                                                                                    : ChaildData.id,
                                                                        });
                                                                    }}
                                                                    style={{
                                                                        display:
                                                                            ChaildData.id === select.open
                                                                                ? "block"
                                                                                : "none",
                                                                    }}
                                                                >
                                                                    <div className="select_content_wrapper_1">
                                                                        <div
                                                                            className="d-flex align-items-center"
                                                                            onClick={() => {
                                                                                setShowPopover({
                                                                                    open:
                                                                                        showPopover.open === ChaildData.id
                                                                                            ? false
                                                                                            : ChaildData.id,
                                                                                });
                                                                            }}
                                                                        >
                                                                            <div>
                                                                                <img src={Plus} />
                                                                            </div>
                                                                            <div className="add_to_col">
                                                                                Add to Collection
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex align-items-center mt-2">
                                                                            <div>
                                                                                <img
                                                                                    src={Down}
                                                                                    style={{ marginLeft: "-7px" }}
                                                                                />
                                                                            </div>
                                                                            <div className="select_download">Download</div>
                                                                        </div>
                                                                        <div className="d-flex align-items-center mt-2">
                                                                            <div>
                                                                                <img src={Copy} />
                                                                            </div>
                                                                            <div className="add_to_col">
                                                                                Copy Share Link
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="mobie_share_copy"
                                                                    onClick={() => {
                                                                        setSelect({
                                                                            open:
                                                                                select.open === ChaildData.id
                                                                                    ? false
                                                                                    : ChaildData.id,
                                                                        });
                                                                    }}
                                                                    style={{
                                                                        display:
                                                                            ChaildData.id === select.open
                                                                                ? "block"
                                                                                : "none",
                                                                    }}
                                                                >
                                                                    <div className="d-flex justify-content-center">
                                                                        <img
                                                                            src={MPlus}
                                                                            onClick={() => {
                                                                                setShowPopover({
                                                                                    open:
                                                                                        showPopover.open === ChaildData.id
                                                                                            ? false
                                                                                            : ChaildData.id,
                                                                                });
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div className="d-flex justify-content-center">
                                                                        <img src={MDownload} />
                                                                    </div>
                                                                    <div
                                                                        className="d-flex justify-content-center"
                                                                        onClick={copyShare}
                                                                    >
                                                                        <img src={MCopy} />
                                                                    </div>
                                                                </div>

                                                                <div className="card_content">
                                                                    <div className="card_content_show">
                                                                        <Link to="" className="extra1">
                                                                            <div></div>
                                                                        </Link>
                                                                        <div className="extra2">
                                                                            <div className="d-flex">
                                                                                <div>
                                                                                    {" "}
                                                                                    <img
                                                                                        src={Cloud}
                                                                                        className="onHoverImage"
                                                                                        alt="err"
                                                                                    />
                                                                                </div>
                                                                                <div className="onHoverText">
                                                                                    {ChaildData.text}
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className={selectBtn}
                                                                                onMouseEnter={xyz}
                                                                                onClick={() => {
                                                                                    setSelect({
                                                                                        open:
                                                                                            select.open === ChaildData.id
                                                                                                ? false
                                                                                                : ChaildData.id,
                                                                                    });
                                                                                }}
                                                                            >
                                                                                <img src={option} alt="err" />{" "}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <img src={ChaildData.img} className="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            }
            {showPopover.open ? null : (
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
                                onChange={(e) => filterAddCollection(e)}
                            />
                        </div>
                    </div>
                    {isSearch === "" ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            {isSearch.map((data, index) => {
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
                        </>
                    )}
                    {isSearch.length == 0 && (
                        <div className="d-flex justify-content-center align-items-center ">
                            <div>No Results Found</div>
                        </div>
                    )}

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
            )}
        </>
    );
};

export default UiSecreenPlayList;
