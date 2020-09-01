import React from "react";
import "./menu.css";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
function Menu() {
  return (
    <div className="menu-item">
      <ul className={"menu"}>
        <li>
          <HomeRoundedIcon />
          <div className={"menuItem"}> Home</div>
        </li>
        <li>
          <HomeRoundedIcon />
          <div className={"menuItem"}> Explore</div>
        </li>
        <li>
          <HomeRoundedIcon />
          <div className={"menuItem"}> Notifications</div>
        </li>
        <li>
          <HomeRoundedIcon />
          <div className={"menuItem"}> Messages</div>
        </li>
        <li>
          <HomeRoundedIcon />
          <div className={"menuItem"}> Bookmarks</div>
        </li>
        <li>
          <HomeRoundedIcon />
          <div className={"menuItem"}> Lists</div>
        </li>
        <li>
          <HomeRoundedIcon />
          <div className={"menuItem"}> Profile</div>
        </li>
        <li>
          <HomeRoundedIcon />
          <div className={"menuItem"}> More</div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
