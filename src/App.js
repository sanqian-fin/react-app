import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

import { rootRoutes as routes, generateRoutes } from './routes'
import GlobalStyle from './globalStyle'
import theme from './themes'

import AppBar from './components/AppBar'

function App({ onAuthStateChanged }) {
  useEffect(() => {
    onAuthStateChanged()
  })

  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <Helmet>
            <title>Home | Sanqian</title>
          </Helmet>
          <AppBar />
          {generateRoutes(routes)}
        </Router>
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
}

App.propTypes = {
  onAuthStateChanged: PropTypes.func.isRequired,
}

const mapDispatch = ({ user }) => ({
  onAuthStateChanged: user.onAuthStateChangedObserver,
})

export default connect(
  null,
  mapDispatch
)(App)
