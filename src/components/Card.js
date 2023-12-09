import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ user, msg }) => {
  const containerStyle = {
    borderRadius: "15px",
    border: "2px solid #737272",
    padding: "20px",
    margin: "20px",
    textAlign: "left",
  };
  const miniContainer = {
    borderRadius: "15px",
    border: "2px solid #737272",
    display: "inline-block",
    marginRight: "5px",
    textAlign: "center",
    paddingRight: "10px",
  };
  return (
    <div style={containerStyle}>
      <span>{user}</span>
      <h2>{msg}</h2>
      <span style={miniContainer} role="img" aria-label="Sneezing emoji">
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7916057/three-dots-icon-md.png"
          alt="..."
          style={{ height: "20px" }}
        />
      </span>

      <span style={miniContainer}>
        <ul>
          <li>Feature Request</li>
        </ul>
      </span>
    </div>
  );
};

export default Card;
