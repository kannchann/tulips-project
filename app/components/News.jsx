import React from 'react'
import Card from './Card.jsx'

const News = () => {
  return (
    <>
    <div className='flex flex-col bg-[#F2F2F2] px-24 py-24 min-h-screen gap-10'>
    <div className='flex w-full justify-between  text-cobalt-blue'>
    <span className='font-regular text-3xl'>
      Latest News and Events
    </span>
    <span>
      See all news and events
    </span>
   
    </div>
    <div className='flex gap-8'>
    <Card />
    <Card />
    <Card />
    </div>
    
    </div>
   
   
   
    </>
  )
}

export default News