import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchUser } from "./searchUser";
import { Bio } from "./userDash/bio";
import { EditDetails } from "./userDash/editDetails";
import { NewPost } from "./newPost";
import { Timeline } from "./userDash/timeline";

export const Profile = ({ props }) => {
  const [user, setUser] = useState("");
  const id = useParams().id;

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`http://localhost:4000/user/${id}`, {
          credentials: "include",
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchUser();
  }, [id]);

  return (
    <div className="profile-container">
      <section className="user-picture-and-name">
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <img src={user.profile_pic} alt="profile pic" />
        {/* <p> {user.status}</p> */}
      </section>
      <SearchUser />
      <h4>Posts</h4>
      <NewPost />
      <Timeline props={user.posts} />
      {/* <Bio props={user} />
      <EditDetails props={user} /> */}
    </div>
  );
};
