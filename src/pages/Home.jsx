import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import MovieCard from "../components/movieCard";

const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/highRatedMovies")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedMovies(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

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
    </div>
  );
};

export default Home;
