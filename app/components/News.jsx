import React from 'react'
import Card from './Card.jsx'

const News = () => {
  return (
    <>
    <div className='flex w-full justify-between px-24 py-24 bg-[#F2F2F2] min-h-screen text-cobalt-blue'>
    <div className='font-regular text-3xl'>
      Latest News and Events
    </div>
    <div>
      See all news and events
    </div>
    <Card />
    </div>
   
   
    </>
  )
}

export default News