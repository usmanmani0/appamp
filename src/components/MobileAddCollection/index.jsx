import React, { useState } from 'react'
import "../NavBarSoundCloud/navbarsoundcloud.css";
import plusiconsave from "../../assets/soundcloudimages/plusiconsave.png";
import checkicon from "../../assets/soundcloudimages/Check.png";

import {

    Image,
    Modal,

} from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { handleShowModal } from '../../feature/hideShowModal/hideshowModal';

const MobileAddCollectionModal = () => {
    const showAddModal = useSelector((state) => state.showModal.show)
    const fullscreen = useSelector((state) => state.showModal.fullscreen)
    const dispatch = useDispatch()
    const [setSave, showSetSave] = useState(false);
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
    const saveCollection = () => {
        showSetSave(!setSave);

        setTimeout(() => {
            showSetSave(null);
        }, 5000);
    };
    return (
        <>
            <div className="mdl_mv">
                <Modal
                    show={showAddModal}
                    fullscreen={fullscreen}
                    onHide={() => dispatch(handleShowModal(false))}
                >
                    <Modal.Header className="mdl_header_navbar" closeButton>
                        <Modal.Title style={{ textAlign: "center" }}>
                            Add to Collection
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="popoover_wrapper_mv">
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
                                    <div
                                        className="collection_checkbox_wrapper"
                                        key={index}
                                    >
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

                            <div className="save_collection_btn_wrapper_mv">
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
                                    <a style={{ textDecoration: 'none' }} href="/SoundCloudPage">
                                        {" "}
                                        <span className="save_txt">Save</span>
                                    </a>{" "}
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default MobileAddCollectionModal
