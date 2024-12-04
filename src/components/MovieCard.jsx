/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
  const { _id, posterURL, title, genre, duration, releaseYear, rating } = movie;
  return (
    <div className="card bg-gray-800 text-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Movie Poster */}
      <img src={posterURL} alt={title} className="w-full h-60 object-cover" />

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-red-500">{title}</h3>

        {/* Genre */}
        <p className="text-sm text-gray-300 mt-1">
          <span className="font-bold text-green-400">Genre:</span> {genre}
        </p>

        {/* Duration */}
        <p className="text-sm text-gray-300 mt-1">
          <span className="font-bold text-green-400">Duration:</span> {duration}{" "}
          mins
        </p>

        {/* Release Year */}
        <p className="text-sm text-gray-300 mt-1">
          <span className="font-bold text-green-400">Release Year:</span>{" "}
          {releaseYear}
        </p>

        {/* Rating */}
        <p className="text-sm text-gray-300 mt-1">
          <span className="font-bold text-green-400">Rating:</span> {rating}/10
        </p>

        {/* See Details Button */}
        <button
          onClick={() => (window.location.href = `/movies/${_id}`)}
          className="mt-4 btn bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white font-semibold px-4 py-2 rounded-md"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
