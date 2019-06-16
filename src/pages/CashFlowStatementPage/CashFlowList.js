import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaQuestionCircle } from 'react-icons/fa'
import { connect } from 'react-redux'
import get from 'lodash/get'

import Container from '../../components/Container'

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  .income {
    color: ${props => props.theme.colors.success};
  }
  .expense {
    color: ${props => props.theme.colors.error};
  }
  .note {
    color: ${props => props.theme.colors.lightGray};
    font-size: 14px;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  > :last-child {
    margin-left: 10px;
  }
`

function CashFlowList({ statements, accountId, deleteStatement }) {
  const tapItem = statementId => {
    const ok = window.confirm('Are you sure you want to delete the item ?')
    if (ok) {
      deleteStatement({ statementId, accountId })
    }
  }

  return (
    <Container>
      {statements.map(item => (
        <Item key={item.id} onClick={() => tapItem(item.id)}>
          <Row>
            <FaQuestionCircle style={{ width: 30, height: 30 }} />
            <div>
              <div>{item.category}</div>
              <div className="note">{item.note}</div>
            </div>
          </Row>
          <div className={item.type > 0 ? 'income' : 'expense'}>
            {(item.cost / 10000).toFixed(2)}
          </div>
        </Item>
      ))}
    </Container>
  )
}

CashFlowList.propTypes = {
  statements: PropTypes.array.isRequired,
  accountId: PropTypes.string.isRequired,
  deleteStatement: PropTypes.func.isRequired,
}

const mapState = ({ statement, account }) => ({
  statements: statement.list,
  accountId: get(account, 'list[0].id', ''),
})

const mapDispatch = ({ statement: { deleteStatement } }) => ({
  deleteStatement,
})

export default connect(
  mapState,
  mapDispatch
)(CashFlowList)
