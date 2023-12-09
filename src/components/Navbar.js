import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
export default function Navbar() {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedSorting, setSelectedSorting] = useState("");

  // Function to handle dropdown changes
  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
    if (event.target.value === "Status") {
      console.log("hii");
    }
    if (event.target.value === "user") {
      return <Navigate to="/user" />;
    }
    if (event.target.value === "priority") {
      return <Navigate to="/Priority" />;
    }
  };

  const handleSortingChange = (event) => {
    setSelectedSorting(event.target.value);
  };
  const nbStyle = {
    display: "flex",
    padding: "10px",
    alignItems: "center",
    height: "5vh",
    color: "white",
  };
  return (
    <div style={nbStyle}>
      <div>
        <Link to="/">
          <button style={{ margin: "10px" }}>View Data</button>
        </Link>
        <Link to="/Status">
          <button style={{ margin: "10px" }}>Status</button>
        </Link>
        <Link to="/User">
          <button style={{ margin: "10px" }}>User</button>
        </Link>
        <Link to="/Priority">
          <button style={{ margin: "10px" }}>Priority</button>
        </Link>
      </div>
    </div>
  );
}
