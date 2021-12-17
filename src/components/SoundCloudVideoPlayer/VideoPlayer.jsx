import React, { useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./soundcloudvideoplayer.css";
import dil from "../../assets/soundcloudimages/Dil ko karrar aya (cover) - Annural Khalid.mp4";
import tidal from "../../assets/soundcloudimages/Tidal.png";
import tidalthumbnail from "../../assets/soundcloudimages/sidebarthumbnail.png";

const VideoPlayer = () => {
  return (
    <Container className="videoplayer_container" fluid="true">
      <div className="leftaside_wrapper">
        <div className="sc_videoplayer_btn_wrapper">
          <div className="sc_ux_videos">
            <span className="sc_la_ux_txt">UX Videos</span>
          </div>
          <div className="sc_ui_videos">
            <span className="sc_la_ui_txt">UI Screens</span>
          </div>
        </div>

        <div className="sc_video_time_duration_details">
          <div className="sc_left_aside_time_desc">
            <span className="sc_la_time_txt">00:00</span>
            <span className="sc_la_desc_txt">App Landing Screen</span>
          </div>
        </div>

        <div className="sc_video_time_duration_details">
          <div className="sc_left_aside_time_desc_1">
            <span className="sc_la_time_txt_1">00:32</span>
            <span className="sc_la_desc_txt_1">Create an Account</span>
          </div>
        </div>

        <div className="sc_video_time_duration_details">
          <div className="sc_left_aside_time_desc_1">
            <span className="sc_la_time_txt_1">01:11</span>
            <span className="sc_la_desc_txt_1">Log In Screen</span>
          </div>
        </div>

        <div className="sc_video_time_duration_details">
          <div className="sc_left_aside_time_desc_1">
            <span className="sc_la_time_txt_1">00:00</span>
            <span className="sc_la_desc_txt_1">App Landing Screen</span>
          </div>
        </div>

        <div className="sc_video_time_duration_details">
          <div className="sc_left_aside_time_desc_1">
            <span className="sc_la_time_txt_1">01:25</span>
            <span className="sc_la_desc_txt_1">Add a Picture</span>
          </div>
        </div>

        <div className="sc_video_time_duration_details">
          <div className="sc_left_aside_time_desc_1">
            <span className="sc_la_time_txt_1">01:47</span>
            <span className="sc_la_desc_txt_1">Start a free Trial</span>
          </div>
        </div>

        <div className="sc_video_time_duration_details">
          <div className="sc_left_aside_time_desc_1">
            <span className="sc_la_time_txt_1">02:01</span>
            <span className="sc_la_desc_txt_1">Select Plan</span>
          </div>
        </div>
        <div className="sc_video_time_duration_details">
          <div className="sc_left_aside_time_desc_1">
            <span className="sc_la_time_txt_1">02:01</span>
            <span className="sc_la_desc_txt_1">Select Plan</span>
          </div>
        </div>
        <div className="sc_video_time_duration_details">
          <div className="sc_left_aside_time_desc_1">
            <span className="sc_la_time_txt_1">02:23</span>
            <span className="sc_la_desc_txt_1">Payment Details</span>
          </div>
        </div>
        <div className="sc_video_time_duration_details">
          <div className="sc_left_aside_time_desc_1">
            <span className="sc_la_time_txt_1">02:35</span>
            <span className="sc_la_desc_txt_1">User Landing Screen</span>
          </div>
        </div>
      </div>
      <div className="videoplayer_wrapper">
        <video width="100%" height="94%" controls>
          <source src={dil} type="video/mp4" />
        </video>
      </div>
      <div className="rightaside_wrapper">
        <div className="sc_videoplayer_btn_wrapper">
          <div className=" sc_ui_videos">
            <span className="sc_la_ux_txt">Similar Patterns</span>
          </div>
          <div className=" sc_ux_videos">
            <span className="sc_la_ui_txt">Similar Patterns</span>
          </div>
        </div>

        <div className="box_card">
          <div className="right_aside_card_wrapper">
            <div style={{ display: "flex" }}>
              <Image src={tidal} rounded />
              <div className="right_aside_card_video_details">
                <span className="ra_card_txt_signup">Sign Up</span>
                <div className="right_aside_card_thumbnail_items">
                  <Image src={tidalthumbnail} rounded />
                  <span className="tidal_txt">Tidal</span>
                </div>
              </div>
            </div>
            <div className="right_aside_video_time_wrapper">
              <span className="ra_card_video_time_txt">12:34</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default VideoPlayer;
