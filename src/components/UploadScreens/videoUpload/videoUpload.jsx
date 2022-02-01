import React from "react";
import "./videoUpload.css";
const VideoUpload = () => {
  return (
    <div className="d-flex">
      <div className="videoUploadLeftMain"></div>
      <div className="videoUploadRightMain d-flex justify-content-center align-items-center">
        <div className="videoUploadButton d-flex justify-content-center align-items-center">
          Upload video
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
