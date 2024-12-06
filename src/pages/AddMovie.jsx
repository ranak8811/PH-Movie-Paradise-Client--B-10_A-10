/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const AddMovie = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    posterURL: "",
    title: "",
    genre: "",
    duration: "",
    releaseYear: "",
    rating: 0,
    summary: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const handleRating = (rate) => {
    setFormData({ ...formData, rating: rate });
    if (rate > 0) {
      setErrors({ ...errors, rating: "" });
    }
  };

  const isValidURL = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { posterURL, title, genre, duration, releaseYear, rating, summary } =
      formData;
    const newErrors = {};

    if (!posterURL) {
      newErrors.posterURL = "Movie Poster URL is required.";
    } else if (!isValidURL(posterURL)) {
      newErrors.posterURL = "Please enter a valid URL.";
    }

    if (!title.trim()) {
      newErrors.title = "Movie Title is required.";
    } else if (title.trim().length < 2) {
      newErrors.title = "Title must be at least 2 characters.";
    }

    if (!genre) {
      newErrors.genre = "Genre is required.";
    }

    if (!duration) {
      newErrors.duration = "Duration is required.";
    } else if (isNaN(duration) || Number(duration) <= 60) {
      newErrors.duration = "Duration must be a number greater than 60.";
    }

    if (!releaseYear) {
      newErrors.releaseYear = "Release Year is required.";
    }

    if (rating === 0) {
      newErrors.rating = "Please select a rating.";
    }

    if (!summary.trim()) {
      newErrors.summary = "Summary is required.";
    } else if (summary.trim().length < 10) {
      newErrors.summary = "Summary must be at least 10 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    const movieData = {
      ...formData,
      userEmail: user.email,
    };

    //----------------------------------------------------------------
    fetch("https://movie-server-ruby.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Movie added to database successfully");
        }
      });
    //----------------------------------------------------------------

    setTimeout(() => {
      navigate("/allMovies");
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-black via-red-900 to-black text-white p-4">
      <div className="w-full max-w-lg p-8 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 border-b-2 border-red-500 pb-2">
          Add a New Movie
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="posterURL"
              className="block text-sm font-medium mb-1"
            >
              Movie Poster URL
            </label>
            <input
              type="text"
              id="posterURL"
              name="posterURL"
              value={formData.posterURL}
              onChange={handleChange}
              className={`input input-bordered w-full bg-gray-800 text-white ${
                errors.posterURL ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Enter the image URL"
            />
            {errors.posterURL && (
              <p className="text-red-500 text-sm mt-1">{errors.posterURL}</p>
            )}
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Movie Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`input input-bordered w-full bg-gray-800 text-white ${
                errors.title ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Enter the movie title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label htmlFor="genre" className="block text-sm font-medium mb-1">
              Genre
            </label>
            <select
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className={`select select-bordered w-full bg-gray-800 text-white ${
                errors.genre ? "border-red-500" : "border-gray-600"
              }`}
            >
              <option value="">Select Genre</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="thriller">Thriller</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
              <option value="horror">Horror</option>
            </select>
            {errors.genre && (
              <p className="text-red-500 text-sm mt-1">{errors.genre}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium mb-1"
            >
              Duration (in minutes)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className={`input input-bordered w-full bg-gray-800 text-white ${
                errors.duration ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Enter the duration"
            />
            {errors.duration && (
              <p className="text-red-500 text-sm mt-1">{errors.duration}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="releaseYear"
              className="block text-sm font-medium mb-1"
            >
              Release Year
            </label>
            <select
              id="releaseYear"
              name="releaseYear"
              value={formData.releaseYear}
              onChange={handleChange}
              className={`select select-bordered w-full bg-gray-800 text-white ${
                errors.releaseYear ? "border-red-500" : "border-gray-600"
              }`}
            >
              <option value="">Select Year</option>
              {Array.from({ length: 10 }, (_, i) => 2024 - i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            {errors.releaseYear && (
              <p className="text-red-500 text-sm mt-1">{errors.releaseYear}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Rating</label>
            <Rating
              onClick={handleRating}
              ratingValue={formData.rating}
              size={30}
              label
              transition
              fillColor="red"
              emptyColor="gray"
            />
            {errors.rating && (
              <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
            )}
          </div>

          <div>
            <label htmlFor="summary" className="block text-sm font-medium mb-1">
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              className={`textarea textarea-bordered w-full bg-gray-800 text-white ${
                errors.summary ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Enter a short summary of the movie"
              rows="4"
            ></textarea>
            {errors.summary && (
              <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn bg-gradient-to-r from-red-600 to-red-800 w-full mt-4 text-white font-bold"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
