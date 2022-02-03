import React, { useRef, useEffect } from "react";
import "./videoUpload.css";
import { AiOutlinePlus } from "react-icons/ai";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import PlayerControls from "../../PlayerControls/PlayerControls";
import dil from "../../../assets/soundcloudimages/Dil ko karrar aya (cover) - Annural Khalid.mp4";
const format = (seconds) => {
  if (isNaN(seconds)) {
    return "00:00";
  }

  console.log(",kkkkk", seconds * 1000);
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");

  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }

  return `${mm}:${ss}`;
};
const VideoUpload = () => {
  const [inpu, setInpu] = React.useState([{ time: "", name: "" }]);
  const handleChangeTime = (e, index) => {
    let items = [...inpu];
    items[index][e.target.name] = e.target.value;
    setInpu(items);
  };
  const [source, setSource] = React.useState();
  const [playOn, setPlayOn] = React.useState({
    playing: true,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
    muted: true,
    volume: 0.5,
  });
  const [leftAsideShow, setLeftAsideShow] = React.useState(true);
  const [uploadVedio, setUploadVedio] = React.useState("");

  const { playing, playbackRate, played, muted, volume, seeking } = playOn;
  const playRef = useRef(null);
  const videoPlayerContainerRef = useRef();
  const inputRef = React.useRef();
  const handelPlayPause = () => {
    setPlayOn({ ...playOn, playing: !playOn.playing });
  };

  const onPlayBackRateChange = (rate) => {
    setPlayOn({ ...playOn, playbackRate: rate });
  };

  const handelProgress = (changeState) => {
    // console.log("CHANGE STATE", changeState);
    if (!playOn.seeking) {
      setPlayOn({ ...playOn, ...changeState });
    }
  };

  const handelSeekChange = (e, newValue) => {
    setPlayOn({ ...playOn, played: parseFloat(newValue / 100) });
  };
  const handelSeekMouseDown = (e) => {
    setPlayOn({ ...playOn, seeking: true });
  };
  const handelSeekMouseUp = (e, newValue) => {
    setPlayOn({ ...playOn, seeking: false });
    playRef.current.seekTo(newValue / 100);
  };

  const handelLeftSideBar = () => {
    setLeftAsideShow(!leftAsideShow);
  };

  const handelMute = () => {
    setPlayOn({ ...playOn, muted: !playOn.muted });
  };
  const handelVolumeChange = (e, newValue) => {
    setPlayOn({
      ...playOn,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handelVolumeSeekUp = (e, newValue) => {
    setPlayOn({
      ...playOn,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };
  const goFullScreen = () => {
    screenfull.toggle(videoPlayerContainerRef.current);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };
  const currentTime = playRef.current
    ? playRef.current.getCurrentTime()
    : "00:00";
  const duration = playRef.current ? playRef.current.getDuration() : "00:00";
  const elapsedTime = format(currentTime);
  const totalDuration = format(duration);

  return (
    <div className="d-flex df">
      <div className="videoUploadLeftMain">
        <div className="videoUploadChapterHeading">Chapters</div>
        <div className="headingline"></div>

        {inpu.map((data, key) => {
          return (
            <div className="d-flex justify-content-center mrBinput">
              <div>
                <input
                  type="text"
                  value={data.time}
                  name="time"
                  placeholder="00:00"
                  className=" firstIn"
                  maxLength={5}
                  onChange={(e) => handleChangeTime(e, key)}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={data.name}
                  name="name"
                  placeholder="Chapter Name"
                  className=" secondIn"
                  onChange={(e) => handleChangeTime(e, key)}
                />
              </div>
            </div>
          );
        })}

        <div className="d-flex justify-content-center">
          <div
            className="plusButton"
            onClick={() => setInpu((inpu) => [...inpu, { time: "", name: "" }])}
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
        {!source && (
          <div className="videoUploadButton d-flex justify-content-center align-items-center">
            <span onClick={handleChoose}>Upload video</span>
          </div>
        )}
        {source && (
          <>
            <div
              ref={videoPlayerContainerRef}
              style={{ position: "relative", height: "100%" }}
            >
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
                controls={false}
              />
              <PlayerControls
                onPlayPause={handelPlayPause}
                playing={playing}
                // onTime={handelTime}
                // onRewind={handelRewind}
                // onFastForward={handelFastForward}
                playbackRate={playbackRate}
                onPlayBackRateChange={onPlayBackRateChange}
                played={played}
                onSeek={handelSeekChange}
                onSeekMouseDown={handelSeekMouseDown}
                onSeekMouseUp={handelSeekMouseUp}
                seeking={seeking}
                muted={muted}
                onMute={handelMute}
                onVolumeSeekUp={handelVolumeSeekUp}
                onVolumeChange={handelVolumeChange}
                volume={volume}
                goFullScreen={goFullScreen}
                elapsedTime={elapsedTime}
                totalDuration={totalDuration}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoUpload;
