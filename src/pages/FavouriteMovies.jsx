import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Heading from "../components/Heading";
import MovieCard from "../components/movieCard";

const FavouriteMovies = () => {
  const { user } = useContext(AuthContext);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  useEffect(() => {
    if (!user || !user.email) return;

    fetch(`http://localhost:4000/favoriteMovies?email=${user.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFavoriteMovies(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [user]);

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black p-4">
      <header>
        <Heading
          title={"Favorite Movies"}
          subtitle={"All favourite movies will show here"}
        ></Heading>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </section>
    </div>
  );
};
export default FavouriteMovies;
