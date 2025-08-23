import React from "react";

function MovieDetail({ movie, onBack }) {
  return (
    <div className="max-w-4xl mx-auto mt-6 bg-gray-900 rounded-lg overflow-hidden shadow-lg p-4">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      >
        ← Back to Search
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Movie Poster */}
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded"
        />

        {/* Movie Info */}
        <div className="text-white flex-1">
          <h2 className="text-3xl font-bold mb-2">{movie.Title} ({movie.Year})</h2>
          <p className="mb-2"><span className="font-semibold">Genre:</span> {movie.Genre}</p>
          <p className="mb-2"><span className="font-semibold">Actors:</span> {movie.Actors}</p>
          <p className="mb-2"><span className="font-semibold">Director:</span> {movie.Director}</p>
          <p className="mb-4"><span className="font-semibold">Plot:</span> {movie.Plot}</p>

          {/* Ratings */}
          {movie.Ratings && movie.Ratings.length > 0 && (
            <div>
              <h3 className="font-semibold mb-1">Ratings:</h3>
              <ul className="list-disc list-inside">
                {movie.Ratings.map((rating, index) => (
                  <li key={index}>
                    {rating.Source}: {rating.Value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;


