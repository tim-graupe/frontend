// this will show user's friends activity, ability to edit profile, upload photos, post a status, incoming/outgoing requests, etc
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Friends, FriendsList } from "./userDash/friendsList";
import { NavBar } from "../nav";
import { Status } from "./status";
import { NewPost } from "../newPost";
import { Timeline } from "./timeline";
import { SearchUser } from "../searchUser";
import { FriendReqs } from "./friendReqs";
import { FriendsFeed } from "./friendsFeed";
import { FriendsList } from "./friendsList";

export const UserHome = () => {
  const [user, setUser] = useState("");
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams().id;

  const getUserProfile = () => {
    fetch(`http://localhost:4000/`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => setUser(res.user));
    setIsLoading(false);
  };

  const getFriends = () => {
    fetch(`http://localhost:4000/getFriends/`, {
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
      <p> {user.status}</p>

      <Status props={user._id} />
      {/* <FriendReqs props={user} /> */}
      <FriendsFeed props={user._id} />
      {/* <FriendsList props={friends} /> */}
    </div>
  );
};
