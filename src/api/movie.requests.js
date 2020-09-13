import { get } from '../utils/api'

export function getPopularMovies() {
  return get('/movie/popular')
}

export function getUpcomingMovies() {
  return get('/movie/upcoming')
}

export function getTopRatedMovies() {
  return get('/movie/top_rated')
}

export function getMovieDetail(id) {
  return get(`/movie/${id}`)
}