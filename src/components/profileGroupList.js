import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import config from "../config";
export const GroupList = ({ props }) => {
  const [groups, setGroups] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? config.development.apiUrl
      : config.production.apiUrl;
<<<<<<< HEAD

=======
>>>>>>> 6102586159c90038780cc06ada5ca61600517c33
  useEffect(() => {
    const getFriendsPosts = () => {
      if (props) {
        fetch(`${apiUrl}/user/${props._id}/groups/`, {
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
