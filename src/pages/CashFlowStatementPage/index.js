import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaPlusCircle } from 'react-icons/fa'

import CashFlowList from './CashFlowList'
import Summary from './Summary'
import Header from './Header'

const Fab = styled.button`
  position: absolute;
  bottom: 20px;
  right: 15px;
`

function CashFlowStatementPage({ history }) {
  const gotoAdd = () => history.push('/cash-flow-statement/add')

  return (
    <div>
      <Header />
      <Summary />
      <CashFlowList />
      <Fab onClick={gotoAdd}>
        <FaPlusCircle style={{ width: 50, height: 50 }} />
      </Fab>
    </div>
  )
}

CashFlowStatementPage.propTypes = {
  history: PropTypes.object.isRequired,
}

export default CashFlowStatementPage
