import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaPlusCircle } from 'react-icons/fa'
import { connect } from 'react-redux'
import get from 'lodash/get'

import CashFlowList from './CashFlowList'
import Summary from './Summary'
import Header from './Header'

const Fab = styled.button`
  position: absolute;
  bottom: 20px;
  right: 15px;
`

function CashFlowStatementPage({
  accountId,
  currentDate,
  history,
  getStatementList,
}) {
  useEffect(() => {
    getStatementList(accountId)
  }, [accountId, currentDate])

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
  accountId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  getStatementList: PropTypes.func.isRequired,
  currentDate: PropTypes.object.isRequired,
}

const mapState = ({ account, statement: { currentDate } }) => ({
  accountId: get(account, 'list[0].id', ''),
  currentDate,
})

const mapDispatch = ({ statement: { getStatementList } }) => ({
  getStatementList,
})

export default connect(
  mapState,
  mapDispatch
)(CashFlowStatementPage)
