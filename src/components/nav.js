import React from "react";
import { SearchUser } from "./searchUser";

export const NavBar = ({ props }) => {
  return (
    <div className="nav-bar">
      <SearchUser />

      <a href="/home">Home</a>
      <a href={`/user/${props._id}`}>My profile</a>
      {/* {props.incomingFriendRequests.length} */}
    </div>
  );
};
