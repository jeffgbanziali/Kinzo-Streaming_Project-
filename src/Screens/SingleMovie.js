import React from 'react'
import Layout from '../Layout/Layout'
import { Movies } from '../Data/MoviesData';
import { useParams } from 'react-router-dom'
import MovieInfo from '../Components/Selection/MovieInfo';

function SingleMovie() {
    const { id } = useParams();
    const movie = Movies.find((movie) => movie.id === id);

    return (
        <Layout>
            <MovieInfo movie={movie} />
        </Layout>
    )
}

export default SingleMovie