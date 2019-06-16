import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Container from '../../components/Container'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  .income {
    color: ${props => props.theme.colors.success};
  }
  .expense {
    color: ${props => props.theme.colors.error};
  }
`

function Summary({ income, expense }) {
  const list = [
    {
      label: 'Income',
      value: income,
      className: 'income',
    },
    {
      label: 'Expense',
      value: expense,
      className: 'expense',
    },
    {
      label: 'Total',
      value: income - expense,
    },
  ]

  return (
    <Container>
      {list.map(item => (
        <Row key={item.label}>
          <div>{item.label}</div>
          <div
            className={
              item.className || (item.value >= 0 ? 'income' : 'expense')
            }
          >
            {(item.value / 10000).toFixed(2)}
          </div>
        </Row>
      ))}
    </Container>
  )
}

Summary.propTypes = {
  income: PropTypes.number.isRequired,
  expense: PropTypes.number.isRequired,
}

const mapState = ({ statement: { list } }) => {
  return {
    income: list.reduce(
      (sum, item) => (item.type > 0 ? sum + item.cost : sum),
      0
    ),
    expense: list.reduce(
      (sum, item) => (item.type < 0 ? sum + item.cost : sum),
      0
    ),
  }
}

export default connect(mapState)(Summary)
