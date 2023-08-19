import { useCallback, useState } from 'react'
import Movies from './Movies'
import { fetchMovies, fetchFavorites } from '../../api'
import { useFocusEffect } from '@react-navigation/native'

function MoviesContainer() {
  const [moviesPage, setMoviesPage] = useState(1)
  const [favoritesPage, setFavoritesPage] = useState(1)
  const [movies, setMovies] = useState([] as Movie[])
  const [favorites, setFavorites] = useState([] as Movie[])

  const initialFetch = async () => {
    const newMovies = await fetchMovies(moviesPage)
    const favorites = await fetchFavorites(favoritesPage)
    setMovies(newMovies)
    setFavorites(favorites)
    setMoviesPage((prevPage) => prevPage + 1)
    setFavoritesPage((prevPage) => prevPage + 1)
  }

  const fetchMoreMovies = async () => {
    const newMovies = await fetchMovies(moviesPage)
    setMovies([...movies, ...newMovies])
    setMoviesPage((prevPage) => prevPage + 1)
  }

  const fetchMoreFavorites = async () => {
    const newFavorites = await fetchFavorites(favoritesPage)
    setFavorites([...favorites, ...newFavorites])
    setFavoritesPage((prevPage) => prevPage + 1)
  }

  useFocusEffect(
    useCallback(() => {
      initialFetch()
    }, []),
  )

  return (
    <Movies
      movies={movies}
      favorites={favorites}
      moreMovies={fetchMoreMovies}
      moreFavorites={fetchMoreFavorites}
    />
  )
}

export default MoviesContainer
