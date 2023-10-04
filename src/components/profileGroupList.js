import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const GroupList = ({ props }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getFriendsPosts = () => {
      if (props) {
        fetch(`http://localhost:4000/user/${props._id}/groups/`, {
          credentials: "include",
        })
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
