import { useState } from 'react'
import {
  Wrapper,
  LeftButtonText,
  LeftButtonWrapper,
  RightButtonText,
  RightButtonWrapper,
} from './styles'

function Menu() {
  const [filtered, setFiltered] = useState(false)

  const addFilter = () => setFiltered(true)

  const removeFilter = () => setFiltered(false)

  return (
    <Wrapper>
      <LeftButtonWrapper filtered={filtered} onPress={removeFilter}>
        <LeftButtonText filtered={filtered}>Todos os Filmes</LeftButtonText>
      </LeftButtonWrapper>

      <RightButtonWrapper filtered={filtered} onPress={addFilter}>
        <RightButtonText filtered={filtered}>Filmes Favoritos</RightButtonText>
      </RightButtonWrapper>
    </Wrapper>
  )
}

export default Menu
