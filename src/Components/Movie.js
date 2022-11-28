import React from 'react'
import { Link } from 'react-router-dom'

function Movies({movie}) {
  return (
    <div className='border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden'>
      <Link to={`/movie/${movie.name}`} className="w-full">
<img src={movie.image} alt={movie.name} className='w-full h-30 object-cover' />

      </Link>
    </div>
  )
}

export default Movies