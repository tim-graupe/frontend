import React from "react";
import GoogleButton from "react-google-button";
export const Login = () => {
  const handleSignInGoogle = () => {
    window.open(
      "https://backend-production-f695.up.railway.app/auth/google/",
      "_self"
    );
  };

  return (
    <div className="App">
      <GoogleButton onClick={handleSignInGoogle} />
    </div>
  );
};
