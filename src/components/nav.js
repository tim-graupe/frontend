import React from "react";
import { SearchUser } from "./searchUser";
import { FriendReqs } from "./userDash/friendReqs";
import "../styles/navBar.css";
export const NavBar = ({ props }) => {
  return (
    <div className="nav-bar">
      <SearchUser />

      <a href="/home">Home</a>
      <a href={`/user/${props._id}`}>My Profile</a>
      {/* {props.incomingFriendRequests.length} */}
      <FriendReqs />
    </div>
  );
};
