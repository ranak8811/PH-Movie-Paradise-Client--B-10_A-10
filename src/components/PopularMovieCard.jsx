/* eslint-disable react/prop-types */

const PopularMovieCard = ({ movie }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md bg-gray-800 dark:bg-gray-700 text-white">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="w-6 h-6 text-black"
          >
            <path d="M11.596 8.697L6.697 11.596a.5.5 0 0 1-.697-.448v-6.29a.5.5 0 0 1 .697-.447l4.899 2.899a.5.5 0 0 1 0 .895z" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.genre}</p>
      </div>
    </div>
  );
};

export default PopularMovieCard;
