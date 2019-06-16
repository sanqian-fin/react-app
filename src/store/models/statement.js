import dayjs from 'dayjs'

import firebase from '../../utils/firebase'

const db = firebase.firestore()

export const statement = {
  state: {
    list: [],
    currentDate: dayjs(),
  },
  reducers: {
    setList(state, payload) {
      return {
        ...state,
        list: payload,
      }
    },
    setCurrentDate(state, payload) {
      return {
        ...state,
        currentDate: payload,
      }
    },
  },
  effects: () => ({
    async getStatementList(accountId, rootState) {
      if (!accountId) {
        return
      }
      const list = []
      const { currentDate } = rootState.statement
      const format = 'YYYY-MM-DD'
      const start = currentDate.startOf('date').format(format)
      const end = currentDate.endOf('date').format(format)
      const querySnapshot = await db
        .collection('statements')
        .where('accountId', '==', accountId)
        .where('date', '>=', new Date(start))
        .where('date', '<=', new Date(end))
        .get()
      querySnapshot.forEach(function(doc) {
        list.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      this.setList(list)
    },
    async deleteStatement({ accountId, statementId }) {
      try {
        await db
          .collection('statements')
          .doc(statementId)
          .delete()
        this.getStatementList(accountId)
      } catch (err) {
        console.error('Error removing document: ', err)
      }
    },
  }),
}
