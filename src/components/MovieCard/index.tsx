import { Routes } from '../../utils/enums'
import { Wrapper, Image } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useMovie } from '../../stores'

type Props = {
  path: string
  movie: Movie
}

function MovieCard({ movie, path }: Props) {
  const { setMovie } = useMovie()
  const { navigate } = useNavigation()

  const onPressMovie = () => {
    setMovie(movie)
    navigate(Routes.DETAILS as never)
  }

  return (
    <Wrapper onPress={onPressMovie}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${path}` }} />
    </Wrapper>
  )
}

export default MovieCard
