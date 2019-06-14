import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Button from '../../components/Button'
import logo from '../../assets/logo.png'
import firebase from '../../utils/firebase'

const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
      <Logo src={logo} />
      {isAuth ? (
        <div>
          <Button onClick={logout}>logout</Button>
        </div>
      ) : (
        <div>
          <Button
            className="transparent"
            onClick={() => history.push('/login')}
          >
            login
          </Button>
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
