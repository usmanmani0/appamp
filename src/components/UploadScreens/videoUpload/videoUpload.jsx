import React, { useRef, useEffect } from "react";
import "./videoUpload.css";
import { AiOutlinePlus } from "react-icons/ai";
import ReactPlayer from "react-player";
import dil from "../../../assets/soundcloudimages/Dil ko karrar aya (cover) - Annural Khalid.mp4";
const VideoUpload = () => {
  const [inpu, setInpu] = React.useState(["1"]);
  const [source, setSource] = React.useState();
  const [playOn, setPlayOn] = React.useState({
    playing: true,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
    muted: true,
    volume: 0.5,
  });

  const [uploadVedio, setUploadVedio] = React.useState("");

  const { playing, playbackRate, played, muted, volume, seeking } = playOn;
  const playRef = useRef(null);
  const inputRef = React.useRef();
  const handelProgress = (changeState) => {
    // console.log("CHANGE STATE", changeState);
    if (!playOn.seeking) {
      setPlayOn({ ...playOn, ...changeState });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    console.log("comsat lahore");
    setSource(url);
  };

  const handleChoose = (event) => {
    console.log("comsat lahore333", inputRef.current);
    inputRef.current.click();
  };





  return (
    <div className="d-flex">
      <div className="videoUploadLeftMain">
        <div className="videoUploadChapterHeading">Chapters</div>
        <div className="headingline"></div>
        {inpu.map(() => {
          return (
            <div className="d-flex justify-content-center mrBinput">
              <div>
                <input type="text" placeholder="00:00" className=" firstIn" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Chapter Name"
                  className=" secondIn"
                />
              </div>
            </div>
          );
        })}

        <div className="d-flex justify-content-center">
          <div
            className="plusButton"
            onClick={() => setInpu((inpu) => [...inpu, "add"])}
          >
            <AiOutlinePlus color="black" size={12} />
          </div>
        </div>
      </div>
      <div className="videoUploadRightMain d-flex justify-content-center align-items-center">
        <input
          ref={inputRef}
          style={{ display: "none" }}
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4"
        />
        {
          !source &&
          <div className="videoUploadButton d-flex justify-content-center align-items-center">
            <span onClick={handleChoose}>
              Upload video
            </span>
          </div>
        }
        {source &&
          <ReactPlayer
            playbackRate={playbackRate}
            ref={playRef}
            onProgress={handelProgress}
            url={source}
            muted={muted}
            playing={playing}
            width={"100%"}
            height={"100%"}
            volume={volume}
            controls={true}
          />
        }

      </div>
    </div>
  );
};

export default VideoUpload;
