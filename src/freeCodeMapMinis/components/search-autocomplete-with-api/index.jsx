import { useState, useEffect } from "react";

import Suggesstions from "./suggesstions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [error, setError] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterdUsers, setFilterdUsers] = useState([]);

  function handleOnChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterdUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(e) {
    console.log(e.target.innerText);
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilterdUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      /*  const response = await fetch(
          `https://dummyjson.com/docs/users/search/?q=${searchParam}`
        ); */
      const response = await fetch(`https://dummyjson.com/users`);

      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filterdUsers);

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <input
          onChange={handleOnChange}
          value={searchParam}
          type="text"
          name="search-users"
          placeholder="Search for users..."
        />
      )}
      {showDropdown && (
        <Suggesstions handleClick={handleClick} data={filterdUsers} />
      )}
    </div>
  );
}
