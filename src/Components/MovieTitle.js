import React from 'react'

const MovieTitle = ({title, overview}) => {
    return (
      <div className='pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video '>
      <h1 className='text-5xl font-bold'>
          {title}
            </h1>
            <p className='py-6 text-lg w-1/4'>
            {overview}
            </p>
            <div>

           
            <button className='bg-white text-black p-4 px-12 font-bold text-xl rounded-lg hover:bg-opacity-80'>
      ▷
      Play
            </button>
                <button className= 'bg-gray-500 text-white p-4 font-bold px-12 text-xl bg-opacity-50 rounded-lg mx-2 hover:bg-opacity-80'>  
                More Info
                </button>
                 </div>
        </div>
  )
}

export default MovieTitle