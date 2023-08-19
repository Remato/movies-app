import { useMovie } from '../../stores'
import Details from './Details'
import { favoriteMovie } from '../../api'
import { Alert } from 'react-native'
import { useState } from 'react'

function DetailsContainer() {
  const { showFavorites, currentMovie } = useMovie()
  const [favorited, setFavorited] = useState(showFavorites)

  const onPressFavorite = async () => {
    const { id } = currentMovie
    try {
      await favoriteMovie(id, !showFavorites)
      setFavorited(!showFavorites)
    } catch (error) {
      Alert.alert('Favoritos', 'Erro ao favoritar filme')
    }
  }

  const onPressBack = () => {
    // goback
  }

  return (
    <Details
      favorited={favorited}
      movie={currentMovie}
      onPressBack={onPressBack}
      onPressFavorite={onPressFavorite}
    />
  )
}

export default DetailsContainer
