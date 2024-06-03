import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const ListContainer = () => {
  const movies = useSelector((store) => store.movies)
  
  
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 b">
        <MovieList title={"Now playing"} movies={movies.nowplayingmovies } />
        <MovieList title={"Popular"} movies ={movies.popularmovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingmovies} />
        <MovieList title={"Top Rated"} movies={movies.topratedmovies} />
      </div>
    </div>
  );
}

export default ListContainer;
