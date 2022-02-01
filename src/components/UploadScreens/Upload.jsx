import React from 'react';
import "./uploadscreen.css"
import { useSelector, useDispatch } from 'react-redux';
import { handelUpload } from "../../feature/addCollection/counterSlice"

const Upload = () => {
    const upload = useSelector((state) => state.hideShow.upload)
    const dispatch = useDispatch()
    // const handleChnage = () => {
    //     dispatch(handelUpload())
    // }

    const handle = (e) => {
        console.log("in", e?.target?.files[0]?.name)
        if (e?.target?.files[0]?.name) {
            console.log("innner")
            dispatch(handelUpload())
            console.log("innner2")

        }
    }

    return (
        <>
            {!upload && <div className='upload_file_wrapper'>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile" onChange={handle} />
                    <label class="custom-file-label" for="customFile">Upload Screens</label>
                </div>
            </div>
            }
        </>

    );
};

export default Upload;
