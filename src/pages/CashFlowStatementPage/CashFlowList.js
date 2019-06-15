import React, { useEffect } from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { FaQuestionCircle } from 'react-icons/fa'

import Container from '../../components/Container'
import firebase from '../../utils/firebase'

const db = firebase.firestore()

const list = [
  {
    id: '1',
    category: 'Food',
    note: 'Noodles',
    cost: 30,
    date: dayjs(),
    type: -1,
  },
  {
    id: '2',
    category: 'Salary',
    note: '',
    cost: 2000,
    date: dayjs(),
    type: 1,
  },
]

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

function CashFlowList() {
  useEffect(() => {
    db.collection('cashF')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // eslint-disable-next-line no-console
          console.log(`${doc.id} => ${doc.data()}`)
        })
      })
  }, [])

  return (
    <Container>
      {list.map(item => (
        <Item key={item.id}>
          <Row>
            <FaQuestionCircle style={{ width: 30, height: 30 }} />
            <div>
              <div>{item.category}</div>
              <div className="note">{item.note}</div>
            </div>
          </Row>
          <div className={item.type > 0 ? 'income' : 'expense'}>
            {item.cost}
          </div>
        </Item>
      ))}
    </Container>
  )
}

export default CashFlowList
