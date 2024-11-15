import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        className="border border-gray-300 rounded-l-lg p-3 w-2/3 sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Entrez un ingrédient ou une recette..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 rounded-r-lg hover:from-yellow-500 hover:to-yellow-600 transition duration-200"
        onClick={handleSearch}
      >
        Rechercher
      </button>
    </div>
  );
};

export default SearchBar;
