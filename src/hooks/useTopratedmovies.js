import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addtopratedmovies } from "../Utils/movieslice";

export const useTopratedmovies = () => {
  const dispatch = useDispatch();
  const topratedmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );
    const json = await data.json();

    dispatch(addtopratedmovies(json.results));
  };
  useEffect(() => {
    topratedmovies();
  }, [topratedmovies]);
};
