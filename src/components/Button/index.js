import styled from 'styled-components'

const Button = styled.button`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.colors.dark}
  background-color: white;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  outline: none;
  margin-left: 3px;
  margin-right: 3px;
  padding: 10px;
  cursor: pointer;
  &:active {
    opacity: 0.9;
  }
  &.primary {
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }
  &.dark{
    color: white;
    background-color: ${props => props.theme.colors.dark};
    border-color: ${props => props.theme.colors.dark};
  }
  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &.transparent {
    border-color: transparent;
    background-color: transparent;
    color: white;
  }
  &.full {
    width: 100%;
    margin: 0;
  }
`

export default Button
