import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-darkComponent h-[15%] rounded flex flex-col justify-around'>
        <div  onClick={()=> navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img src={assets.home_icon} alt="" className='w-6'/>
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img src={assets.search_icon} alt="" className='w-6'/>
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-darkComponent h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img src={assets.stack_icon} alt="" className='w-6' />
            <p className='font-bold'>Your Library</p>
          </div>
          <div className='flex gap-3 items-center'>
            <img src={assets.arrow_icon} alt="" className='w-6' />
            <img src={assets.plus_icon} alt="" className='w-6' />
          </div>
        </div>
        <div className='h-[25%] bg-darkSection m-2 rounded p-3 flex flex-wrap items-center gap-3 *:text-sm'>
          <p className='font-medium'>Create your first playlist</p>
          <p className='font-light w-full'>it's easy we'll help you</p>
          <button className='px-5 py-[6px] bg-white p-2 rounded-full text-black font-bold'>Create playlist</button>
        </div>
        <div className='h-[25%] bg-darkSection m-2 rounded p-3 flex flex-wrap items-center gap-3 *:text-sm'>
          <p className='font-medium'>Let's find some podcasts to follow</p>
          <p className='font-light w-full'>We'll keep you updated on new episodes</p>
          <button className='px-5 py-[6px] bg-white p-2 rounded-full text-black font-bold'>Browse podcasts</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
