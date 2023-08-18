import React, { FC } from 'react'
import Stacks from './navigation'
import { ThemeProvider } from 'styled-components/native'

const App: FC = () => {
  const theme = {
    colors: {
      primary: '#EC8B00',
      secondary: '#FFFFFF',
      tertiary: '#2E2F33',
      neutral: '#16171B',
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <Stacks />
    </ThemeProvider>
  )
}

export default App
