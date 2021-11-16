import React, { useState } from 'react'
import { ThemeContext, ThemeProvider } from 'styled-components'
import { DarkTheme, LightTheme } from './styles/Theme'
import Dashboard from "./pages/Dashboard"
import GlobalStyles from "./styles/Global"

function App() {
  const [theme, toggleTheme] = useState('dark');
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider theme={theme === 'dark' ? DarkTheme : LightTheme }>
          <GlobalStyles />
          <Dashboard />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>


  )
}

export default App;
