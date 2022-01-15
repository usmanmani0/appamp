import React, { useState } from 'react'

import Stream1 from "../../assets/images/st1.png"
import Stream2 from "../../assets/images/st2.png"
import Stream3 from "../../assets/images/st3.png"
import Stream4 from "../../assets/images/st4.png"
import Stream5 from "../../assets/images/st5.png"
import Stream7 from "../../assets/images/st7.png"
import Stream8 from "../../assets/images/st8.png"
import Stream9 from "../../assets/images/st9.png"
import Copy from "../../assets/images/copy.png"
import Down from "../../assets/images/Download.png"
import option from "../../assets/images/select.png"
import '../AppPage/appPage.css'

import Cloud from "../../assets/images/cloud.png"
import Plus from "../../assets/images/plus.png"

const UiSecreenStream = () => {
    const [select, setSelect] = useState({ open: false })
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
    return (
        <>
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
                        Stream.map((result, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <div className='vedio_card'>
                                            <img src={result.img} style={{ width: "161px" }} />
                                            {/* <div className='share_copy' onClick={() => { setSelect({ open: select.open === index ? false : index }) }} style={{ display: index === select.open ? "block" : "none" }}>
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
                                            </div> */}
                                            {/* <div className="card_content">
                                                <div className='card_content_show'>
                                                    <div className='d-flex'><div> <img src={Cloud} className='onHoverImage' /></div><div className='onHoverText'>sound cloud</div></div>
                                                    <div className='select_btn' onClick={() => { setSelect({ open: select.open === index ? false : index }) }}><img src={option} /> </div>
                                                </div>

                                            </div> */}


                                        </div>

                                    </div>
                                </>
                            )

                        })
                    }

                </div>
            </div>
        </>
    )
}

export default UiSecreenStream
