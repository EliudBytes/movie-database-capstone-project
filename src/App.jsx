import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Search for multiple movies
  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setSelectedMovie(null);
    setSearchResults([]);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=29652ce9`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setSearchResults(data.Search);
      } else {
        setError("No movies found. Try a different title.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch details when a movie card is clicked
  const handleMovieClick = async (imdbID) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=29652ce9`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setSelectedMovie(data);
        setSearchResults([]); // hide search list
      } else {
        setError("Details not found.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Back button handler
  const handleBack = () => {
    setSelectedMovie(null);
    setError("");
  };

  return (
    <div className="bg-black min-h-screen text-white p-4">
      <h1 className="text-4xl font-bold text-center pt-4">Movie Database</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-center mt-6">Loading...</p>}
      {error && <p className="text-center mt-6 text-red-500">{error}</p>}

      {/* Movie List */}
      {!selectedMovie && searchResults.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {searchResults.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onSelect={handleMovieClick}
            />
          ))}
        </div>
      )}

      {/* Movie Details */}
      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;










