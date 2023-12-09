import React, { useState } from "react";

export default function Navbar() {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedSorting, setSelectedSorting] = useState("");

  // Function to handle dropdown changes
  const handleGroupChange = (event) => {
    setSelectedGroup(event.target.value);
  };
  const handleSortingChange = (event) => {
    setSelectedSorting(event.target.value);
  };
  return (
    <div>
      <select value={selectedGroup} onChange={handleGroupChange}>
        <option value="">Grouping</option>
        <option value="Status"> Status</option>
        <option value="user">user</option>
        <option value="priority">priority</option>
      </select>
      <select value={selectedSorting} onChange={handleSortingChange}>
        <option value="">Sorting</option>
        <option value="Priority"> Priority</option>
        <option value="Title">Title</option>
        {/* <option value="priority">priority</option> */}
      </select>
    </div>
  );
}
