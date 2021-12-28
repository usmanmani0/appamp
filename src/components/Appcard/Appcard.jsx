import React, { useState } from "react";
import "./appcard.css";
import GoogleFit from "../../assets/images/image 85.png";
import Mint from "../../assets/images/image 79.png";
import TickTick from "../../assets/images/image 107.png";
import GoogleHome from "../../assets/images/image 91.png";
import Tidal from "../../assets/images/image 67.png";
import YouTubeMusic from "../../assets/images/image 66.png";
import Deezer from "../../assets/images/image 65.png";
import Spotify from "../../assets/images/image 68.png";
import Strava from "../../assets/images/image 86.png";
import SoundCloud from "../../assets/images/image 64.png";
import MarketPlace from "../../assets/images/image 93.png";
import Pinterest from "../../assets/images/image 89.png";
import Nextdoor from "../../assets/images/image 90.png";
import WhatsApp from "../../assets/images/image 69.png";
import Discord from "../../assets/images/image 71.png";
import Facebook from "../../assets/images/image 111.png";
import WeChat from "../../assets/images/image 72.png";
import Slack from "../../assets/images/image 73.png";
import SpikeEmail from "../../assets/images/image 78.png";
import Walmart from "../../assets/images/image 101.png";
import Flo from "../../assets/images/image 95.png";
import CreditKarma from "../../assets/images/image 81.png";
import LinkedIn from "../../assets/images/image 74.png";
import Quickbooks from "../../assets/images/image 76.png";
import Email from "../../assets/images/image 77.png";
import HomeWorkout from "../../assets/images/image 87.png";
import Docusign from "../../assets/images/image 106.png";
import Amazon from "../../assets/images/image 100.png";
import CVS from "../../assets/images/image 97.png";
import Weedmaps from "../../assets/images/image 94.png";
import { Link } from 'react-router-dom'

const Appcard = () => {
  const data = [
    {
      img: GoogleFit,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: Mint,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: TickTick,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: GoogleHome,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: Tidal,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: YouTubeMusic,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: Deezer,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: Spotify,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: Strava,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: SoundCloud,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: MarketPlace,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: Pinterest,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: Nextdoor,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WhatsApp,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: Discord,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: Facebook,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: WeChat,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: Slack,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: SpikeEmail,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: Walmart,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: Flo,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: CreditKarma,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: LinkedIn,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: Quickbooks,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: Email,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: HomeWorkout,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: Docusign,
      title: "Communication",
      sub: "Facebook",
    },
    {
      img: Amazon,
      title: "Communication",
      sub: "Whats App",
    },
    {
      img: CVS,
      title: "Communication",
      sub: "Discord",
    },
    {
      img: Weedmaps,
      title: "Communication",
      sub: "Facebook",
    },

  ];
  const [select, setSelect] = useState(false)

  return (
    <>
      <div className="appCard_wrap">
        {data.map((data, index) => {
          return (
            <>
              <div>
                <div className="card_div" key={index}>
                  <div className="img_div">
                    <Link to="/apppage"><img className="card_img" src={data.img} alt="logo" /></Link>
                  </div>
                </div>

                <div className="category_div">{data.title}</div>
                <div className="name_div">{data.sub}</div>
              </div>{" "}
            </>
          );
        })}
      </div>

      <div className="bottom_button"><button className="button_4" type="button" onClick={() => { setSelect(!select) }}>Load More</button></div>
      {select && <div className="d-flex justify-content-center py-1 loader" >
        <div class="spinner-border text-secondary" role="status">

        </div>
        <span class="sr-only"> &nbsp;&nbsp; Loading...</span>
      </div>}
    </>
  );
};

export default Appcard;
