import React from 'react'
import { IoMdStar,IoIosStarOutline } from "react-icons/io";

type starCount = {
    rating:number,
}

const Stars = ({rating}:starCount) => {
    const numStars = Math.round(rating /2);
    
    const fullStars = [];
    const emptyStars = [];

    for (let i = 0; i<5 ; i ++){
        if(i <numStars) {
            fullStars.push(i);
        }else {
            emptyStars.push(i);
        }
    }

    return (
        <div className='text-yellow-500 flex'>
            {fullStars.map(index => <IoMdStar key={index} /> )}
            {emptyStars.map(index => <IoIosStarOutline  key={index}/> )}
        </div>
  )
}

export default Stars