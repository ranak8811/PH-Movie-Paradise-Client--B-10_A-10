import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Heading from "../components/Heading";
import Swal from "sweetalert2";

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

  const handleFavoriteMovieDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/favoriteMovies/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your favorite movie has been deleted.",
                icon: "success",
              });
            }

            const remainingFavMovies = favoriteMovies.filter(
              (movie) => movie._id !== id
            );
            setFavoriteMovies(remainingFavMovies);
          });
      }
    });
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black p-4">
      <header>
        <Heading
          title={"Favorite Movies"}
          subtitle={"All favourite movies will show here"}
        ></Heading>
      </header>

      {favoriteMovies.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteMovies.map((movie) => (
            <div
              key={movie._id}
              className="card bg-gray-800 text-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={movie.posterURL}
                alt={movie.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold text-red-500">
                  {movie.title}
                </h3>

                <p className="text-sm text-gray-300 mt-1">
                  <span className="font-bold text-green-400">Genre:</span>{" "}
                  {movie.genre}
                </p>

                <p className="text-sm text-gray-300 mt-1">
                  <span className="font-bold text-green-400">Duration:</span>{" "}
                  {movie.duration} mins
                </p>

                <p className="text-sm text-gray-300 mt-1">
                  <span className="font-bold text-green-400">
                    Release Year:
                  </span>{" "}
                  {movie.releaseYear}
                </p>

                <p className="text-sm text-gray-300 mt-1">
                  <span className="font-bold text-green-400">Rating:</span>{" "}
                  {movie.rating}/5
                </p>

                <button
                  onClick={() => handleFavoriteMovieDelete(movie._id)}
                  className="mt-4 btn bg-red-500 text-white font-semibold px-4 py-2 rounded-md"
                >
                  Delete Favorite
                </button>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div className="text-center text-xl font-semibold text-white  mt-8 mb-[400px]">
          {`Sorry, no movies found in the  favorite list. Add some movies to your favorites`}
        </div>
      )}
    </div>
  );
};
export default FavouriteMovies;
