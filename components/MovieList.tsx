'use client'

import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import movieTypes from '@/Types/types';
import MovieCard from './MovieCard';
import Modal from './Modal';

const MovieList = () => {

   
    const[movies,setMovies] = useState<movieTypes[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<movieTypes | null>(null);

    useEffect(()=>{
        getMovies();
    },[]);
  
    const getMovies = ()=> {
        axios({
            method:'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key:process.env.NEXT_PUBLIC_MOVIE_API_KEY,
                language: 'pt-BR'
            }
        }).then(response =>{
            setMovies(response.data.results)
            console.log(response.data.results)
        })
    }

    const handleMovieClick = (movie: movieTypes) => {
        setSelectedMovie(movie); 
      };

      const closeModal = () => {
    setSelectedMovie(null); 
  };

    return (
    
        
        <div className = "flex flex-col font-medium  items-center gap-[2rem]">    
            <p className ="text-white ml-[1rem] text-xl ">Em alta</p>
            <ul className='flex cursor-grab overflow-hidden w-[70vw]'>
                {movies.map((movie =>
                    <div key = {movie.id} onClick={() => handleMovieClick(movie)}>
                    <MovieCard
                    id ={movie.id}
                    title = {movie.title}
                    vote_average={movie.vote_average}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                    />
                    </div>
                ))}
            </ul>
            {selectedMovie && 
            <Modal movie={selectedMovie} onClose={closeModal} />}
    </div>
 
    
  )
}

export default MovieList