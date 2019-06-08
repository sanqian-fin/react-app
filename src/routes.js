import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFoundPage from './pages/NotFoundPage'
import PrivateRoute from './components/PrivateRoute'

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
  }
]

const generateRoutes = (routes, parentProps) => {
  return (
    <Switch>
      {routes.map(({ routes: childRoutes, layout: Layout, subpath, isPrivate, ...props }) => {
        const CrossRoutes = isPrivate ? PrivateRoute : Route
        const path = subpath ? `${parentProps.path}${subpath}` : props.path
        if (childRoutes) {
          return (
            <CrossRoutes
              key={JSON.stringify(routes)}
              {...props}
              render={(layoutProps) => (
                <Layout {...layoutProps}>{generateRoutes(childRoutes, props)}</Layout>
              )}
            />
          )
        }
        return <CrossRoutes key={JSON.stringify(routes)} {...props} path={path} />
      })}
      <PrivateRoute path="**" component={NotFoundPage} />
    </Switch>
  )
}

const Routes = () => {
  return <BrowserRouter>{generateRoutes(rootRoutes)}</BrowserRouter>
}

export default Routes
