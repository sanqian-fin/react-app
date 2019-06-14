import React, { useEffect } from 'react'

import firebase from '../../utils/firebase'

const db = firebase.firestore()

function CashFlowList() {
  useEffect(() => {
    db.collection('cashF')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // eslint-disable-next-line no-console
          console.log(`${doc.id} => ${doc.data()}`)
        })
      })
  }, [])

  return <div>list</div>
}

export default CashFlowList
