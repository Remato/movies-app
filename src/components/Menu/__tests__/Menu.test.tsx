import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { render } from '@testing-library/react-native'
import { Menu } from '../..'

const theme = {
  colors: {
    primary: '#EC8B00',
    secondary: '#FFFFFF',
    tertiary: '#2E2F33',
    neutral: '#16171B',
    disabled: '#A9A9A9',
    error: '#C32020',
  },
}

describe('TextInput', () => {
  it('Deve ser capaz de renderizar o botão "Todos os Filmes"', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Menu />
      </ThemeProvider>,
    )

    const allMovies = getByText('Todos os Filmes')
    expect(allMovies).toBeTruthy()
  })

  it('Deve ser capaz de renderizar o botão "Filmes Favoritos"', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Menu />
      </ThemeProvider>,
    )

    const favoriteMovies = getByText('Filmes Favoritos')
    expect(favoriteMovies).toBeTruthy()
  })
})
