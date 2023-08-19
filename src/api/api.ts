import axios from 'axios'
import { API_KEY, API_TOKEN, ACCOUNT_ID, ACCOUNT_NUMBER } from '@env'

const apiv3 = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

const apiv4 = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
})

export const fetchMovies = async (page: number): Promise<Movie[]> => {
  try {
    const { data } = await apiv3.get(
      `/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_TOKEN}`,
        },
      },
    )
    return data.results
  } catch (error) {
    throw new Error(error as string)
  }
}

export const favoriteMovie = async (
  mediaId: number,
  isFavorite: boolean,
): Promise<void> => {
  try {
    const { data } = await apiv3.post(
      `/account/${ACCOUNT_NUMBER}/favorite`,
      { media_type: 'movie', media_id: mediaId, favorite: isFavorite },
      {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    )
    return data
  } catch (error) {
    throw new Error(error as string)
  }
}

export const fetchFavorites = async (page: number): Promise<Movie[]> => {
  try {
    const { data } = await apiv4.get(
      `/account/${ACCOUNT_ID}/movie/favorites?page=${page}&language=pt-BR`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      },
    )
    return data.results
  } catch (error) {
    throw new Error(error as string)
  }
}
