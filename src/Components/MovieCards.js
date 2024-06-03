import React from "react";
import { PosterCDN } from "../Utils/constants";

const MovieCards = ({ path }) => {
  return (
    <div className="w-48 pr-4">
      <img src={PosterCDN + path} />
    </div>
  );
};

export default MovieCards;
