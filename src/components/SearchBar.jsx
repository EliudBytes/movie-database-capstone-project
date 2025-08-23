import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="p-2 rounded-l-lg w-2/3 md:w-1/3 bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
      />
      <button
        type="submit"
        className="p-2 bg-red-600 rounded-r-lg hover:bg-red-700 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;






