import React from 'react'
import MovieBackground from './MovieBackground'
import MovieCards from './MovieCards'

const MovieList = ({ title, path }) => {
  

  return (
    <div>
      <div>
        {title}
    
      </div>
      <div>
       <MovieCards path = {path} />
      </div>
    </div>
  )
}

export default MovieList