// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// export const Status = ({ props }) => {
//   const [newStatus, setNewStatus] = useState("");
//   const [textbox, setTextbox] = useState(false);

//   const showTextBox = () => {
//     setTextbox(!textbox);
//   };
//   const sendNewStatus = () => {
//     fetch(`http://localhost:4000/user/${props}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         content: newStatus,
//         user: props,
//       }),
//     });
//     setTextbox(!textbox);
//   };

//   return (
//     <div>
//       {textbox ? (
//         <div>
//           <textarea
//             type="text"
//             placeholder="Say what's on your mind"
//             onChange={(e) => setNewStatus(e.target.value)}
//             maxLength="25"
//           />{" "}
//           <p>{25 - newStatus.length} characters remaining</p>
//           <button onClick={sendNewStatus}>Update</button>
//           <button onClick={showTextBox}>Cancel</button>
//         </div>
//       ) : (
//         <div>
//           <button onClick={showTextBox}>Change status</button>
//         </div>
//       )}
//     </div>
//   );
// };
