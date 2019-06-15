import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import dayjs from 'dayjs'

import Container from '../../components/Container'
import { Label, Input, Error } from '../../components/Form'
import Button from '../../components/Button'
import firebase from '../../utils/firebase'

const db = firebase.firestore()

const CustomForm = styled(Form)``

const Schema = Yup.object().shape({
  type: Yup.number().required('required'),
  cost: Yup.number()
    .min(1, 'at least 1')
    .required('required'),
  category: Yup.string().required('required'),
  date: Yup.string().required('required'),
  note: Yup.string(),
})

function CashFlowStatementFormPage({ userId, history }) {
  const [catetories, setCategories] = useState([
    {
      id: '',
      name: '-- select category --',
    },
  ])

  useEffect(() => {
    fetchCategories()
    // return () => {
    //   effect
    // };
  }, [])

  const fetchCategories = async () => {
    const categories = [
      {
        id: '',
        name: '-- select category --',
      },
    ]
    const querySnapshot = await db
      .collection('categories')
      .where('userId', '==', userId)
      .get()
    querySnapshot.forEach(function(doc) {
      categories.push({
        id: doc.id,
        ...doc.data(),
      })
    })
    setCategories(categories)
  }

  const addStatement = async values => {
    const data = {
      ...values,
      cost: values.cost * 10000,
      date: new Date(values.date),
      userId,
    }
    await db.collection('statements').add(data)
    history.goBack()
  }

  const onSubmit = values => {
    addStatement(values)
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
              <Input type="number" name="cost" min={1} placeholder="0.00" />
            </Label>
            <ErrorMessage name="cost" component={Error} />
            <Label>
              Category
              <Input component="select" name="category">
                {catetories.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
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

CashFlowStatementFormPage.propTypes = {
  userId: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
}

const mapState = ({ user }) => ({
  userId: user.user.uid,
})

export default connect(mapState)(CashFlowStatementFormPage)
