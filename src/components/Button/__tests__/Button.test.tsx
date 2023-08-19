import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { render, fireEvent } from '@testing-library/react-native'
import { Button } from '../..'

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

describe('Button', () => {
  const testFunction = jest.fn()
  it('Deve ser capaz de renderizar o label', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onPress={testFunction} title="testButton">
          testButton
        </Button>
      </ThemeProvider>,
    )

    const buttonName = getByText('testButton')
    expect(buttonName).toBeTruthy()
  })

  it('Deve ser capaz de renderizar o label', () => {
    const onPressMock = jest.fn()

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onPress={onPressMock} title="testButton">
          testButton
        </Button>
      </ThemeProvider>,
    )

    const buttonName = getByText('testButton')
    fireEvent.press(buttonName)
    expect(onPressMock).toBeCalled()
  })
})
