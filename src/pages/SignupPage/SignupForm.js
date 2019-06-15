import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { withRouter } from 'react-router-dom'

import Button from '../../components/Button'
import { Input, Label, Error } from '../../components/Form'
import firebase from '../../utils/firebase'

const CustomForm = styled(Form)`
  width: 100%;
  max-width: 500px;
`

const schema = Yup.object().shape({
  email: Yup.string()
    .email('invalid email')
    .required('required'),
  // username: Yup.string().required('Required'),
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
        // username: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {() => (
        <CustomForm>
          {/* <Label>
            Username
            <Input type="text" name="username" />
          </Label>
          <ErrorMessage name="username" component={Error} /> */}
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
            Signup
          </Button>
        </CustomForm>
      )}
    </Formik>
  )
}

SignupForm.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(SignupForm)
