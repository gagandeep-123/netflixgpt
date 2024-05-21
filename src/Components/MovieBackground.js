import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import useMovieTrailer from '../hooks/useMovieTrailer'


const MovieBackground = ({ movieid }) => {
    
  const trailerVideo = useSelector(store => store.movies?.movieTrailer)
  useMovieTrailer(movieid)
  
    return (
    
      <div className='w-screen'>
        <iframe className='w-screen aspect-video'
          src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>
  
    )
}

export default MovieBackground