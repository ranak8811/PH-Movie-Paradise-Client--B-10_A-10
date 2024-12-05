import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import MovieCard from "../components/movieCard";

const AllMovies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/allMovies?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAllMovies(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [search]);
  console.log(allMovies);
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black p-4">
      <header>
        <Heading
          title={"All Movies"}
          subtitle={"This is our collection for all movies"}
        ></Heading>
      </header>
      <div className="max-w-[600px] mx-auto mb-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="Search movies using title..."
          className="input input-bordered w-full"
          required
        />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </section>
    </div>
  );
};

export default AllMovies;
