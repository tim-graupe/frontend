import React from "react";
import { Link } from "react-router-dom";

export const NoPage = () => {
  return (
    <p>
      404 not found. Please check your URL and try again{" "}
      <Link to={"/frontend"}>Take me home</Link>
    </p>
  );
};
