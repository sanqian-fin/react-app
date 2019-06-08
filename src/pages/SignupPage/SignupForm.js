import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import firebase from '../../utils/firebase'

const Label = styled.label`
  display: block;
`

const Input = styled(Field)`
  display: block;
`

const Error = styled.div`
  color: ${props => props.theme.colors.error};
`

const schema = Yup.object().shape({
  email: Yup.string()
    .email('invalid email')
    .required('required'),
  username: Yup.string().required('Required'),
  password: Yup.string()
    .min(8, 'at least 8 characters')
    .required('required'),
})

function SignupForm({ history }) {
  const onSubmit = values => {
    const { email, password } = values
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => history.push('/'))
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
        alert(errorMessage)
      })
  }

  return (
    <Formik
      initialValues={{
        email: '',
        username: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <Label>
            Username
            <Input type="text" name="username" />
          </Label>
          <ErrorMessage name="username" component={Error} />
          <Label>
            Email
            <Input type="email" name="email" />
          </Label>
          <ErrorMessage name="email" component={Error} />
          <Label>
            Password
            <Input type="password" name="password" />
          </Label>
          <ErrorMessage name="password" component={Error} />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}

SignupForm.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(SignupForm)
