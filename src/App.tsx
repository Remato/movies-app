import React, { FC, useEffect } from 'react'
import Stacks from './navigation'
import { ThemeProvider } from 'styled-components/native'
import SplashScreen from 'react-native-splash-screen'

const App: FC = () => {
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

  useEffect(() => {
    SplashScreen.hide()
  })

  return (
    <ThemeProvider theme={theme}>
      <Stacks />
    </ThemeProvider>
  )
}

export default App
