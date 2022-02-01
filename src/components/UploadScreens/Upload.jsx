import React from 'react';
import "./uploadscreen.css"

const Upload = () => {
    return <div>
        <div className='upload_file_wrapper'>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" />
                <label class="custom-file-label" for="customFile">Upload Screens</label>
            </div>
        </div>

    </div>;
};

export default Upload;
