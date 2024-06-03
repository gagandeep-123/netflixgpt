import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addPopularmovies } from "../Utils/movieslice";

const usePopularmovies = () => {
  const dispatch = useDispatch();
  const popularmovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    const json = await data.json();
   
    dispatch(addPopularmovies(json.results));
  };
  useEffect(() => {
    popularmovies();
  }, [popularmovies]);
};
export default usePopularmovies;
