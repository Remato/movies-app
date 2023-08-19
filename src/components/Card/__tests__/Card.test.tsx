import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { render } from '@testing-library/react-native'
import { Card } from '../..'

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

describe('Card', () => {
  it('Deve ser capaz de renderizar o label', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card iconName="user" label="test_label" text="test_text" />
      </ThemeProvider>,
    )

    const label = getByText('test_label')
    expect(label).toBeTruthy()
  })

  it('Deve ser capaz de renderizar o texto', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card iconName="user" label="test_label" text="test_text" />
      </ThemeProvider>,
    )

    const text = getByText('test_text')
    expect(text).toBeTruthy()
  })
})
