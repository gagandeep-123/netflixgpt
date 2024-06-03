import React from "react";

import MovieCards from "./MovieCards";


const MovieList = ({ title, movies }) => {

  return (
    <div className= "px-6">
      <h1 className="text-4xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-none">
        <div className="flex">
          {movies?.map((movies) => (
            <MovieCards path={movies.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
