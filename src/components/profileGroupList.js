import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const GroupList = ({ props }) => {
  const [groups, setGroups] = useState([]);
  const apiUrl = process.env.API_URL || "http://localhost:4000";

  useEffect(() => {
    const getFriendsPosts = () => {
      if (props) {
        fetch(
          `https://backend-production-f695.up.railway.app/user/${props._id}/groups/`,
          {
            credentials: "include",
          }
        )
          .then((res) => res.json())
          .then((res) => {
            setGroups(res);
          });
      }
    };
    getFriendsPosts();
  }, [props]);

  return (
    <div>
      <h1> {props.firstName}'s Groups</h1>

      {groups.map((group) => (
        <Link to={`/group/${group._id}`} key={group._id}>
          {group.name}
        </Link>
      ))}
    </div>
  );
};
