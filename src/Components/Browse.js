import React, { useEffect } from 'react'
import Header from './Header'
import ListContainer from './ListContainer'
import VideoContainer from './VideoContainer'

import useNowplayingmovies from '../hooks/useNowplayingmovies'
import usePopularmovies from '../hooks/usePopularmovies'
import { useTopratedmovies } from '../hooks/useTopratedmovies.js'
import useUpcomingmovies from '../hooks/useUpcomingmovies.js'

const Browse = () => {

  useNowplayingmovies()
  usePopularmovies()
  useTopratedmovies()
  useUpcomingmovies()

  return (
    <div>
       <Header />
    
      <VideoContainer />

     <ListContainer />
      
     
    </div>
  )
}

export default Browse