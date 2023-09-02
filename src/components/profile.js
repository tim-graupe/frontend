import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchUser } from "./searchUser";
import { Bio } from "./userDash/bio";
import { EditDetails } from "./userDash/editDetails";
import { NewPost } from "./newPost";
import { Timeline } from "./userDash/timeline";

export const Profile = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");

  const id = useParams().id;

  useEffect(() => {
    const getUserPosts = () => {
      fetch(`http://localhost:4000/user/${id}/posts`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => setPosts(res));
      setIsLoading(false);
    };
    getUserPosts();
  }, []);

  const addFriend = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/sendFriendReq/${id}`,
        {
          credentials: "include",
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: loggedUser._id,
          }),
        }
      );
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

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
        {/* <img src={user.profile_pic} alt="profile pic" />
        <button onClick={addFriend}>Add friend</button> */}
        {/* <p> {user.status}</p> */}
      </section>
      {/* <SearchUser /> */}
      <h4>Posts</h4>
      <NewPost />

      <Timeline props={posts} />
      {/* <Bio props={user} />
      <EditDetails props={user} /> */}
    </div>
  );
};
