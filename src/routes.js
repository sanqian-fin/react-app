import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute/Loadable'

import HomePage from './pages/HomePage/Loadable'
import LoginPage from './pages/LoginPage/Loadable'
import SignupPage from './pages/SignupPage'
import NotFoundPage from './pages/NotFoundPage/Loadable'

export const rootRoutes = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: true,
    path: '/login',
    component: LoginPage,
  },
  {
    exact: true,
    path: '/signup',
    component: SignupPage,
  },
]

export const generateRoutes = (routes, parentProps) => {
  return (
    <Switch>
      {routes.map(
        ({
          routes: childRoutes,
          layout: Layout,
          subpath,
          isPrivate,
          ...routeProps
        }) => {
          const CrossRoutes = isPrivate ? PrivateRoute : Route
          const path = subpath
            ? `${parentProps.path}${subpath}`
            : routeProps.path
          if (childRoutes) {
            return (
              <CrossRoutes
                key={JSON.stringify(routes)}
                {...routeProps}
                render={layoutProps => (
                  <Layout {...layoutProps}>
                    {generateRoutes(childRoutes, routeProps)}
                  </Layout>
                )}
              />
            )
          }
          return (
            <CrossRoutes
              key={JSON.stringify(routes)}
              {...routeProps}
              path={path}
            />
          )
        }
      )}
      <Route path="**" component={NotFoundPage} />
    </Switch>
  )
}
