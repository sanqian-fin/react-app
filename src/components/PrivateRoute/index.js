import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute({ component: Component, isAuth, ...rest }) {
  const isAuthenticated = isAuth
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  location: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
}

const mapState = ({ user }) => ({
  isAuth: user.isAuth,
})

export default connect(mapState)(PrivateRoute)
