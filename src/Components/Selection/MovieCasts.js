import React from 'react'
import { FaUserFriends } from 'react-icons/fa'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { UsersData } from '../../Data/UsersData'
import Titles from '../Titles'

function MovieCasts() {
  return (
    <div className='my-12'>
      <Titles title='Casts' Icon= {FaUserFriends} />
      <div className='mt-10'>
          ndhs 
      </div>  
    </div>
  )
}

export default MovieCasts