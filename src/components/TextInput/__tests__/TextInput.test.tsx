import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { render } from '@testing-library/react-native'
import { TextInput } from '../..'

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
  it('Deve ser capaz de renderizar o input de usuário', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <ThemeProvider theme={theme}>
        <TextInput
          labelName="Usuário"
          leftIconName="user"
          placeholder="Usuário"
          rightIconName="x-circle"
          autoCapitalize="none"
          value="user"
        />
      </ThemeProvider>,
    )

    const value = getByDisplayValue('user')
    const placeholder = getByPlaceholderText('Usuário')

    expect(value).toBeTruthy()
    expect(placeholder).toBeTruthy()
  })

  it('Deve ser capaz de renderizar o input de senha', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <ThemeProvider theme={theme}>
        <TextInput
          secureTextEntry
          labelName="Senha"
          leftIconName="lock"
          placeholder="Senha"
          rightIconName="x-circle"
          autoCapitalize="none"
          value="123"
        />
      </ThemeProvider>,
    )

    const value = getByDisplayValue('123')
    const placeholder = getByPlaceholderText('Senha')

    expect(value).toBeTruthy()
    expect(placeholder).toBeTruthy()
  })
})
