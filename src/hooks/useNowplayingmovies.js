import { useEffect } from "react";
import { options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addnowplayingmovies } from "../Utils/movieslice";

const useNowplayingmovies = () => {
  const dispatch = useDispatch();
  const nowPLayingmovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const json = await data.json();
    console.log("now playig", json);
    dispatch(addnowplayingmovies(json.results));
  };
  useEffect(() => {
    nowPLayingmovies();
  }, [nowPLayingmovies]);
};
export default useNowplayingmovies;
