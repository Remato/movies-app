declare interface MovieStore {
  currentMovie: Movie
  showFavorites: boolean
  setMovie(movie: Movie): void
  setShowFavorites(show: boolean): void
}
