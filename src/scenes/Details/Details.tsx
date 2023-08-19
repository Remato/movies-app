/* eslint-disable camelcase */
import {
  Wrapper,
  Image,
  OverView,
  Subtitle,
  Title,
  Header,
  CardRow,
  BackIcon,
  FavoriteIcon,
  CardsWrapper,
  DetailsWrapper,
  BackIconWrapper,
  InnerHeaderWrapper,
  FavoriteIconWrapper,
} from './styles'
import { Card } from '../../components'
import { formatData } from '../../utils/helpers'

type Props = {
  movie: Movie
  favorited: boolean
  onPressBack(): void
  onPressFavorite(): void
}

function Details({ movie, favorited, onPressBack, onPressFavorite }: Props) {
  /* eslint-disable-next-line camelcase */
  const {
    title,
    overview,
    popularity,
    poster_path,
    vote_average,
    release_date,
  } = movie

  return (
    <Wrapper>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      />
      <Header>
        <InnerHeaderWrapper>
          <BackIconWrapper>
            <BackIcon name="arrow-left" onPress={onPressBack} />
          </BackIconWrapper>
          <FavoriteIconWrapper favorited={favorited}>
            <FavoriteIcon
              name="heart"
              onPress={onPressFavorite}
              favorited={favorited}
            />
          </FavoriteIconWrapper>
        </InnerHeaderWrapper>
      </Header>

      <DetailsWrapper>
        <Title>{title}</Title>
        <Subtitle>Sinopse</Subtitle>
        <OverView>{overview}</OverView>

        <CardsWrapper>
          <CardRow>
            <Card iconName="heart" label="Média Geral" text={vote_average} />
            <Card iconName="star" label="Popularidade" text={popularity} />
          </CardRow>
          <CardRow>
            <Card
              iconName="calendar"
              label="Lançamento"
              text={formatData(release_date)}
            />
          </CardRow>
        </CardsWrapper>
      </DetailsWrapper>
    </Wrapper>
  )
}

export default Details
