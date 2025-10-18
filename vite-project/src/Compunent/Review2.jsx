import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const Review2 = ({data}) => {

  const Data = data
  console.log(Data);
  

  return (
    <div className='flex justify-between gap-3 my-10 shadow-2xl p-6 rounded-2xl py-8 items-center'>     
        <div className='w-10'><img src={Data.image} alt=""  className='w-10'/></div>
        <div>
          <div className='font-bold mb-3'>{Data.user_name}</div>
          <div className='flex gap-2'><FaQuoteLeft />{Data.review_text}</div>
          
        </div>     
    </div>
  );
};

export default Review2;
