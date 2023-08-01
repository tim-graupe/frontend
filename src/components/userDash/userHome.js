// this will show user's friends activity, ability to edit profile, upload photos, post a status, incoming/outgoing requests, etc
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Friends } from "./friendsList";
import { NavBar } from "../nav";
import { Status } from "./status";
import { NewPost } from "../newPost";
import { Timeline } from "./timeline";

export const UserHome = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams().id;
  useEffect(() => {
    const getDashBoard = () => {
      fetch(`http://localhost:4000/user/${id}`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) => setUser(response));
    };
    getDashBoard();
    setIsLoading(false);
  }, []);

  return (
    <div className="user-profile-container">
      <Timeline />
      <NewPost />
      <NavBar props={user} />

      <Status props={user.status} />
    </div>
  );
};