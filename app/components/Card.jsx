import React from 'react';
import Image from 'next/image';
import CardImage from '../../public/CardImage.svg';

const Card = () => {
  return (
    <div className="flex flex-col bg-white border border-gray-300  text-cobalt-blue">
        <div className=' px-2 pt-2 md:px-8 md:pt-8'>
        <div className=" text-xs md:text-sm  mb-3">NEWS - JAN 1, 2023</div>
      <div className="text-xs font-medium mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <div className="line-clamp-5 text-xs max-w-md mb-3 hidden md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nisi, lobortis eu eros at, egestas
        sollicitudin ipsum. Orci varius natoque penatibus et magnis dis parturient…
      </div>
        </div>
     
      <div>
        <Image src={CardImage} width={652} height={170} />
      </div>
    </div>
  );
};

export default Card;
