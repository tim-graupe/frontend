import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../nav";
import { NewPost } from "../newPost";
import { FriendsFeed } from "./friendsFeed";
import config from "../../config";

export const UserHome = () => {
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams().id;
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? config.development.apiUrl
      : config.production.apiUrl;

  const getUserProfile = () => {
    fetch(`${apiUrl}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => setUser(res.user));
    setIsLoading(false);
  };

  const getFriends = () => {
    fetch(`${apiUrl}/getFriends/`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => setFriends(res.user.friends));
  };

  useEffect(() => {
    getFriends();
    getUserProfile();
  }, []);

  const test = () => {
    fetch(`${apiUrl}/`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="user-home-friends-feed-container">
      {user && user.firstName ? (
        <div className="nav-header">
          <NavBar props={user} />

          <h4 onClick={test}>Welcome home, {user.firstName}!</h4>
        </div>
      ) : null}
      <NewPost />
      {friends.length > 0 ? <FriendsFeed props={user._id} /> : null}
    </div>
  );
};
