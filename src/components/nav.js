import React from "react";
import { SearchUser } from "./searchUser";

export const NavBar = ({ props }) => {
  return (
    <div className="nav-bar">
      <p>Welcome back, {props.firstName}!</p>

      <SearchUser />

      <a href="/home">Home</a>
      {/* <a href={`/user/${props}`}>My profile</a> */}
      {/* {props.incomingFriendRequests.length} */}
    </div>
  );
};
