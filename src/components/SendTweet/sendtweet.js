import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

import "./sendtweet.css";

function SendTweet() {
  return (
    <React.Fragment>
      <div className="send-tweet">
        <img
          src="https://pbs.twimg.com/profile_images/1248539396065783808/gdMpvB-S_400x400.jpg"
          alt=""
          width="50px"
          height="50px"
          className="profile-image"
        ></img>
        <input
          type="text"
          placeholder="What's Happening"
          className="send-tweet-box"
        ></input>
      </div>
      <div className="send-iconset">
        <div className="icons">
          <HomeRoundedIcon />
          <HomeRoundedIcon />
          <HomeRoundedIcon />
          <HomeRoundedIcon />
          <HomeRoundedIcon />
        </div>
        <div>
          <button type="button">Tweet </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SendTweet;
