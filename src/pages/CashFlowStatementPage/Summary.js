import React from 'react'
import styled from 'styled-components'

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

const list = [
  {
    label: 'Income',
    value: 0,
    className: 'income',
  },
  {
    label: 'Expense',
    value: 300,
    className: 'expense',
  },
  {
    label: 'Total',
    value: -300,
  },
]

function Summary() {
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
            {item.value}
          </div>
        </Row>
      ))}
    </Container>
  )
}

export default Summary
