import React from 'react'

type inputProps = {
    textContent: string;
    sizeInput:string;

  };

const Input = ({textContent,sizeInput}:inputProps) => {
  return (
    <div>
        <input
        style={{ width: sizeInput }}
        placeholder ={textContent} className= {` mr-[0.5rem] bg-gray-800 placeholder-gray-400 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-transparent border-2 border-gray-500 `}
        ></input>
        
    </div>
  )
}

export default Input