import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Avatar from 'avataaars'

import ProfileMenu from '../../components/ProfileMenu'
import Tooltip from '../../components/Tooltip/Loadable'
import Button from '../../components/Button'
import logo from '../../assets/logo.png'

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
  cursor: pointer;
`

function AppBar({ history, isAuth }) {
  return (
    <Container>
      <Logo src={logo} onClick={() => history.push('/')} />
      {isAuth ? (
        <Tooltip
          placement="bottom-end"
          trigger="click"
          tooltip={<ProfileMenu />}
          closeOnOutOfBoundaries
        >
          <Avatar
            avatarStyle="Circle"
            topType="ShortHairShortRound"
            accessoriesType="Blank"
            hairColor="BrownDark"
            facialHairType="Blank"
            clotheType="BlazerShirt"
            eyeType="Default"
            eyebrowType="Default"
            mouthType="Default"
            skinColor="Light"
            style={{ width: 50, height: 50 }}
          />
        </Tooltip>
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
