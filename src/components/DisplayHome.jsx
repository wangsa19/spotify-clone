import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import { albumsData, songsData } from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar/> 
      <div className='mb-4'>
        <h1 className='my-5 fint-bold text-2xl'>Feature Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item, index) => {
          return <AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id} />
        })}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 fint-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
        {songsData.map((item, index) => {
          return <SongItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id} />
        })}
        </div>
      </div>
    </>
  )
}

export default DisplayHome