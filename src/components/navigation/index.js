import React from "react";
import "./menu.css";
import SvgHome from "../icons/Home";
import SvgMore from "../icons/More";
import SvgProfile from "../icons/Profile";
import SvgLists from "../icons/Lists";
import SvgBookmark from "../icons/Bookmark";
import SvgMessages from "../icons/Messages";
import SvgNotification from "../icons/Notification";
import SvgExplore from "../icons/Explore";

function Menu() {
  return (
    <div className="menu-item">
      <ul className="menu">
        <li>
          <SvgHome />
          <div className="menuItem"> Home</div>
        </li>
        <li>
          <SvgExplore />
          <div className="menuItem"> Explore</div>
        </li>
        <li>
          <SvgNotification />
          <div className="menuItem"> Notifications</div>
        </li>
        <li>
          <SvgMessages />
          <div className="menuItem"> Messages</div>
        </li>
        <li>
          <SvgBookmark />
          <div className="menuItem"> Bookmarks</div>
        </li>
        <li>
          <SvgLists />
          <div className="menuItem"> Lists</div>
        </li>
        <li>
          <SvgProfile />
          <div className="menuItem"> Profile</div>
        </li>
        <li>
          <SvgMore />
          <div className="menuItem"> More</div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
