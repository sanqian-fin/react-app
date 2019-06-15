import React from 'react'
import styled from 'styled-components'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import dayjs from 'dayjs'

import Container from '../../components/Container'
import { Label, Input, Error } from '../../components/Form'
import Button from '../../components/Button'

const CustomForm = styled(Form)``

const Schema = Yup.object().shape({
  type: Yup.number().required('required'),
  cost: Yup.string().required('required'),
  category: Yup.string().required('required'),
  date: Yup.string().required('required'),
  note: Yup.string(),
})

function CashFlowStatementFormPage() {
  const onSubmit = values => {
    // eslint-disable-next-line no-console
    console.log(values)
  }

  return (
    <Container>
      <Formik
        initialValues={{
          type: -1,
          cost: '',
          category: '',
          date: dayjs().format('YYYY-MM-DD'),
        }}
        validationSchema={Schema}
        onSubmit={onSubmit}
      >
        {() => (
          <CustomForm>
            <Label>
              Type
              <Input component="select" name="type">
                <option value={1}>Income</option>
                <option value={-1}>Expense</option>
              </Input>
            </Label>
            <ErrorMessage name="type" component={Error} />
            <Label>
              Cost
              <Input type="number" name="cost" placeholder="0.00" />
            </Label>
            <ErrorMessage name="cost" component={Error} />
            <Label>
              Category
              <Input component="select" name="category">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Input>
            </Label>
            <ErrorMessage name="category" component={Error} />
            <Label>
              Date
              <Input type="date" name="date" />
            </Label>
            <ErrorMessage name="date" component={Error} />
            <Label>
              Note
              <Input component="textarea" name="note" />
            </Label>
            <Button className="primary full" type="submit">
              save
            </Button>
          </CustomForm>
        )}
      </Formik>
    </Container>
  )
}

export default CashFlowStatementFormPage
