import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Friends, FriendsList } from "./userDash/friendsList";
import { NavBar } from "./nav";
import { NewPost } from "./newPost";
import { Timeline } from "./userDash/timeline";
import { SearchUser } from "./searchUser";
import { FriendReqs } from "./userDash/friendReqs";
import { FriendsFeed } from "./userDash/friendsFeed";

export const UserHome = () => {
  const [user, setUser] = useState("");
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams().id;

  const getUserProfile = () => {
    fetch(`https://backend-production-f695.up.railway.app/`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => setUser(res.user));
    setIsLoading(false);
  };

  const getFriends = () => {
    fetch(`https://backend-production-f695.up.railway.app/getFriends/`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => setFriends(res.user.friends));
  };

  useEffect(() => {
    getFriends();

    getUserProfile();
  }, []);

  return (
    <div className="user-home-friends-feed-container">
      <NavBar props={user} />
      <h4>Welcome home, {user.firstName}</h4>
      <NewPost />
      {/* <FriendReqs props={user} /> */}
      <FriendsFeed props={user._id} />
      {/* <FriendsList props={friends} /> */}
    </div>
  );
};
