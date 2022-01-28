import React, { useEffect, useState } from 'react';
import "../CreateCollection/createcollection.css"
import collection1 from "../../../assets/images/collection_card.png"
import collection2 from "../../../assets/images/collection_card2.png"
import collection3 from "../../../assets/images/collection_card3.png"
import HOVER1 from "../../../assets/images/soundcloud.png"
import HOVER2 from "../../../assets/images/hover2.png"
import HOVER3 from "../../../assets/images/hover3.png"
import HOVER4 from "../../../assets/images/hover4.png"
import shpy from "../../../assets/images/hover1.png"
import Upload1 from "../../../assets/images/plus_upload.png"
import Upload2 from "../../../assets/images/plus_upload.png"
import Upload3 from "../../../assets/images/plus_upload.png"
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import { EditText, EditTextarea } from 'react-edit-text';

import { useSelector, useDispatch } from 'react-redux';
import { addNewCollection, uploadPick, collectionHeadingChange } from "../../../feature/addCollection/counterSlice"


const CreateCollecton = () => {
    const dispatch = useDispatch();
    const createCollection = useSelector((state) => state.hideShow.createCollection)
    const [images, setImages] = useState([])
    const [imgUrl, setImgUrl] = useState([])
    const [demo, setDemo] = useState([


        {
            img1: collection1,
            img2: collection2,
            img3: collection3,
            text: "Create a Playlist",
            ux: "2 UX Videos",
            ui: "2 UI Screens",

        },
        {
            img1: collection1,
            img2: collection2,
            img3: collection3,
            text: "User Onboarding",
            ux: "2 UX Videos",
            ui: "2 UI Screens",

        },
        {
            img1: collection1,
            img2: collection2,
            img3: collection3,
            text: "Buttons",
            ux: "2 UX Videos",
            ui: "2 UI Screens",

        },
        {
            img1: collection1,
            img2: collection2,
            img3: collection3,
            text: "Card Designs",
            ux: "2 UX Videos",
            ui: "2 UI Screens",

        },
        {
            img1: collection1,
            img2: collection2,
            img3: collection3,
            text: "Sign Ups",
            ux: "2 UX Videos",
            ui: "2 UI Screens",

        },
        {
            img1: collection1,
            img2: collection2,
            img3: collection3,
            text: "Signs In",
            ux: "2 UX Videos",
            ui: "2 UI Screens",

        },
        {
            img1: collection1,
            img2: collection2,
            img3: collection3,
            text: "Create a Playlist",
            ux: "2 UX Videos",
            ui: "2 UI Screens",

        },
        {
            img1: collection1,
            img2: collection2,
            img3: collection3,
            text: "Social App Log Outs",
            ux: "2 UX Videos",
            ui: "2 UI Screens",

        },

    ])
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const onSelectFile = (e, index, position) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(e.target.files[0])
        console.log("prvew image ", objectUrl)
        // I've kept this example simple by using the first image instead of multiple
        // setSelectedFile(e.target.files[0])
        dispatch(uploadPick({ index, position, objectUrl }))
    }
    const [selectedFile1, setSelectedFile1] = useState()
    const [preview1, setPreview1] = useState()
    useEffect(() => {
        if (!selectedFile1) {
            setPreview1(undefined)
            return
        }

        const objectUrl1 = URL.createObjectURL(selectedFile1)
        setPreview1(objectUrl1)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl1)
    }, [selectedFile1])


    const onChnageImage = (e) => {

        setImages([...e.taget.files])

    }
    const changeDynamic = (e, index) => {

        dispatch(collectionHeadingChange({ e, index }))

    }


    return <>
        <div className='create_collection_wrapper'>
            {
                createCollection.map((data, index) => {
                    return (
                        <>
                            <div key={index} >
                                <div className='collecton_card_bg'>
                                    <div className='collection_images_wrapper'>
                                        <div className='empty_collection_card1 shadow' key={data.id}>
                                            {
                                                data.img1 ? <img src={data.img1} style={{ widht: "88px", height: "191px", objectFit: "contain" }} /> : <div className='upload_img_wrapper'><label><input type="file" accept='image/*' multiple onChange={(e) => onSelectFile(e, index, 1)} /><img src={data.uplaodImg1} className='upload_img' /></label></div>
                                            }

                                        </div>
                                        <div className='empty_collection_card2 shadow'>
                                            {
                                                data.img2 ? <img src={data.img2} style={{ widht: "88px", height: "191px", objectFit: "contain" }} /> : <div className='upload_img_wrapper'><label style={{ width: "100%" }}><input type="file" accept='image/*' multiple onChange={(e) => onSelectFile(e, index, 2)} /><img src={data.uplaodImg2} className='upload_img' /></label></div>
                                            }
                                        </div>
                                        <div className='empty_collection_card3 shadow'>
                                            {
                                                data.img3 ? <img src={data.img3} style={{ widht: "88px", height: "191px", objectFit: "contain" }} /> : <div className='upload_img_wrapper'><label style={{ width: "100%" }}><input type="file" accept='image/*' multiple onChange={(e) => onSelectFile(e, index, 3)} /><img src={data.uplaodImg3} className='upload_img' /></label></div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='create_playlist_heading'>  <EditText
                                    type={"text"}
                                    name={"Name"}
                                    value={data.text}

                                    onChange={(e) => changeDynamic(e, index)}

                                /></div>
                                <div className='d-flex' >
                                    <div className="ux_ui">{data.ux}</div>
                                    <div className="ux_ui">  &nbsp;&nbsp;{data.ui}</div>
                                </div>
                            </div>

                        </>
                    )
                })
            }
            {
                demo.map((data) => {
                    return (
                        <>
                            <div>
                                <Link to="/collectionpage">
                                    <div className='collecton_card_bg'>
                                        <div className='collection_images_wrapper'>
                                            <div className='collection_card1'>
                                                <img src={data.img1} />
                                            </div>
                                            <div className='collection_card2'>
                                                <img src={data.img2} />
                                            </div>
                                            <div className='collection_card3'>
                                                <img src={data.img3} />
                                            </div>
                                        </div>
                                        <div className='create_collection_card_hover'>
                                            <div className='hover_card_content_box'>
                                                <div className='d-flex ' ><div><img src={HOVER4} /></div><div className='collection_card_hover_text'>SoundCloud</div></div>
                                                <div className='d-flex hover-card_text_wrapper'><div><img src={HOVER3} /></div><div className='collection_card_hover_text'>Google Fit</div></div>
                                                <div className='d-flex hover-card_text_wrapper'><div><img src={HOVER2} /></div><div className='collection_card_hover_text'>Strava</div></div>
                                                <div className='d-flex hover-card_text_wrapper'><div><img src={shpy} /></div><div className='collection_card_hover_text'>Spotify</div></div>
                                                <div className='d-flex hover-card_text_wrapper'><div className='hover_more_opt'>+ 2 More</div></div>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <div className='create_playlist_heading'>{data.text}</div>
                                <div className='d-flex' >
                                    <div className="ux_ui">{data.ux}</div>
                                    <div className="ux_ui">  &nbsp;&nbsp;{data.ui}</div>
                                </div>
                            </div>
                        </>
                    )
                })


            }

        </div>
        <Footer />
    </>;
};

export default CreateCollecton;
