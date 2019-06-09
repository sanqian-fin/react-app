import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import firebase from '../../utils/firebase'

const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.primary};
  justify-content: space-between;
  padding: 15px;
`

const Button = styled.button`
  text-transform: capitalize;
`

function AppBar({ history, isAuth }) {
  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Container>
      <div>Logo</div>
      {isAuth ? (
        <div>
          <Button onClick={logout}>logout</Button>
        </div>
      ) : (
        <div>
          <Button onClick={() => history.push('/login')}>login</Button>
          <Button onClick={() => history.push('/signup')}>signup</Button>
        </div>
      )}
    </Container>
  )
}

AppBar.propTypes = {
  history: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
}

const mapState = ({ user }) => ({
  isAuth: user.isAuth,
})

export default connect(
  mapState,
  null
)(withRouter(AppBar))
