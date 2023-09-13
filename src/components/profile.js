import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Bio } from "./userDash/bio";
import { NewPost } from "./newPost";
import { FriendsList } from "./userDash/friendsList";
import { Timeline } from "./userDash/timeline";
import { NavBar } from "./nav";
import "../styles/profile.css";
export const Profile = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");
  const id = useParams().id;

  useEffect(() => {
    const getUser = () => {
      fetch(`http://localhost:4000/`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => setLoggedUser(res.user));
    };

    const getUserPosts = () => {
      fetch(`http://localhost:4000/user/${id}/posts`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => setPosts(res));
      setIsLoading(false);
    };
    getUser();
    getUserPosts();
  }, [id]);

  const addFriend = () => {
    fetch(`http://localhost:4000/sendFriendReq/${id}`, {
      credentials: "include",
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: loggedUser._id,
      }),
    });
  };

  const deleteFriend = () => {
    fetch(`http://localhost:4000/deleteFriend/${id}`, {
      credentials: "include",
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: loggedUser._id,
      }),
    });
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
      <NavBar props={loggedUser} />
      <section className="profile-left-col">
        <div className="user-picture-and-name">
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          {/* <NewPost /> */}
          <img
            src={user.profile_pic}
            alt="profile pic"
            className="main-profile-pic"
          />

          {loggedUser._id === id ? (
            <div></div>
          ) : (
            <div className="friend-btns">
              <button className="friend-btns" onClick={addFriend}>
                Add friend
              </button>
              <button className="friend-btns" onClick={deleteFriend}>
                Delete Friend
              </button>
            </div>
          )}
        </div>
        <FriendsList props={user.friends} />
      </section>

      {isLoading ? (
        <p>Loading please wait...</p>
      ) : (
        <section className="profile-timeline-col">
          <Bio props={user} />
          <h1>{user.firstName}'s Timeline</h1>
          <Timeline props={posts} />
        </section>
      )}
    </div>
  );
};
