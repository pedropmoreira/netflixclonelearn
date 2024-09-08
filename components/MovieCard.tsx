import React from 'react'
import movieTypes from '@/Types/types'
import Stars from './Stars'


const MovieCard = (props:movieTypes) => {
  return (
    <div className='w-[8rem] text-white'>
            <li className='w-full flex flex-col items-center justify-center h-auto m-[1rem]' >
                <div className='w-full '>
                    <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}></img>
                </div>
                <div>
                    <p >
                        {props.title}
                    </p>
                    <Stars rating = {props.vote_average}/>

                </div>
            </li>
    </div>
  )
}

export default MovieCard