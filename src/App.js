import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import store from './store'
import { rootRoutes as routes, generateRoutes } from './routes'
import GlobalStyle from './globalStyle'
import theme from './themes'

import AppBar from './components/AppBar'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <Router>
            <AppBar />
            {generateRoutes(routes)}
          </Router>
          <GlobalStyle />
        </>
      </ThemeProvider>
    </Provider>
  )
}

export default App
