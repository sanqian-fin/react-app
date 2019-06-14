import styled from 'styled-components'

const Container = styled.div`
  padding: 30px;
  @media (max-width: 768px;) {
    padding: 15px;
  }
  &.center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default Container
