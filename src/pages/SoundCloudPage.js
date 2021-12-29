import React, { useState } from "react";
import NavBarSoundCloud from "../components/NavBarSoundCloud/NavBarSoundCloud";
import VideoPlayer from "../components/SoundCloudVideoPlayer/VideoPlayer";
import UiSecreenFilter from "../components/UiSecreenFilter";

const asidedata = [
  {
    id: 1,
    videotimelft: "00:00",
    videotitleontime: "App Landing Screen",
    time: 0,
  },
  {
    id: 2,
    videotimelft: "00:32",
    videotitleontime: "Create an Account",
    time: 10,
  },
  {
    id: 3,
    videotimelft: "01:11",
    videotitleontime: "Log In Screen",
    time: 20,
  },
  {
    id: 4,
    videotimelft: "01:25",
    videotitleontime: "Add a Picture",
    time: 30,
  },
  {
    id: 5,
    videotimelft: "01:47",
    videotitleontime: "Start a free Trial",
    time: 40,
  },
  {
    id: 6,
    videotimelft: "02:01",
    videotitleontime: "Select Plan",
    time: 50,
  },
  {
    id: 7,
    videotimelft: "02:23",
    videotitleontime: "Payment Details",
    time: 60,
  },
  {
    id: 8,
    videotimelft: "02:35",
    videotitleontime: "User Landing Screen",
    time: 70,
  },
];

export default function SoundCloudPage() {
  const [color, setColor] = useState(1);

  return (
    <>
      <NavBarSoundCloud
        asidedata={asidedata}
        color={color}
        setColor={setColor}
      />
      <VideoPlayer asidedata={asidedata} color={color} setColor={setColor} />
    </>
  );
}
