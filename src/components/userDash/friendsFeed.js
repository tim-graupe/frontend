//make an api call to get recent friend's posts & activity
//use this to add to the user's homepage/ dashboard that they see upon login
import React, { useState, useEffect } from "react";

// useEffect(() => {
//     const getFriendsPosts = () => {
//       if (props) {
//         fetch(`http://localhost:4000/getFriendsPosts/${props}`, {
//           credentials: "include",
//         })
//           .then((res) => res.json())
//           .then((res) => {
//             setFriendsPosts(res);
//             setIsLoading(false);
//           });
//       }
//     };
//     getFriendsPosts();
//     setIsLoading(false);
//   }, [props]);
