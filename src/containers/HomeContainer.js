import React, { useEffect, useState } from 'react'
import { getPopularMovies, getUpcomingMovies, getTopRatedMovies } from '../api/movie.requests'
import MoviesCarousel from '../components/MoviesCarousel'

export default function HomeContainer() {

    const [popularMovies, setPopularMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])

    useEffect(() => {
        getPopularMovies()
            .then(movies => setPopularMovies(movies.results))
            .catch(error => console.log(error))

        getUpcomingMovies()
            .then(movies => setUpcomingMovies(movies.results))
            .catch(error => console.log(error))

        getTopRatedMovies()
            .then(movies => setTopRatedMovies(movies.results))
            .catch(error => console.log(error))
    }, [])

    // console.log(movies)

    return (
        <>
        <h2>Popular movies</h2>
        <MoviesCarousel movies={popularMovies} />
        <h2>Upcoming movies</h2>
        <MoviesCarousel movies={upcomingMovies} />
        <h2>Top rated movies</h2>
        <MoviesCarousel movies={topRatedMovies} />
        </>
    )
}