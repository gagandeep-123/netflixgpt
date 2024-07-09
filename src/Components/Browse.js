import React, { useEffect, useSyncExternalStore } from 'react'
import Header from './Header'
import ListContainer from './ListContainer'
import VideoContainer from './VideoContainer'

import useNowplayingmovies from '../hooks/useNowplayingmovies'
import usePopularmovies from '../hooks/usePopularmovies'
import { useTopratedmovies } from '../hooks/useTopratedmovies.js'
import useUpcomingmovies from '../hooks/useUpcomingmovies.js'
import GptSearch from './GptSearch.js'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.ShowGptSearch);

  useNowplayingmovies()
  usePopularmovies()
  useTopratedmovies()
  useUpcomingmovies()
 

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
          <>
          <VideoContainer />
          <ListContainer />
        </>
      )}
    </div>
  );
}

export default Browse