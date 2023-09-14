import React, { useEffect, useState } from "react";
import { Link, useFetcher, useParams } from "react-router-dom";
import "../styles/navBar.css";
export const SearchUser = () => {
  const [searchName, setSearchName] = useState(null);
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
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Search for a user"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="search-results">
        {results.user && (
          <Link
            to={`/user/${results.user._id}`}
            className="search-result-user-card"
            key={results.user._id}
          >
            <div className="user-card">
              <img src={results.user.profile_pic} alt="profile pic" />
              <p>
                {results.user.firstName} {results.user.lastName}
              </p>
            </div>
          </Link>
        )}
        {results.group && (
          <Link
            to={`/group/${results.group._id}`}
            className="search-result-user-card"
            key={results.group._id}
          >
            <div className="user-card">
              <p>{results.group.name}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
