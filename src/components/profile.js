import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SearchUser } from "./searchUser";
import { Bio } from "./userDash/bio";
import { EditDetails } from "./userDash/editDetails";
import { NewPost } from "./newPost";
import { Timeline } from "./userDash/timeline";
import { FriendReqs } from "./userDash/friendReqs";
import { Link } from "react-router-dom";

export const Profile = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
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
  }, []);

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

  const likePost = (postId) => {
    fetch(`http://localhost:4000/likePost/${postId}`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: postId,
        // date: new Date(),
      }),
    });
    // .then((response) => console.log(loggedUser.firstName))
  };

  const commentOnPost = (postId) => {
    fetch(`http://localhost:4000/commentOnPost/${postId}`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: postId,
        comment: comment,
        // date: new Date(),
      }),
    });
    // .then((response) => console.log(loggedUser.firstName))
  };

  return (
    <div className="profile-container">
      <section className="user-picture-and-name">
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        {/* <img src={user.profile_pic} alt="profile pic" />  */}
        <NewPost />
        <button onClick={addFriend}>Add friend</button>
        <button onClick={deleteFriend}>Delete Friend</button>
        <FriendReqs />
        {/* <p> {user.status}</p> */}
      </section>
      {/* <SearchUser /> */}
      {/* <h4>Posts</h4>
      <NewPost />
    
       */}
      {/* <Bio props={user} />
      <EditDetails props={user} /> */}
      {isLoading ? (
        <p>Loading please wait...</p>
      ) : (
        <div>
          {posts.map((post) => {
            let date = new Date(post.date_posted);
            const options = {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            };
            return (
              <div
                className="timeline-individual-comment-card"
                key={post.date_posted}
              >
                <Link to={`/user/${post.id}`} className="timeline-post">
                  <img
                    src={post.poster.profile_pic}
                    alt="profile pic"
                    className="profile-pic-post"
                  />
                  <p key={post.date_posted}>{post.content}</p>
                  <sub>
                    <p>
                      {post.poster.firstName} {post.poster.lastName}{" "}
                    </p>
                    {date.toLocaleDateString("en-US", options)}
                  </sub>
                </Link>
                <button onClick={() => likePost(post._id)}>Like</button>
                <input
                  id="comment"
                  type="text"
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={() => commentOnPost(post._id)}>Comment</button>
                <br></br>
                <sub>{post.comments.length} comments</sub>
                <br></br>
                <sub>{post.likes.length} likes</sub>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
