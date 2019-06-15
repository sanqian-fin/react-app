import React, { useState } from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

import Container from '../../components/Container'

const Row = styled.div`
  display: flex;
  justify-content: space-around;
`

const Button = styled.div`
  cursor: pointer;
`

function Header() {
  const [date, setDate] = useState(dayjs())

  const prev = () => {
    setDate(date.subtract(1, 'day'))
  }
  const next = () => {
    setDate(date.add(1, 'day'))
  }

  return (
    <Container>
      <Row>
        <Button onClick={prev}>
          <FaChevronLeft />
        </Button>
        <div>{date.format('DD MMMM YYYY')}</div>
        <Button onClick={next}>
          <FaChevronRight />
        </Button>
      </Row>
    </Container>
  )
}

export default Header
