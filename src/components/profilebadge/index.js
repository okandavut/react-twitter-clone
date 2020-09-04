import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

import "./profilebadge.css";

function ProfileBadge() {
  return (
    <div className="profile-badge-section">
      <div className="badge-image-column">
        <img
          src="https://pbs.twimg.com/profile_images/1248539396065783808/gdMpvB-S_400x400.jpg"
          alt=""
          width="50px"
          height="50px"
          className="badge-profile-image"
        ></img>
      </div>
      <div className="badge-user-column">
        <div className="badge-username">Okan DAVUT @okandavutcom</div>
      </div>
    </div>
  );
}

export default ProfileBadge;
