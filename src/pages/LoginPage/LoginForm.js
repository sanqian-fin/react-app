import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import Button from '../../components/Button'
import { Input, Label, Error } from '../../components/Form'
import firebase from '../../utils/firebase'

const CustomForm = styled(Form)`
  width: 100%;
  max-width: 500px;
`

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('required'),
  password: Yup.string().required('required'),
})

function LoginForm({ history }) {
  const onSubmit = values => {
    const { email, password } = values
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
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
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <CustomForm>
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
          <Button className="primary full" type="submit">
            Login
          </Button>
        </CustomForm>
      )}
    </Formik>
  )
}

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(LoginForm)
