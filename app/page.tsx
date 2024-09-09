'use client'
import Button from '@/components/Buttom'
import Input from '@/components/Input'
import Modal from '@/components/Modal'
import MovieList from '@/components/MovieList'
import React from 'react'
import { useState } from 'react'

const Home = () => {
  

  return (
    <div className='text-white  h-auto'>
      {/*Section bg */}
      <section id="inicial" className='bg-my-image w-screen h-auto m-0 p-0 flex items-center justify-center bg-no-repeat bg-cover'>
          <div className='bg-gradient-to-b from-black via-transparent to-black  w-full h-screen  pt-[7rem] flex items-center justify-center '>
              {/*Section conteudo */}
              <div className='w-full h-full flex items-center justify-center text-center pb-[8rem] '>
                  <ul className='flex flex-col  h-[70%] w-auto justify-center items-center m-[1rem]'>
                    <li className='lg:text-5xl font-bold mb-[1rem] w-[68%] md:text-2xl  sm:text-xl text-xl'><h1 >Filmes, séries e muito mais, sem limites</h1></li>
                    <li className='text-xl mb-[1.5rem]'><p>A partir de R$ 20,90. Cancele quando quiser.</p></li>
                    <li className='text-xl mb-[1.5rem]'><p>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p></li>
                    <div className='flex justify-between h-[6rem] w-auto flex-col md:flex-row md:h-[3rem] mx-5 '>
                      <Input textContent= "Email" sizeInput="20rem"/>
                      <Button textContent='Vamos lá >' />
                    </div>

                  </ul>
              </div>
          </div>
          
      </section>
      {/*Section hero movies */}
      <section className='w-auto h-auto bg-black flex-col'>
      {/*Separador sections */}
        <div className=' top-0 left-0 right-0 overflow-hidden leading-none '>
              <img src='/assets/separador.svg' alt= "separador de sections curvado" className='relative block w-full h-[6.5rem] filter-brilho'></img>
        </div>
        <MovieList/>
     
      </section>
    </div>
  )
}

export default Home