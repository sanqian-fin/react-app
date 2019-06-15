import styled from 'styled-components'
import { Field } from 'formik'

export const Label = styled.label`
  display: block;
  margin: 10px 0;
`

export const Input = styled(Field)`
  display: block;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  padding: 5px;
  box-sizing: border-box;
  margin-top: 5px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.lightGray};
`

export const Error = styled.div`
  color: ${props => props.theme.colors.error};
  margin: 10px 0;
`
