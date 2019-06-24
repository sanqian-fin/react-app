import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { connect } from 'react-redux'
import dayjs from 'dayjs'

import Container from '../../components/Container'

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Button = styled.div`
  cursor: pointer;
`

const DatePicker = styled.input`
  font-size: 16px;
`

function Header({ currentDate, setCurrentDate }) {
  const prev = () => {
    setCurrentDate(currentDate.subtract(1, 'day'))
  }
  const next = () => {
    setCurrentDate(currentDate.add(1, 'day'))
  }

  return (
    <Container>
      <Row>
        <Button onClick={prev}>
          <FaChevronLeft />
        </Button>
        <DatePicker
          type="date"
          value={currentDate.format('YYYY-MM-DD')}
          onChange={e => setCurrentDate(dayjs(e.target.value, 'YYYY-MM-DD'))}
        />
        <Button onClick={next}>
          <FaChevronRight />
        </Button>
      </Row>
    </Container>
  )
}

Header.propTypes = {
  currentDate: PropTypes.object.isRequired,
  setCurrentDate: PropTypes.func.isRequired,
}

const mapState = ({ statement: { currentDate } }) => ({
  currentDate,
})

const mapDispatch = ({ statement: { setCurrentDate } }) => ({
  setCurrentDate,
})

export default connect(
  mapState,
  mapDispatch
)(Header)
