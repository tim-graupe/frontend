import React, { useEffect, useState } from "react";

export const SearchUser = () => {
  const [searchName, setSearchName] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    handleSearch();
  }, [searchName]);

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
      />
      <button onClick={handleSearch}>Click</button>
      {results.length >= 1 ? (
        results.map((user) => {
          return (
            <div className="search-result-user-card">
              <p>
                <img src={user.profile_pic} alt="profile pic" />{" "}
                {user.firstName} {user.lastName}
              </p>
            </div>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
};
