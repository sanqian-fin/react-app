import React from 'react'

import Container from '../../components/Container'

import LoginForm from './LoginForm'

function LoginPage() {
  return (
    <Container className="center">
      <h1>Login</h1>
      <LoginForm />
    </Container>
  )
}

export default LoginPage
