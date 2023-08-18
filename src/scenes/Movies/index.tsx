import { useEffect, useState } from 'react'
import Movies from './Movies'
import { fetchMovies } from '../../api'

function MoviesContainer() {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([] as Movie[])

  const initialFetch = async () => {
    const newMovies = await fetchMovies(page)
    setMovies(newMovies)
    // adicionar paginação
  }

  const fetchMoreMovies = async () => {
    const newMovies = await fetchMovies(page)
    setMovies([...movies, ...newMovies])
    setPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    initialFetch()
  })

  return <Movies movies={movies} onEndReach={fetchMoreMovies} />
}

export default MoviesContainer
