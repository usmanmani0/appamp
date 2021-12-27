import React, { useState } from 'react'
import "./mobileaddcollection.css"
import Close from "../../assets/images/Close.png"
import Search from "../../assets/images/s.png"
import checkicon from "../../assets/soundcloudimages/Check.png";
import { Image } from "react-bootstrap";
import plusiconsave from "../../assets/soundcloudimages/plusiconsave.png";

const MobileAddCollection = () => {

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
    const [tick, setTick] = useState([]);

    const checkTick = async (index) => {
        let findIndex = tick.find((data) => data == index);
        if (findIndex) {
            let removeIndex = await tick.filter((data) => data != index);
            setTick(removeIndex);
        } else {
            setTick([...tick, index]);
        }
    };
    const [setSave, showSetSave] = useState(false);
    const saveCollection = () => {
        showSetSave(!setSave);

        setTimeout(() => {
            showSetSave(null);
        }, 5000);
    };
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
    return (
        <>
            <div className='m_add_collection'>
                <div className='add_collection_header'>
                    <div><img src={Close} /></div>
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
                        <a href="/SoundCloudPage"> <span className="save_txt">Save</span></a>{" "}
                    </div>
                </div>


            </div>








        </>


    )


}

export default MobileAddCollection
