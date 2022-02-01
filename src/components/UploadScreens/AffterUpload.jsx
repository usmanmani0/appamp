import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Arrow from "../../assets/images/ArrowRight.png"
import card1 from "../../assets/images/card5.png"
import "./uploadscreen.css"

const AffterUpload = () => {
    const upload = useSelector((state) => state.hideShow.upload)

    useEffect(() => {
    }, [upload])

    return (<>

        {
            upload &&

            <div className='d-flex justify-content-between'>



                <div className='upload_screen_name'>
                    <div className='screen_name_div'>
                        <div>Screen 1</div>
                        <div><img src={Arrow} /></div>
                    </div>
                    <div className='screen_name_div'>
                        <div>Screen 2</div>
                        <div><img src={Arrow} /></div>
                    </div>
                    <div className='screen_name_div'>
                        <div>Screen 3</div>
                        <div><img src={Arrow} /></div>
                    </div>
                    <div className='screen_name_div'>
                        <div>Screen 4</div>
                        <div><img src={Arrow} /></div>
                    </div>
                    <div className='screen_name_div'>
                        <div>Screen 5</div>
                        <div><img src={Arrow} /></div>
                    </div>
                    <div className='screen_name_div'>
                        <div>Screen 6</div>
                        <div><img src={Arrow} /></div>
                    </div>
                    <div className='screen_name_div'>
                        <div>Screen 7</div>
                        <div><img src={Arrow} /></div>
                    </div>
                    <div className='screen_name_div'>
                        <div>Screen 8</div>
                        <div><img src={Arrow} /></div>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <h1>Filter Section</h1>
                </div>

                <div className='upload_filter_sec'>
                    <img src={card1} />
                </div>

            </div>
        }

    </>

    )
};

export default AffterUpload;
