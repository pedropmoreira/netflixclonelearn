'use client'

import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import movieTypes from '@/Types/types';
import MovieCard from './MovieCard';


const MovieList = () => {

   
    const[movies,setMovies] = useState<movieTypes[]>([]);

    useEffect(()=>{
        getMovies();
    },[]);
    const getMovies = ()=> {
        axios({
            method:'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key:'c5b187c385824000703be0799c3b3146',
                language: 'pt-BR'
            }
        }).then(response =>{
            setMovies(response.data.results)
            console.log(response.data.results)
        })
    }
    return (
    <ul className='flex '>
        {movies.map((movie =>
            <MovieCard
            key = {movie.id}
            id ={movie.id}
            title = {movie.title}
            vote_average={movie.vote_average}
            overview={movie.overview}
            poster_path={movie.poster_path}/>
        ))}
    </ul>
  )
}

export default MovieList