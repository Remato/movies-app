import { Menu, MovieCard } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Wrapper,
  Header,
  Title,
  MenuIcon,
  MoviesList,
  MovieView,
} from './styles'
import { useMovie } from '../../stores'

type Props = {
  movies: Movie[]
  favorites: Movie[]
  moreMovies(): void
  moreFavorites(): void
}

function Movies({ movies, favorites, moreMovies, moreFavorites }: Props) {
  const { showFavorites } = useMovie()

  const renderCard = (item: Movie) => {
    // eslint-disable-next-line camelcase
    const { poster_path, id } = item as Movie

    return (
      <MovieView key={id}>
        {/* eslint-disable-next-line camelcase */}
        <MovieCard path={poster_path} movie={item} />
      </MovieView>
    )
  }

  const selectMovies = () => {
    return showFavorites ? (
      <MoviesList
        showsHorizontalScrollIndicator={false}
        data={favorites}
        numColumns={2}
        onEndReached={moreFavorites}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => {
          return renderCard(item as Movie)
        }}
      />
    ) : (
      <MoviesList
        showsHorizontalScrollIndicator={false}
        data={movies}
        numColumns={2}
        onEndReached={moreMovies}
        onEndReachedThreshold={0.4}
        renderItem={({ item }) => {
          return renderCard(item as Movie)
        }}
      />
    )
  }

  return (
    <SafeAreaView>
      <Wrapper>
        <Header>
          <Title>BRQ Movies</Title>
          <MenuIcon name="more-vertical" />
        </Header>
        <Menu />
        {selectMovies()}
      </Wrapper>
    </SafeAreaView>
  )
}

export default Movies
