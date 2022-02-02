import React from 'react';
import "./uploadscreen.css"
import { useSelector, useDispatch } from 'react-redux';
import { handelUpload } from "../../feature/addCollection/counterSlice"

const Upload = () => {
    const upload = useSelector((state) => state.hideShow.upload)
    const dispatch = useDispatch()


    const handle = (e) => {

        if (e?.target?.files[0]) {
            let image = URL.createObjectURL(e?.target?.files[0])
            dispatch(handelUpload(image))
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
