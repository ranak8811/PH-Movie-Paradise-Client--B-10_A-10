import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllMovies from "../pages/AllMovies";
import PrivateRouter from "./PrivateRouter";
import AddMovie from "../pages/AddMovie";
import FavouriteMovies from "../pages/FavouriteMovies";
import MovieDetails from "../pages/MovieDetails";
import UpdateMovie from "../pages/UpdateMovie";
import TrendingMovies from "../pages/TrendingMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/addMovie",
        element: (
          <PrivateRouter>
            <AddMovie></AddMovie>
          </PrivateRouter>
        ),
      },
      {
        path: "/favouriteMovies",
        element: (
          <PrivateRouter>
            <FavouriteMovies></FavouriteMovies>
          </PrivateRouter>
        ),
      },
      {
        path: "/movieDetails/:id",
        element: (
          <PrivateRouter>
            <MovieDetails></MovieDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/allMovies/${params.id}`),
      },
      {
        path: "/updateMovie/:id",
        element: (
          <PrivateRouter>
            <UpdateMovie></UpdateMovie>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/allMovies/${params.id}`),
      },
      {
        path: "/trendingMovies",
        element: <TrendingMovies></TrendingMovies>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
