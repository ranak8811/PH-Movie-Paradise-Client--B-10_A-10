import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import MovieCard from "../components/movieCard";
import Heading from "../components/Heading";
import PopularMovieCard from "../components/PopularMovieCard";

const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [genreMovies, setGenreMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/highRatedMovies")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedMovies(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      fetch(`http://localhost:4000/genre/${selectedGenre}`)
        .then((res) => res.json())
        .then((data) => setGenreMovies(data))
        .catch((error) => console.error("Error fetching genre movies:", error));
    }
  }, [selectedGenre]);

  const genres = [
    "Action",
    "Comedy",
    "Thriller",
    "Sci-Fi",
    "Drama",
    "Documentary",
    "Horror",
  ];

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <header>
        <Banner></Banner>
      </header>
      <section className="p-8 bg-gradient-to-r from-white via-gray-200 to-white dark:from-black dark:via-gray-900 dark:to-black text-black dark:text-white">
        <div className="text-right">
          <button
            onClick={handleThemeToggle}
            className="btn bg-gradient-to-r from-green-500 to-green-700 dark:from-red-600 dark:to-red-800 text-white font-bold px-4 py-2 rounded-md"
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>

        <h2 className="text-3xl font-bold text-center mb-6 text-red-500 dark:text-green-500 border-b-2 border-red-600 dark:border-green-600 pb-2">
          Featured Movies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to={"/allMovies"}
            className="btn bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 dark:from-green-500 dark:to-green-700 dark:hover:from-green-600 dark:hover:to-green-800 text-white font-bold px-6 py-3 rounded-lg"
          >
            See All Movies
          </Link>
        </div>
      </section>

      <section className="p-8 bg-gradient-to-r from-white via-gray-200 to-white dark:from-black dark:via-gray-900 dark:to-black text-black dark:text-white">
        <Heading title={"Popular Movies"}></Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMovies.map((movie) => (
            <PopularMovieCard key={movie._id} movie={movie}></PopularMovieCard>
          ))}
        </div>
      </section>

      <section className="px-8 pt-8 bg-gradient-to-r from-white via-gray-200 to-white dark:from-black dark:via-gray-900 dark:to-black text-black dark:text-white">
        <Heading title={"Browse by Genres"}></Heading>
        <div className="flex flex-wrap gap-4 justify-center">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre.toLowerCase())}
              className="btn bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 dark:from-purple-500 dark:to-purple-700 dark:hover:from-purple-600 dark:hover:to-purple-800 text-white font-bold px-4 py-2 rounded-lg transition-transform transform hover:scale-105 mb-8"
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {selectedGenre && (
        <section className="px-8 pb-8 bg-gradient-to-r from-white via-gray-200 to-white dark:from-black dark:via-gray-900 dark:to-black text-black dark:text-white">
          <div className="text-center text-4xl font-bold text-red-500 dark:text-green-400 mb-4">
            {`Movies in ${
              selectedGenre.charAt(0).toUpperCase() + selectedGenre.slice(1)
            } Genre`}
          </div>

          {genreMovies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {genreMovies.map((movie) => (
                <div
                  key={movie._id}
                  className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={movie.posterURL}
                    alt={movie.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-red-500 dark:text-green-400">
                      {movie.title}
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {movie.description}
                    </p>
                    <p className="text-sm font-semibold mt-2 text-gray-900 dark:text-gray-100">
                      ⭐ {movie.rating}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-xl font-semibold text-gray-700 dark:text-gray-300 mt-8">
              {`Sorry, no movies found in the ${selectedGenre} genre.`}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Home;
