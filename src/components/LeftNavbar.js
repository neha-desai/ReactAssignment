import "../App.css";
import React from "react";
import { RiHome7Fill } from "react-icons/ri";
import { CgProfile, CgMoreO } from "react-icons/cg";
import {
  HiOutlineHashtag,
  HiOutlineBell,
  HiOutlineMail,
  HiOutlineBookmark,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { Link } from "react-router-dom";

function LeftNavbar() {
  return (
    <div className="LeftNavbar">
      <ul>
        <Link to="/home" className="links">
          <li style={{ color: "#1da1f3" }}>
            <RiHome7Fill />
            Home
          </li>
        </Link>
        <li>
          <HiOutlineHashtag />
          Explore
        </li>
        <li>
          <HiOutlineBell />
          Notifications
        </li>
        <li>
          <HiOutlineMail />
          Messages
        </li>
        <li>
          <HiOutlineBookmark />
          Bookmark
        </li>
        <li>
          <HiOutlineClipboardList />
          Lists
        </li>

        <li>
          <Link to="/profile" className="links">
            <CgProfile />
            Profile
          </Link>
        </li>

        <li>
          <CgMoreO />
          More
        </li>
        <li>
          <button className="btn btn-primary" id="LeftTweet">
            Tweet
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LeftNavbar;
