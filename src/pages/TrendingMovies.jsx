/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Heading from "../components/Heading";

const TrendingMovies = () => {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    fetch("https://movie-server-ruby.vercel.app/highRatedMovies")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedMovies(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const movie = payload[0].payload;
      return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg">
          <h4 className="text-lg font-bold text-red-500 dark:text-green-400">
            {movie.title}
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Rating: ⭐ {movie.rating} / 5
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Genre: {movie.genre}
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomBar = (props) => {
    const { x, y, width, height, payload } = props;
    return (
      <g>
        <image
          href={payload.posterURL}
          x={x + width / 2 - 50}
          y={y - 60}
          width="100"
          height="60"
          style={{ borderRadius: "18px" }}
        />
        <text
          x={x + width / 2}
          y={y - 70}
          textAnchor="middle"
          fill="#333"
          fontSize="14"
          fontWeight="bold"
          color="red"
        >
          ⭐ {payload.rating}/5
        </text>
        <rect x={x} y={y} width={width} height={height} fill="#8884d8" />
      </g>
    );
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black p-8">
      <Heading title={"Trending Movies"}></Heading>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={featuredMovies}
          margin={{
            top: 80,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <XAxis
            dataKey="title"
            tick={{ fontSize: 12 }}
            angle={-15}
            textAnchor="end"
            interval={0}
          />
          <YAxis
            domain={[0, 5]}
            ticks={[0, 1, 2, 3, 4, 5]}
            tick={{ fontSize: 12 }}
            label={{
              value: "Rating",
              angle: -90,
              position: "insideLeft",
              fontSize: 14,
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="rating"
            fill="#8884d8"
            shape={<CustomBar />}
            isAnimationActive={true}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendingMovies;
