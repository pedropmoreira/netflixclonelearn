'use client'
import React from 'react';
import movieTypes from '@/Types/types';
import { IoClose } from "react-icons/io5";
import Stars from './Stars';
import Button from './Buttom';
import { useState } from 'react';

type ModalProps = {
  movie: movieTypes;
  onClose: () => void;
};




const Modal: React.FC<ModalProps> = ({ movie, onClose }) => {
  const [ytbLink, setYtbLink] = useState<string | undefined>(undefined);

  const searchYoutube = () => {
    // Crie o link de busca do YouTube usando template literals
    const link = `https://www.youtube.com/results?search_query=Trailer ${encodeURIComponent (movie.title)}`;
    setYtbLink(link);
  };
  return (
    
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
            
            <div className='bg-gray-950  flex w-[80vw] h-[85vh] relative sm:max-w-[45vw]  flex-col'>
              <button
                className='absolute top-4 right-4 text-red-600 border-red-600 border-2'
                onClick={onClose}
              >
                <IoClose size={24} />
              </button>
                {/*Div com bg de imagem que ocupa 50% do espaço total com apenas a imagem do filme */}
                <div className="w-[80vw] h-1/2 bg-cover bg-center rounded-l-lg sm:w-[45vw]   " style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}}>
                    <div className='w-full h-full  bg-gradient-to-b from-transparent via-transparent to-gray-950 '>
                    </div>
                </div>
                {/*Div com as informações com os outros 50% do espaço total  */}
                <div className='text-white m-3  w-[80vw] h-1/2 sm:w-[45vw] flex justify-between flex-col items-center'>
                    <Stars rating ={movie.vote_average}/>
                    <h1 className='text-3xl w-[90%]'>{movie.title.length >25 ? `${movie.title.substring(0,25)}...` : movie.title}</h1>
                    <p className='w-[90%]'>{movie.overview.length >100 ? `${movie.overview.substring(0,100)}...` : movie.overview}</p>
                    <div className='w-[12rem] h-[2.5rem] text-white'>  
                      <a href ={ytbLink}><button className='bg-red-600 py-2 px-6 rounded-[0.1rem] flex items-center justify-center w-full h-full' onClick={searchYoutube}>Trailer: Youtube</button></a>
                    </div>
                </div>

            </div>

        </div>
    
  );
};

export default Modal;
