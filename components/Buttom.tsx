import React from "react";

type ButtonProps = {
  textContent: string;
};

const Button = ({ textContent }: ButtonProps) => {
  return (
    <div className='bg-red-600 py-2 px-6 rounded-[0.1rem] '>
      <p>{textContent}</p>
    </div>
  );
};

export default Button;
