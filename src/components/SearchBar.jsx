import React from "react";
import { useHistory } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const history = useHistory();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(document.getElementById("searchBar").value);
        history.push('/')
      }}
      style={{ display: "flex" }}
    >
      <input
        className="form-control mr-sm-3"
        id="searchBar"
        type="text"
        placeholder="City..."
      />
      <input
        className="btn btn-outline-success my-2 my-sm-0"
        type="submit"
        value="Search"
      />
    </form>
  );
}
