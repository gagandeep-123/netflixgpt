import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const ListContainer = () => {
  const allmovies = useSelector(store => store.movies?.nowplayingmovies)

  const [moviepath, setmoviepath] = useState("");
  
  useEffect(() => {
    if (allmovies && allmovies[0])
      setmoviepath(allmovies[0].poster_path)
  }, [allmovies])

  return (
    <div>
      
      <MovieList title ={"Now playing"} path = {moviepath} />     
    
    
    </div>
  )
}

export default ListContainer