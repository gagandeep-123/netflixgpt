import React from 'react'
import { PosterCDN } from '../Utils/constants'

const MovieCards = ({path}) => {
  
  return (
    <div>
      <img src = {PosterCDN + path} />
    </div>
  )
}

export default MovieCards