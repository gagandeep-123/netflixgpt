import React, { useEffect } from 'react'
import Header from './Header'
import ListContainer from './ListContainer'
import VideoContainer from './VideoContainer'

import useNowplayingmovies from '../hooks/useNowplayingmovies'

const Browse = () => {

  useNowplayingmovies()

  return (
    <div>
       <Header />
    
      <VideoContainer />

     <ListContainer />
      
     
    </div>
  )
}

export default Browse