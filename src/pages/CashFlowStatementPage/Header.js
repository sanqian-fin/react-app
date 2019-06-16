import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { connect } from 'react-redux'

import Container from '../../components/Container'

const Row = styled.div`
  display: flex;
  justify-content: space-around;
`

const Button = styled.div`
  cursor: pointer;
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
        <div>{currentDate.format('DD MMMM YYYY')}</div>
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
