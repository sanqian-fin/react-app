import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaQuestionCircle } from 'react-icons/fa'
import { connect } from 'react-redux'

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

function CashFlowList({ statements }) {
  return (
    <Container>
      {statements.map(item => (
        <Item key={item.id}>
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
}

const mapState = ({ statement }) => ({
  statements: statement.list,
})

export default connect(mapState)(CashFlowList)
