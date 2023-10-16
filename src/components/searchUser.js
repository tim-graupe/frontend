import React, { useEffect, useState } from "react";
import { Link, useFetcher, useParams } from "react-router-dom";
import config from "../config";
import "../styles/navBar.css";
export const SearchUser = () => {
  const [searchName, setSearchName] = useState("");
  const [results, setResults] = useState([]);
  const id = useParams().id;
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? config.development.apiUrl
      : config.production.apiUrl;

  useEffect(() => {
    handleSearch();
  }, [searchName]);

  useEffect(() => {
    setResults("");
  }, [id]);

  const handleSearch = async () => {
    //replace with http://localhost:4000/
    fetch(`${apiUrl}/search?name=${searchName}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setResults(response));
  };
  useEffect(() => {
    const searchResultsDiv = document.querySelector(".search-results");
    if (searchResultsDiv) {
      searchResultsDiv.style.display = searchName === "" ? "none" : "";
    }
  }, [searchName]);

  return (
    <div id="search-container">
      <input
        id="name-search"
        type="text"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        placeholder="Search for a user or group"
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
