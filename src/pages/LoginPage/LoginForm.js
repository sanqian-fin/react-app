import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'

const Label = styled.label`
  display: block;
`

const Input = styled(Field)`
  display: block;
`

const Error = styled.div`
  color: red;
`

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().required('Required'),
})

function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        // same shape as initial values
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {() => (
        <Form>
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

export default LoginForm
