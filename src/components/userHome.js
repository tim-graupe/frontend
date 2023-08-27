// this will show user's friends activity, ability to edit profile, upload photos, post a status, incoming/outgoing requests, etc
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Friends } from "./userDash/friendsList";
import { NavBar } from "./nav";
import { Status } from "./userDash/status";
import { NewPost } from "./newPost";
import { Timeline } from "./userDash/timeline";
import { SearchUser } from "./searchUser";

export const UserHome = () => {
  const [user, setUser] = useState("");
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

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="user-profile-container">
      <section className="user-picture-and-name">
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <img src={user.profile_pic} alt="profile pic" />
        <p> {user.status}</p>
      </section>

      <h4>Posts</h4>
      <Timeline props={user.posts} />
      <NavBar props={user} />
      <Status props={user._id} />
      <NewPost props={user} />
    </div>
  );
};
