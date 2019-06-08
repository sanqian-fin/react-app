import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFoundPage from './pages/NotFoundPage/Loadable'
import PrivateRoute from './components/PrivateRoute/Loadable'

export const rootRoutes = [
  {
    exact: true,
    path: '/',
    render: () => <h1>home</h1>,
  },
  {
    exact: true,
    path: '/login',
    render: () => <h1>login</h1>,
  },
]

const generateRoutes = (routes, parentProps) => {
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

const Routes = () => {
  return <BrowserRouter>{generateRoutes(rootRoutes)}</BrowserRouter>
}

export default Routes
