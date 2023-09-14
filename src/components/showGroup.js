import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const GroupPage = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState("");
  const [group, setGroup] = useState([]);
  const id = useParams().id;

  useEffect(() => {
    const getUser = () => {
      fetch(`http://localhost:4000/`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => setLoggedUser(res.user));
    };

    const getGroupDetails = () => {
      fetch(`http://localhost:4000/group/${id}/`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => setGroup(res));
      setIsLoading(false);
    };
    getUser();
    getGroupDetails();
  }, [id]);

  return (
    <section className="group-page-container">
      <h1>{group.name}</h1>
      <p>{group.description}</p>
    </section>
  );
};
