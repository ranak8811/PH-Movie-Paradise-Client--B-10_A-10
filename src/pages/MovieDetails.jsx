import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
const MovieDetails = () => {
  const {
    _id,
    posterURL,
    title,
    genre,
    duration,
    releaseYear,
    rating,
    summary,
  } = useLoaderData();

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black p-4">
      <div className="w-full mb-8">
        <img
          src={posterURL}
          alt={title}
          className="rounded-lg w-[800px] mx-auto h-auto border-4 border-green-500 shadow-lg"
        />
      </div>

      <Heading
        title={title}
        subtitle={`Release Year: ${releaseYear} | Rating: ${rating} / 5`}
      />

      <div className="mt-6 text-center">
        <p className="text-green-400 text-lg mb-4">
          <span className="font-semibold text-red-500">Genre:</span> {genre}
        </p>
        <p className="text-green-400 text-lg mb-4">
          <span className="font-semibold text-red-500">Duration:</span>{" "}
          {duration} mins
        </p>
        <p className="mt-4 text-gray-300 text-lg">
          <span className="font-semibold text-red-500">Summary:</span> {summary}
        </p>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={_id}
          className="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Delete Movie
        </button>
        <button className="bg-green-600 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg transition">
          Add to Favorite
        </button>
        <button className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-lg transition">
          Update Movie
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
