import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import firebase from '../../utils/firebase'

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const MenuItem = styled.li`
  text-transform: capitalize;
  padding: 10px;
  cursor: pointer;
`

const Line = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`

function ProfileMenu({ history }) {
  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (e) {
      console.error(e)
    }
  }
  const goto = path => {
    history.push(path)
  }

  return (
    <Menu>
      <MenuItem onClick={() => goto('/cash-flow-statement')}>
        cash flow statement
      </MenuItem>
      <MenuItem onClick={() => goto('/balance-sheet')}>balance sheet</MenuItem>
      <MenuItem onClick={() => goto('/income-statement')}>
        income statement
      </MenuItem>
      <MenuItem onClick={() => goto('/setting')}>setting</MenuItem>
      <Line />
      <MenuItem onClick={logout}>logout</MenuItem>
    </Menu>
  )
}

ProfileMenu.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(ProfileMenu)
