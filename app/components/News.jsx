import React from 'react'
import Card from './Card.jsx'

const News = () => {
  return (
  
    <div className='flex flex-col bg-[#F2F2F2] p-4  md:p-16 lg:p-24 max-h-screen gap-10'>
    <div className='flex items-center w-full justify-between  text-cobalt-blue'>
    <span className='font-regular text-lg md:text-3xl'>
      Latest News and Events
    </span>
    <span className='text-xs md:text-sm'>
      See all news and events
    </span>
   
    </div>
    <div className='flex gap-2 md:gap-8'>
    <Card />
    <Card />
    <Card />
    </div>
    
    </div>
   
   
   

  )
}

export default News