import React from 'react'

function FlexMoviesItems({movie}) {
  return (
    <>
    <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{movie.category}</span>
    </div>
    </>
  )
}

export default FlexMoviesItems