import React from 'react'
import Image from 'next/image'
import Button from './Buttom'

type navProps = {
    netflixTravel:string;
}

const Nav = ({netflixTravel}:navProps) => {
  return (
    <header>
        <nav className='flex text-white items-center justify-around w-full p-8 fixed'>
            <a href="#inicial"><Image src ="/assets/logo.png" width={200} height={250} alt= "Logo da Netflix  " /></a>
            <a href="#"><Button textContent='Entrar'/></a>
        </nav>
    </header>
  )
}

export default Nav