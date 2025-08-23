import React from "react";

function MovieCard({ movie, onSelect }) {
  return (
    <div
      className="bg-gray-900 rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transform transition duration-200"
      onClick={() => onSelect(movie.imdbID)}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
        alt={movie.Title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{movie.Title}</h2>
        <p className="text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;

