import React from 'react'
import Image from 'next/image'
import CardImage from '../../public/CardImage.svg'
const card = () => {
  return (
    

<div classNameName="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
    <div>
        NEWS-JAN 1, 2023
    </div>
   
        <Image className="rounded-t-lg" src={CardImage} width={152} height={70} />
 
   
</div>

  )
}

export default card