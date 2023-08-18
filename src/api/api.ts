import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export const fetchMovies = async (page: number): Promise<Movie[]> => {
  try {
    const { data } = await api.get(
      `/movie/popular?language=pt-BR&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTHORIZATION}`,
          'Content-Type': 'application/json',
        },
      },
    )
    return data.results
  } catch (error) {
    throw new Error(error as string)
  }
}
