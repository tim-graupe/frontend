// this will show user's friends activity, ability to edit profile, upload photos, post a status, incoming/outgoing requests, etc
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Friends } from "./userDash/friendsList";
import { NavBar } from "./nav";
import { Timeline } from "./userDash/timeline";
export const UserProfile = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams().id;

  const getUserProfile = () => {
    fetch(`http://localhost:4000/user/${id}`, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((response) => setUser(response));
  };

  useEffect(() => {
    getUserProfile();
    setIsLoading(false);
  }, []);

  return (
    <div className="user-profile-container">
      <section className="user-picture-and-name">
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <h4>-- {user.status}</h4>
      </section>

      <h4>Posts</h4>
      <Timeline />

      <NavBar props={user} />
    </div>
  );
};
