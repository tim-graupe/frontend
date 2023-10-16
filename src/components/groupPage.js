import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "../config";
export const GroupPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState("");
  const [group, setGroup] = useState([]);
  const id = useParams().id;
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? config.development.apiUrl
      : config.production.apiUrl;

  useEffect(() => {
    const getUser = () => {
      fetch(`${apiUrl}/`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => setLoggedUser(res.user));
    };

    const getGroupDetails = () => {
      fetch(`${apiUrl}/group/${id}/`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => setGroup(res))
        .finally(() => setIsLoading(false));
    };
    getUser();
    getGroupDetails();
  }, [id]);

  return (
    <section className="group-page-container">
      <h1>{group.name}</h1>
      <p>{group.description}</p>
      <div className="group-page-members-list">
        {group.members ? (
          group.members.map((member) => (
            <div className="individual-member-card" key={member._id}>
              <img
                src={member.profile_pic}
                alt="profile-pic"
                className="friends-box-profile-pic"
              />
              <p>
                {member.firstName} {member.lastName}
              </p>
            </div>
          ))
        ) : (
          <p>Loading members...</p>
        )}
      </div>
    </section>
  );
};
