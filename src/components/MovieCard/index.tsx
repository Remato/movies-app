import { Wrapper, Image } from './styles'

type Props = {
  path: string
}

function MovieCard({ path }: Props) {
  return (
    <Wrapper>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${path}` }} />
    </Wrapper>
  )
}

export default MovieCard
