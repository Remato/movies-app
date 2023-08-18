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

type Props = {
  movies: Movie[]
  onEndReach(): void
}

function Movies({ movies, onEndReach }: Props) {
  const renderCard = (item: Movie) => {
    const { poster_path } = item as Movie

    return (
      <MovieView>
        <MovieCard path={poster_path} />
      </MovieView>
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
        <MoviesList
          showsHorizontalScrollIndicator={false}
          data={movies}
          numColumns={2}
          // onEndReached={onEndReach}
          // onEndReachedThreshold={0.2}
          renderItem={({ item }) => {
            return renderCard(item as Movie)
          }}
        />
      </Wrapper>
    </SafeAreaView>
  )
}

export default Movies
