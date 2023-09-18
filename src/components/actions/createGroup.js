import React, { useState } from "react";

export const CreateGroup = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  function handleClick(req, res) {
    fetch(`https://backend-production-f695.up.railway.app/newGroup/`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
        isPrivate: isPrivate,
        // admin: props,
        // members: props,
      }),
    });
    // .then((response) => console.log(loggedUser.firstName))
    //   .then(setContent(""));
  }
  const handleCheckboxChange = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <div className="new-group-container">
      <textarea
        type="text"
        name="name"
        maxLength="100"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter group name"
      />
      <textarea
        type="text"
        name="description"
        maxLength="2000"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter group description"
      />
      <input
        type="checkbox"
        name="isPrivate"
        checked={isPrivate}
        onChange={handleCheckboxChange}
      />{" "}
      Private?
      <br></br>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Submit
      </button>
    </div>
  );
};
