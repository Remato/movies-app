import { create } from 'zustand'

const useMovie = create<MovieStore>((set) => ({
  currentMovie: {} as Movie,
  showFavorites: false,
  setMovie: (movie: Movie) => {
    set(() => ({ currentMovie: movie }))
  },
  setShowFavorites: (show: boolean) => {
    set(() => ({ showFavorites: show }))
  },
}))

export default useMovie
