import { get } from '../utils/api'

export function getPopularMovies() {
  return get('/results')
}

export function getUpcomingMovies() {
  return get('/upcoming')
}

export function getTopRatedMovies() {
  return get('/top_rated')
}

export function getMovieDetail(id) {
  return get(`/results/${id}`)
}