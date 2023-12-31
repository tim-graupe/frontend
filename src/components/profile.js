import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Bio } from "./userDash/bio";
import { FriendsList } from "./userDash/friendsList";
import { Timeline } from "./userDash/timeline";
import { NavBar } from "./nav";
import { NewPost } from "./newPost";
// import "../styles/profile.css";
import config from "../config";
import { GroupList } from "./profileGroupList";
export const Profile = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");
  const id = useParams().id;
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? config.development.apiUrl
      : config.production.apiUrl;
  useEffect(() => {
    // const getUser = () => {
    //   fetch(`${apiUrl}/`, {
    //     credentials: "include",
    //   })
    //     .then((res) => res.json())
    //     .then((res) => setLoggedUser(res.user));
    // };

    const getUserPosts = () => {
      fetch(`${apiUrl}/user/${id}/posts`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => setPosts(res));
      setIsLoading(false);
    };
    // getUser();
    getUserPosts();
  }, []);

  async function getUser() {
    try {
      const response = await fetch(`${apiUrl}`, {
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  const addFriend = () => {
    fetch(`${apiUrl}/sendFriendReq/${id}`, {
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
    fetch(`${apiUrl}/deleteFriend/${id}`, {
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
        const response = await fetch(`${apiUrl}/user/${id}`, {
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
    <button onClick={getUser}>Click</button>
    // <div className="profile-container">
    //   {/* <NavBar props={loggedUser} /> */}
    //   <section className="profile-left-col">
    //     <div className="user-picture-and-name">
    //       <h2>
    //         {user.firstName} {user.lastName}
    //       </h2>
    //       <img
    //         src={user.profile_pic}
    //         alt="profile pic"
    //         className="main-profile-pic"
    //       />

    //       {/* {loggedUser._id === id ? null : (
    //         <div className="friend-btns">
    //           {loggedUser.friends?.includes(id) ? (
    //             <button className="friend-btns" onClick={deleteFriend}>
    //               Delete Friend
    //             </button>
    //           ) : loggedUser.incomingFriendRequests?.includes(id) ? (
    //             <button className="friend-btns" onClick={addFriend}>
    //               Accept Friend Request
    //             </button>
    //           ) : loggedUser.outgoingFriendRequests?.includes(id) ? (
    //             <button className="friend-btns">Friend Request Pending</button>
    //           ) : (
    //             <button className="friend-btns" onClick={addFriend}>
    //               Add Friend
    //             </button>
    //           )}
    //         </div>
    //       )} */}
    //     </div>
    //     <FriendsList props={user.friends} />
    //   </section>

    //   {isLoading ? (
    //     <p>Loading please wait...</p>
    //   ) : (
    //     <section className="profile-timeline-col">
    //       {/* <Bio props={user} loggedUser={loggedUser} /> */}
    //       <h1>{user.firstName}'s Timeline</h1>
    //       <NewPost />
    //       <Timeline props={posts} />
    //     </section>
    //   )}

    //   <section className="profile-right-col">
    //     <GroupList props={user} />
    //   </section>
    // </div>
  );
};
