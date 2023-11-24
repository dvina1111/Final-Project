import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <div
              className={`movieCard ${isLargeRow ? "largeCard" : "smallCard"}`}
            >
              <img
                className={`row_poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
                title={movie.name || movie.original_title}
              />
              <div className="movieCard__movieName">
                <p className="movieTitle">
                  {movie.name || movie.original_title || movie.title}
                </p>
                <p>{`Rating: ${movie.vote_average} / 10`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;