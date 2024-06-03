import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingmovies } from "../Utils/movieslice";

const useUpcomingmovies = () => {
  const dispatch = useDispatch();
  const upcomingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    );
    const json = await data.json();

    dispatch(addUpcomingmovies(json.results));
  };
  useEffect(() => {
    upcomingmovies();
  }, [upcomingmovies]);
};
export default useUpcomingmovies;
