import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/navBar.css";
export const SearchUser = () => {
  const [searchName, setSearchName] = useState("");
  const [results, setResults] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    handleSearch();
  }, [searchName]);

  useEffect(() => {
    setResults("");
  }, [id]);

  const handleSearch = async () => {
    fetch(`http://localhost:4000/search?name=${searchName}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setResults(response));
  };

  return (
    <div id="search-container">
      <input
        id="name-search"
        type="text"
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Search for a user"
      />
      <button onClick={handleSearch}>Click</button>
      {results.length >= 1 ? (
        results.map((user) => {
          return (
            <Link
              to={`/user/${user._id}`}
              className="search-result-user-card"
              key={user._id}
            >
              <p>
                <img src={user.profile_pic} alt="profile pic" />{" "}
                {user.firstName} {user.lastName}
              </p>
            </Link>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
};
