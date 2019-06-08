import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.primary};
  justify-content: space-between;
  padding: 15px;
`

const Button = styled.button`
  text-transform: capitalize;
`

function AppBar({ history }) {
  return (
    <Container>
      <div>Logo</div>
      <div>
        <Button onClick={() => history.push('/login')}>login</Button>
        <Button onClick={() => history.push('/signup')}>signup</Button>
      </div>
    </Container>
  )
}

AppBar.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(AppBar)
