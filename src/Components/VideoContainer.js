import React from 'react'
import MovieTitle from './MovieTitle'
import MovieBackground from './MovieBackground'
import { useSelector } from 'react-redux'


const VideoContainer = () => {
    const movies = useSelector(store => store.movies?.nowplayingmovies)
    
    if(movies == null) return
    const mainmovie = movies[0]

  
  const { original_title, overview, id } = mainmovie

    
  return (
      <div>
          <MovieTitle title={original_title} overview={overview} id={id} />
          <MovieBackground movieid ={id} />

          
    </div>
  )
}

export default VideoContainer