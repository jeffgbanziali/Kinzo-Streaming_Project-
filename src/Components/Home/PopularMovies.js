import React from 'react'
import Movie from '../Movie';
import {Movies} from '../../Data/MoviesData';
//import Titles from "../Titles";
import { HiBellSnooze } from "react-icons/hi2";

function PopularMovies() {
  return (
    <>
      <div className='flex my-16'>
< HiBellSnooze  className='sm:w-6 sm:h-6 w-5 h-5 text-subMain'/> <h2 className='sm:text-xl font-bold text-lg'>Popular Movies</h2>  
      </div>
      
      <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
{
  Movies.slice(0, 8).map((movie, index ) => (
    <Movie key={index} movie={movie} />
    
  ))
}
      </div>
    </>
  )
}

export default PopularMovies