import React from 'react'
import movieTypes from '@/Types/types'
import Stars from './Stars'



const MovieCard = (props:movieTypes) => {
  
  return (
    <div className='w-auto text-white'>    
                <div className='w-[11rem] h-[17rem] p-[1rem] transform transition-transform duration-100 hover:scale-105 hover:opacity-70'>
                    <img className = 'w-full h-full object-cover rounded-xl' src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={`Capa do filme ${props.title}`}></img>       
                </div>
    </div>
  )
}

export default MovieCard