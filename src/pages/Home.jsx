import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import MovieCard from "../components/movieCard";

const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  // Fetch the high-rated movies
  useEffect(() => {
    fetch("http://localhost:4000/highRatedMovies")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedMovies(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      <header>
        <Banner></Banner>
      </header>
      <section className="p-8 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-500 border-b-2 border-red-600 pb-2">
          Featured Movies
        </h2>

        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>

        {/* See All Movies Button */}
        <div className="text-center mt-8">
          <Link
            to={"/allMovies"}
            className="btn bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold px-6 py-3 rounded-lg"
          >
            See All Movies
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
