import React from "react";
import { Link } from "react-router-dom";

export const Comment = ({ comment }) => {
  return (
    <Link
      to={`/user/${comment.user._id}`}
      className="timeline-reply"
      key={comment._id}
    >
      <img src={comment.pic} alt="profile pic" className="profile-pic-reply" />{" "}
      {comment.user.firstName} {comment.user.lastName}
      <br></br>
      <sub>{comment.comment}</sub>
    </Link>
  );
};
